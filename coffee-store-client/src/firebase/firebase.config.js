// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr6vWiFeVaQ72krrQNMCGNc8gbdRa0uSQ",
  authDomain: "coffee-store-61b11.firebaseapp.com",
  projectId: "coffee-store-61b11",
  storageBucket: "coffee-store-61b11.appspot.com",
  messagingSenderId: "228075805412",
  appId: "1:228075805412:web:b98a5e994d6ae61fce6af1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app