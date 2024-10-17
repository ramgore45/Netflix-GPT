// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvNcxnBAhtDKCgky8QBktDVGbr6ZEDy7U",
  authDomain: "netflixgpt-e4a99.firebaseapp.com",
  projectId: "netflixgpt-e4a99",
  storageBucket: "netflixgpt-e4a99.appspot.com",
  messagingSenderId: "467903168553",
  appId: "1:467903168553:web:2a08ae615662c08f2f5c38",
  measurementId: "G-KQQGL9KCW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// authentication 
export const auth = getAuth();