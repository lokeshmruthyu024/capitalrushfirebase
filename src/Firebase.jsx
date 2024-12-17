// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjynBqL2fTralFrSSAjcUtfsjbCrjOLP4",
  authDomain: "react-auth-30d7f.firebaseapp.com",
  projectId: "react-auth-30d7f",
  storageBucket: "react-auth-30d7f.firebasestorage.app",
  messagingSenderId: "657366889915",
  appId: "1:657366889915:web:91a8904537e5b751a1809e",
  measurementId: "G-9C37EHCY9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export default app;