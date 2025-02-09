// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxAEyWvn-p9ggnajGubJ7F_AI-6HrFFhQ",
  authDomain: "gym-project-d0203.firebaseapp.com",
  projectId: "gym-project-d0203",
  storageBucket: "gym-project-d0203.firebasestorage.app",
  messagingSenderId: "659713639476",
  appId: "1:659713639476:web:7475528b25b69b503d7661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };