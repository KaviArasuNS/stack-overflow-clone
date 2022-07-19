// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTeoZ5QAZwi9suht4G2Kv99ezT69butSE",
  authDomain: "stackoverflow-484a4.firebaseapp.com",
  projectId: "stackoverflow-484a4",
  storageBucket: "stackoverflow-484a4.appspot.com",
  messagingSenderId: "530549125844",
  appId: "1:530549125844:web:8c580e77ba30764f2c0141",
  measurementId: "G-JB864NNJLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);