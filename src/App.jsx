
import './App.css'
import Auth from "./components/Autj.jsx";
import {useEffect, useState} from "react";



import {db, auth} from "./firebase-config.js";
//gets the documents from our database if it is one we want to get it is getDoc
//the collection is to specify the collection we want to get the data from
//addDoc adds to the database
//delete doc is used for deleting from the database
//doc is used to grab document that we want to pass into the deleteDoc function
// updatedoc is used to update a value from the elements in a collection
import {getDocs , collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";

function App() {

 //state for storing read movie data
 const [movies, setMovies] = useState([]);

 //State for reading the new movie data
 const [newMovieTitle, setNewMovieTitle] = useState("");
 const [newReleaseDate, setNewReleaseDate] = useState(0);
 const [isnewMovieOscar, setIsnewMovieOscar] = useState(false);


 //state for reading the update new title
 const [updateTitle, setUpdateTitle] = useState('');


 //the Movies is the name of the collection on the database fire store
 const moviesCollection = collection(db, "Movies")

 const getMovies = async () => {
  ///read the data from the and set the movie to the read data
  try{
   const data = await getDocs(moviesCollection);

   ///the ...doc.data() gives us the element in the individual rows of each data in the database while the doc.id gives us the id
   const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));


   setMovies(filteredData);


  }catch (err) {
   console.log(err);
  }

 }

 useEffect(() => {
  getMovies()
 }, []);


 //the user id is to check if the person submitting is  logged in if the userId is not undefined

 const submitMovie = async ( ) => {
  try{
   await addDoc(moviesCollection, {Title : newMovieTitle, releaseDate: newReleaseDate, receivedAnOscar : isnewMovieOscar, userId:auth?.currentUser?.uid, userName: auth?.currentUser?.email });
   getMovies()
   setNewReleaseDate(0);
   setNewMovieTitle("")
   setIsnewMovieOscar(false)
  }catch (err){
   console.log(err)
  }
 }


 const deletMovie = async ( id) => {
 // the id is the id of the movie we want to delete and the "Movies" is the name of the collection in the database
 const movieDoc = doc(db, "Movies", id)

    // the delete doc takes in a document by itself that we want to delete
    await (deleteDoc(movieDoc))
     getMovies();
 }


 const updateMovieTitle = async ( id) => {
  // the id is the id of the movie we want to delete and the "Movies" is the name of the collection in the database
  const movieDoc = doc(db, "Movies", id)

  // the delete doc takes in a document by itself that we want to delete
  await updateDoc(movieDoc, {
   Title : updateTitle,
  })


  getMovies();
  setUpdateTitle("");
 }


  return (
    <>
     <Auth />
    {/*Creating a movie here*/}
     <div>
      <input placeholder="Movie title..." value={newMovieTitle} onChange={(e) => setNewMovieTitle(e.target.value)}/>
      <input type="number" placeholder="Release Date" value={newReleaseDate} onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
      <input type="checkbox" checked={isnewMovieOscar} onChange={(e)=> setIsnewMovieOscar(e.target.checked)}/>
      <label >Received an Oscar</label>
      <button onClick={submitMovie}>Submit movie</button>
     </div>


     {/*displaying the movies here.*/}
     <div>{movies.map((movie) =>  (
      <div key={movie.id}>
       <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.Title}</h1>
      <p>{movie.releaseDate}</p>
       <p>{movie.userName}</p>
      <button onClick={() => deletMovie(movie.id)}>Delete Movie</button>

       <input type='text' placeholder='new title...' onChange={(e) => setUpdateTitle(e.target.value)}/>
       <button onClick={() => updateMovieTitle(movie.id)}>Update title</button>
      </div>


     ))}</div>
    </>
  )
}

export default App
