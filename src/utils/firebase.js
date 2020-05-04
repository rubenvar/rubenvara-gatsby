// ?¿?¿?¿?
// fallaba solo la databaseURL, no sé por qué
// https://stackoverflow.com/questions/56566333/cant-determine-firebase-database-url-when-trying-to-read-firebase-database-from
import firebase from 'firebase/app';
import 'firebase/database';

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// config
const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: 'https://rvio-post-likes.firebaseio.com',
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
};

// initialize
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export
export default firebaseApp;
