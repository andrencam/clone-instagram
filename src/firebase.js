import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCixWMZo6h9jkP3PgQFwQP5D5zEBR8bpEI",
  authDomain: "instagram-clone-a61bb.firebaseapp.com",
  databaseURL: "https://instagram-clone-a61bb.firebaseio.com",
  projectId: "instagram-clone-a61bb",
  storageBucket: "instagram-clone-a61bb.appspot.com",
  messagingSenderId: "266638805700",
  appId: "1:266638805700:web:5ceb95ef07690cbef41791",
  measurementId: "G-TLEQZFTYBV"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export  {db, auth, storage };