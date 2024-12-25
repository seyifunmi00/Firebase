
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
//Authentication ends here

//to read data from the database(fireStore)
import {getFirestore } from "firebase/firestore"





const firebaseConfig = {
 apiKey: "AIzaSyCRkTkf28l6qNOlsDDfpeUL5X_5d0dpO6I",
 authDomain: "fir-tutorial-db923.firebaseapp.com",
 projectId: "fir-tutorial-db923",
 storageBucket: "fir-tutorial-db923.firebasestorage.app",
 messagingSenderId: "301469809649",
 appId: "1:301469809649:web:95c77b0235e47ad85fe250",
 measurementId: "G-VZ35B2BNZD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


//for reading the data in the database
export const db = getFirestore(app);


//for authenticating with google you need to get GoogleAuthProvider from the firebase/auth
