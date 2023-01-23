import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxO-SyOJPxfjiyV70DjpDBYVKKNnds7Vw",
    authDomain: "chat-7c541.firebaseapp.com",
    projectId: "chat-7c541",
    storageBucket: "chat-7c541.appspot.com",
    messagingSenderId: "25867051725",
    appId: "1:25867051725:web:83c968f37735141d43ff84"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();