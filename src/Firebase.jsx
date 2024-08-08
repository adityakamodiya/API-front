// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
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
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Set persistence for Firebase Auth
setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth, db };
export default app;
