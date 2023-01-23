import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyApO5XyaT7ItTDFchESVJquQ8LC0WdeuAU",
  authDomain: "chat-2ca38.firebaseapp.com",
  projectId: "chat-2ca38",
  storageBucket: "chat-2ca38.appspot.com",
  messagingSenderId: "867183120745",
  appId: "1:867183120745:web:2108d0f26e33c2dc4f6df8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();