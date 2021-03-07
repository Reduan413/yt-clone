import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbC3rAwAd7jKgpTbDkZULlvzPM5mnkYo8",
    authDomain: "clone-299011.firebaseapp.com",
    projectId: "youtubeclone-299011",
    storageBucket: "youtubeclone-299011.appspot.com",
    messagingSenderId: "388505140443",
    appId: "1:388505140443:web:5fab6e042054b9c8fbe0fe"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()