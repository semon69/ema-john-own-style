// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaoqo9w59f9w7LTRTrtq2esc4GyVBTf6c",
  authDomain: "ema-john-own-firebase.firebaseapp.com",
  projectId: "ema-john-own-firebase",
  storageBucket: "ema-john-own-firebase.appspot.com",
  messagingSenderId: "364492962697",
  appId: "1:364492962697:web:e1dc143393de0a417eff58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;