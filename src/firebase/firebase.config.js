// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnorwR8rFEfJnIleqSXhZigKyOJak0cAQ",
  authDomain: "resale-product-6ccf9.firebaseapp.com",
  projectId: "resale-product-6ccf9",
  storageBucket: "resale-product-6ccf9.appspot.com",
  messagingSenderId: "342018064112",
  appId: "1:342018064112:web:e35921349e2ace758e4c35",
  measurementId: "G-MBQGVKSKW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;