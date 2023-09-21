// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4ALcFizCeLEwZd71LbgSletSaOTNBpZg",
  authDomain: "react-auth-42d8b.firebaseapp.com",
  projectId: "react-auth-42d8b",
  storageBucket: "react-auth-42d8b.appspot.com",
  messagingSenderId: "1031363593912",
  appId: "1:1031363593912:web:e34f1d5806aebc5148964d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
