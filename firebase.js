import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCDMG8dkbQaD-IEAS4Ompkjp2cH4YHN59c",
    authDomain: "urlshortener-9f33d.firebaseapp.com",
    projectId: "urlshortener-9f33d",
    storageBucket: "urlshortener-9f33d.appspot.com",
    messagingSenderId: "481378439084",
    appId: "1:481378439084:web:12808c4a2a336bc73a3409"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();

  export default db;
