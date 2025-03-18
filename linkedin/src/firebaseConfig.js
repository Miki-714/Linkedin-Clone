// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl66_g7c7JuBH9O5j9WatXwz3wjKB_g5c",
  authDomain: "linkedin-78a00.firebaseapp.com",
  projectId: "linkedin-78a00",
  storageBucket: "linkedin-78a00.firebasestorage.app",
  messagingSenderId: "737306784583",
  appId: "1:737306784583:web:4368b2c6c7574d28259262",
  measurementId: "G-07B926MZCJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
