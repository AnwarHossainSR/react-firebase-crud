import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3EhwTN9fPTqlLmq4qLNwaUlL9zN1cNJs",
  authDomain: "react-firebase-crud-2a59d.firebaseapp.com",
  projectId: "react-firebase-crud-2a59d",
  storageBucket: "react-firebase-crud-2a59d.appspot.com",
  messagingSenderId: "73689836464",
  appId: "1:73689836464:web:efe84c74c92cf48ed04475",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
