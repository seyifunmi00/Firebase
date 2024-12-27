
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
//Authentication ends here

//to read data from the database(fireStore)
import {getFirestore } from "firebase/firestore"





const firebaseConfig = {
 apiKey: "AIzaSyCRkTkf28l6qNOlsDDfpeUL5X_5d0dpO6I",
 authDomain: "fir-tutorial-db923.firebaseapp.com",
 projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
 storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
 measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


//for reading the data in the database
export const db = getFirestore(app);


//for authenticating with google you need to get GoogleAuthProvider from the firebase/auth
