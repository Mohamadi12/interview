// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQoOvRqPHb3imSkW63PJyZzcnvJGjk1A",
  authDomain: "prepwise-bc237.firebaseapp.com",
  projectId: "prepwise-bc237",
  storageBucket: "prepwise-bc237.firebasestorage.app",
  messagingSenderId: "522550020775",
  appId: "1:522550020775:web:07a5224ed89eaca620e982",
  measurementId: "G-P29YB3MKNC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);