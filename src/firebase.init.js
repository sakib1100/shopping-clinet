// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-DN6gMsxN5MFRCQSqD8oHd_Z0PJ-o9ZE",
  authDomain: "shopping-cf747.firebaseapp.com",
  projectId: "shopping-cf747",
  storageBucket: "shopping-cf747.appspot.com",
  messagingSenderId: "399109389568",
  appId: "1:399109389568:web:9a45f14d30ed25761007e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;