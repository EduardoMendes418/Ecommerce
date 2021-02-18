import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJYwsbcMyJz-ardXGvJvToL2ODTPqHytQ",
  authDomain: "duzon-challenge.firebaseapp.com",
  projectId: "duzon-challenge",
  storageBucket: "duzon-challenge.appspot.com",
  messagingSenderId: "51599906676",
  appId: "1:51599906676:web:33aead198a3445aa2a7e21",
  measurementId: "G-PVZ5BJYJ3S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
