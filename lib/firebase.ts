// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFA60_kSDLkKK5IIPOojSf_zW5dDttJug",
  authDomain: "fiery-set-344617.firebaseapp.com",
  projectId: "fiery-set-344617",
  storageBucket: "fiery-set-344617.appspot.com",
  messagingSenderId: "1060501873366",
  appId: "1:1060501873366:web:49fffcb4f7cee462215f77",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
