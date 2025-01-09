// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaP6gh0kIT4gWNJMbMoZE-JpEW8uPh7JA",
  authDomain: "libex-d56e2.firebaseapp.com",
  projectId: "libex-d56e2",
  storageBucket: "libex-d56e2.firebasestorage.app",
  messagingSenderId: "539373057516",
  appId: "1:539373057516:web:0aed33215c0ace4be47cc9",
  measurementId: "G-DTHVJQYMCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase services
const auth = getAuth(app); // For authentication
const googleProvider = new GoogleAuthProvider(); // For Google Sign-In
const db = getFirestore(app); // Optional: Firestore database
const storage = getStorage(app); // Optional: Firebase Storage

// Export services
export { auth, googleProvider, db, storage };
