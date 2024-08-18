// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirebase } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfc844pBn_jlbvlp-OVaaHqCKbH8cOktk",
  authDomain: "flashcard-71c8b.firebaseapp.com",
  projectId: "flashcard-71c8b",
  storageBucket: "flashcard-71c8b.appspot.com",
  messagingSenderId: "312221979567",
  appId: "1:312221979567:web:8d6003f76486331c62555a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirebase(app)

export{db}