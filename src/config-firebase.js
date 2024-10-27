// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9seylZ3oWgBjo2SevqkIoNAqhhRt8eU",
  authDomain: "celu-tiendafake.firebaseapp.com",
  projectId: "celu-tiendafake",
  storageBucket: "celu-tiendafake.appspot.com",
  messagingSenderId: "11138981964",
  appId: "1:11138981964:web:7fb9736006e7f3358414e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);