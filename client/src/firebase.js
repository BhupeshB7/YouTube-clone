// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// import { getAuth, googleAuthProvider } from "firebase/auth"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM4Sp4d0gjvgOfVOXlN3AJ0uomXfnUCJw",
  authDomain: "clone-8d7b2.firebaseapp.com",
  projectId: "clone-8d7b2",
  storageBucket: "clone-8d7b2.appspot.com",
  messagingSenderId: "351118238675",
  appId: "1:351118238675:web:182948aa149d97bf56c526"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider
export default app;