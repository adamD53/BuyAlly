import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIVHdDODt_sNiclIUtOMj45YKie9DB1kI",
  authDomain: "buyally-a0e4b.firebaseapp.com",
  projectId: "buyally-a0e4b",
  storageBucket: "buyally-a0e4b.appspot.com",
  messagingSenderId: "41485119531",
  appId: "1:41485119531:web:b7af8e0dfa046bbe91fa6e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
