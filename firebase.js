// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZNCjwyX3ddZM251UtISs5-4cZl-PikUs",
  authDomain: "flashcards-db-3c5df.firebaseapp.com",
  projectId: "flashcards-db-3c5df",
  storageBucket: "flashcards-db-3c5df.appspot.com",
  messagingSenderId: "112843451524",
  appId: "1:112843451524:web:0ce66c5d309046a232e6d1",
  measurementId: "G-2F1C9106NT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);