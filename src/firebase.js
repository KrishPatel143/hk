import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTSmWJbCYuhHEh_QAN4HN__fLW8FWvU_w",
  authDomain: "hackathon-6cc53.firebaseapp.com",
  projectId: "hackathon-6cc53",
  storageBucket: "hackathon-6cc53.appspot.com",
  messagingSenderId: "173206339023",
  appId: "1:173206339023:web:41bfa781398c2b347626ba",
  measurementId: "G-BYBM7X5M38"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
