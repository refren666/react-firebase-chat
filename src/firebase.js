import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCpsb8aLQd3oYBEwqE2qhgGwN2i2YNtiYA",
  authDomain: "facebook-messanger-d3ac8.firebaseapp.com",
  projectId: "facebook-messanger-d3ac8",
  storageBucket: "facebook-messanger-d3ac8.appspot.com",
  messagingSenderId: "372477432418",
  appId: "1:372477432418:web:238126023b9e8669beb73b",
});

const db = getFirestore(firebaseApp);

export default db;
