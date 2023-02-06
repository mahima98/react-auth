// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCfYp97jse3emwRyb0pI_i7BQ0YPM-lHE",
  authDomain: "react-auth-sooty.vercel.app",
  projectId: "vue-chat-app-cdea6",
  storageBucket: "vue-chat-app-cdea6.appspot.com",
  messagingSenderId: "329414711338",
  appId: "1:329414711338:web:d0deb66051b7f157f5cb53",
  measurementId: "G-MD1WLFPZ5X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
