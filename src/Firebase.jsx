// Import the functions you need from the SDKs you need

import { configDotenv } from "dotenv";

import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
configDotenv();
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};
console.log(firebaseConfig.apiKey);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Set persistence for Firebase Auth
// setPersistence(auth, browserLocalPersistence)
//   .catch((error) => {
//     console.error("Error setting persistence:", error);
//   });

export { auth, db };
export default app;
