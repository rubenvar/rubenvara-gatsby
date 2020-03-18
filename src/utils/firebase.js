import firebase from 'firebase/app';
import 'firebase/database';

// config
const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_APIKEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASEURL,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
};

// initialize
const firebaseApp = firebase.initializeApp(firebaseConfig);

// export
export default firebaseApp;
