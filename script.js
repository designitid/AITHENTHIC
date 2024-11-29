// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl_e9ZHI2yXQf9IW8AnszocUQnWL6Ju5U",
  authDomain: "aithenthic.firebaseapp.com",
  projectId: "aithenthic",
  storageBucket: "aithenthic.firebasestorage.app",
  messagingSenderId: "91526184147",
  appId: "1:91526184147:web:81ccf6d61540c5430ee826",
  measurementId: "G-7B3TWVCYBG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
