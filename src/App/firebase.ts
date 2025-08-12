import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqkXLuEgf1RsDtYrmoiv5eeIItenzS9-U",
  authDomain: "tinystories-d1899.firebaseapp.com",
  projectId: "tinystories-d1899",
  storageBucket: "tinystories-d1899.firebasestorage.app",
  messagingSenderId: "274340669905",
  appId: "1:274340669905:web:e7b4fb01b5eb3757afd8f0",
  measurementId: "G-K665ZQM4XQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fdb = getFirestore(app);
