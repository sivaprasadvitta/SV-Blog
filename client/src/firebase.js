// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sv-blog-45092.firebaseapp.com",
  projectId: "sv-blog-45092",
  storageBucket: "sv-blog-45092.appspot.com",
  messagingSenderId: "1017956422512",
  appId: "1:1017956422512:web:a26b7fe9b62d8f8ef435b5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);