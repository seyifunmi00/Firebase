import { auth, googleProvider } from '../firebase-config.js';
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import {useState} from "react";

const Auth = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');



 const signIn = async () => {
    try {
     await createUserWithEmailAndPassword(auth, email, password);
    }catch (err) {
     console.log(err);
    }finally {
     setEmail("")
      setPassword("")
    }

 };

 const signInwithGoogle = async () => {
  try {
   await signInWithPopup(auth,googleProvider);
  }catch (err) {
   console.log(err);
  }
 }

 const logOut = async () => {
  try {
   await signOut(auth);
  }catch (err) {
   console.log(err);
  }
 }



 return (
  <div>
   <input placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
   <input type="password" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
   <button onClick={signIn}>Sign in</button>

   <button onClick={signInwithGoogle}>sign in with Google</button>

   <button onClick={logOut}>Log Out</button>
  </div>
 );
};

export default Auth;

//this is the sign in method for email and password
//depending on the type of authentication you choose there is different function and methods to create that for email and password the function is createUserWithEmailAndPassword, the function returns a promise which means it should be used in an async function it accepts the auth, the email and password.
//the auth makes sure the account stays signed in but it shows undefined at the start because the app just rendered but when the app re renders it shows the current email (auth.currentUser.email)


//for signing in with google we use Signin With popup or signInWithRedirect... this takes in the auth and the google provider



//The signOut makes sure there is no user and it takes the auth as the parameter
