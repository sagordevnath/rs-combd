// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqjqQm4Vmk7K_S2jh6b0mV9n7wnDKXW8A",
  authDomain: "nath-manufacturing.firebaseapp.com",
  projectId: "nath-manufacturing",
  storageBucket: "nath-manufacturing.appspot.com",
  messagingSenderId: "347554706127",
  appId: "1:347554706127:web:8b78ec5645d8e6018afdba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;