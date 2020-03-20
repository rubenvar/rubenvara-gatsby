import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { window } from 'browser-monads';

import '../utils/firebase';

const PostLiker = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [likes, setLikes] = useState(null);
  const [thanks, setThanks] = useState(false);
  // get localStorage to set thanks if already liked
  const liked = window.localStorage.getItem('liked');
  // set ref to firebase to listen for changes
  const likesRef = firebase.database().ref(`${id}/likes`);

  // on load and on data change, get likes
  useEffect(() => {
    likesRef.on('value', snapshot => {
      setLikes(snapshot.val());
    });
    setLoading(false);
    // check if already liked
    if (liked?.split(',').includes(id)) setThanks(true);
  }, [likesRef, liked, id]);

  const sumLike = () => {
    // send to firebase
    const updatedLikes = likes + 1;
    firebase
      .database()
      .ref(id)
      .set({ likes: updatedLikes }) // set firebase
      .then(() => setLikes(updatedLikes)) // set state
      .then(() => {
        // set firebase
        const likedArr = liked ? liked.split(',') : [];
        likedArr.push(id);
        window.localStorage.setItem('liked', likedArr);
      })
      .then(() => {
        setThanks(true);
        setLoading(false);
      });
  };

  const handleClick = async () => {
    // return if liked before
    if (thanks) return console.log('already liked!');
    // if like is valid, then try to authenticate user
    // first authenticate user
    await firebase
      .auth()
      .signInAnonymously()
      .catch(error => {
        // Handle Errors here.
        console.log({ error, code: error.code, message: error.message });
      });
    // If user is signed in, update database, store in localStorage, and change 'liker':
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { isAnonymous, uid } = user;
        // update the db
        sumLike();
      }
    });
  };

  if (loading) return 'loading.....';
  // TODO before data arrives, show empty space to avoid jump on button render
  // TODO improve button disable (it doesn't work now because of useEffect)

  return (
    <div>
      {thanks ? (
        <p className="post__liker">
          <span>{likes} 👍</span>Muchas gracias!
        </p>
      ) : (
        <button
          className="post__liker"
          disabled={loading}
          type="button"
          onClick={e => {
            setLoading(true);
            e.preventDefault();
            handleClick();
          }}
        >
          <span>
            {typeof likes === 'number' ? likes : ''}{' '}
            <span className="emoji">👍</span>
          </span>
          Dale un Like a este post!
        </button>
      )}
    </div>
  );
};

PostLiker.propTypes = {
  id: PropTypes.string,
};

export default PostLiker;
