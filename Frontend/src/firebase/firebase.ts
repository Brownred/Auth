// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "import.meta.env.VITE_FIREBASE_API_KEY",
    authDomain: "mern-auth-94402.firebaseapp.com",
    projectId: "mern-auth-94402",
    storageBucket: "mern-auth-94402.appspot.com",
    messagingSenderId: "349044289551",
    appId: "1:349044289551:web:4c4c83e26de0a941b9337a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);