import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "taskworkflow-3f6c3.firebaseapp.com",
    projectId: "taskworkflow-3f6c3",
    storageBucket: "taskworkflow-3f6c3.appspot.com",
    messagingSenderId: "49737753724",
    appId: "1:49737753724:web:05555695aa3c916dfb55f9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

