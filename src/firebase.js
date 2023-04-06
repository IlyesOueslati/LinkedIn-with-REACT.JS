import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2EXvjTzyj-UfQ85Gv8ALDUefx1LWHNhU",
    authDomain: "linkedin-4c0f1.firebaseapp.com",
    projectId: "linkedin-4c0f1",
    storageBucket: "linkedin-4c0f1.appspot.com",
    messagingSenderId: "71135289425",
    appId: "1:71135289425:web:02b065c7c7d53313e85870",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };