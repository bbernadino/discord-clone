import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCOTevxuYervJxs5stGCjj3qhFd_X0nwUw",
  authDomain: "discord-clone-d1c4d.firebaseapp.com",
  databaseURL: "https://discord-clone-d1c4d.firebaseio.com",
  projectId: "discord-clone-d1c4d",
  storageBucket: "discord-clone-d1c4d.appspot.com",
  messagingSenderId: "1078201462768",
  appId: "1:1078201462768:web:e81a5f4d0981623e2b7735",
  measurementId: "G-M5T3Q9XGJQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;