// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN8dneTw9pHaN9X05g_Z7SpXovB0-73b0",
  authDomain: "apiform-b3bbc.firebaseapp.com",
  projectId: "apiform-b3bbc",
  storageBucket: "apiform-b3bbc.appspot.com",
  messagingSenderId: "820659874752",
  appId: "1:820659874752:web:3ee10e3e1887f8b5377625",
  measurementId: "G-PG863ZZ27T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth = getAuth();
export default app;

export const db = getFirestore(app); 
const analytics = getAnalytics(app);
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);