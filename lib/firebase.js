// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvPxP_Pej-Gt1OteSBHvzVyTuBv8S1tVA",
  authDomain: "firedata-20eb6.firebaseapp.com",
  projectId: "firedata-20eb6",
  storageBucket: "firedata-20eb6.appspot.com",
  messagingSenderId: "648292395837",
  appId: "1:648292395837:web:787ca20b0c1f87b170f354",
  measurementId: "G-5VST4HBREM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
