// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHKrjXBz484QR34BCVxJnzLL3e0Xdig2g",
  authDomain: "photo-pedia.firebaseapp.com",
  projectId: "photo-pedia",
  storageBucket: "photo-pedia.appspot.com",
  messagingSenderId: "332542464514",
  appId: "1:332542464514:web:719f87486b91cbf6e44d1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;