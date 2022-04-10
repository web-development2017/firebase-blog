// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYZb9BXwFTBr15P5NffljVBGTEEwiEKLE",
  authDomain: "fir-blog-d4101.firebaseapp.com",
  projectId: "fir-blog-d4101",
  storageBucket: "fir-blog-d4101.appspot.com",
  messagingSenderId: "737309115398",
  appId: "1:737309115398:web:e55ce3042883bbb5766f87",
  measurementId: "G-CPW5CETEB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();