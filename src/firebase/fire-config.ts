// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDR20VNQc1Zxc0z2QTZ3irY_stoI_LAKE",
  authDomain: "train-3858b.firebaseapp.com",
  projectId: "train-3858b",
  storageBucket: "train-3858b.firebasestorage.app",
  messagingSenderId: "1062106757421",
  appId: "1:1062106757421:web:659ccaaac67594dabffba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };