// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdkqjhDFQ1vTK-6d-QxHEnVtD2XIUIsM0",
  authDomain: "pet-shop-940bb.firebaseapp.com",
  projectId: "pet-shop-940bb",
  storageBucket: "pet-shop-940bb.appspot.com",
  messagingSenderId: "276224419087",
  appId: "1:276224419087:web:941053eb1f2242632e0a7a",
  measurementId: "G-01H31YFP4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);