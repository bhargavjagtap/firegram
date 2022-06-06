// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC28fbVZRnc-yMYJGMWurI27Z5ghCZ_6A",
  authDomain: "ninja-firegram-f59d8.firebaseapp.com",
  projectId: "ninja-firegram-f59d8",
  storageBucket: "ninja-firegram-f59d8.appspot.com",
  messagingSenderId: "748002582105",
  appId: "1:748002582105:web:28aed5817e77db777b1b48"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { projectStorage, projectFireStore, timestamp };