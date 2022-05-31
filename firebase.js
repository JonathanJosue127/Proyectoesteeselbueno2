// Import the functions you need from the SDKs you need
//import firebase from 'firebase/compat/app'; //v9
//import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCQ4A5PBjb2FMBceAsbUadQXUbvmF7yGLs",
  authDomain: "movyoucare.firebaseapp.com",
  projectId: "movyoucare",
  storageBucket: "movyoucare.appspot.com",
  messagingSenderId: "189348345918",
  appId: "1:189348345918:web:a5b5ecc3e11698cc76796f"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};
//Altas
const db = firebase.firestore()
export default {
  firebase,
  db,
}