
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
//Authentication ends here

//to read data from the database(fireStore)
import {getFirestore } from "firebase/firestore"





const firebaseConfig = {
 // eslint-disable-next-line no-undef
 apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
 // eslint-disable-next-line no-undef
 authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
 // eslint-disable-next-line no-undef
 projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
 // eslint-disable-next-line no-undef
 storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
 // eslint-disable-next-line no-undef
 messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
 // eslint-disable-next-line no-undef
 appId: process.env.REACT_APP_FIREBASE_APP_ID,
 // eslint-disable-next-line no-undef
 measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


//for reading the data in the database
export const db = getFirestore(app);


//for authenticating with google you need to get GoogleAuthProvider from the firebase/auth
