// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbWaVf7kTyZPVIHIbx2mjjAIFcYCyWtOY",
  authDomain: "netflixgpt-37b47.firebaseapp.com",
  projectId: "netflixgpt-37b47",
  storageBucket: "netflixgpt-37b47.firebasestorage.app",
  messagingSenderId: "848672358419",
  appId: "1:848672358419:web:bb938d31c547bf37813fe6",
  measurementId: "G-F3RS1B1WEE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
