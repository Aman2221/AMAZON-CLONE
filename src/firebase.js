import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCE_rcMC7uikb-kOF5t_WkNCKRdbrzOiAc",
    authDomain: "learning-f80ea.firebaseapp.com",
    databaseURL: "https://learning-f80ea-default-rtdb.firebaseio.com",
    projectId: "learning-f80ea",
    storageBucket: "learning-f80ea.appspot.com",
    messagingSenderId: "841502367083",
    appId: "1:841502367083:web:97c39291ce0a20156c402e"
  };
 
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };