import React,{useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies,setMovies]=useState([]);
  const  addMovieHandler=(movie)=> {
    //post request 
    fetch("https://react-http-2c89d-default-rtdb.firebaseio.com/movie.json",
    {
      method: 'POST',
      body: JSON.stringify(movie),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res=>{
      console.log(res);
    }).then(res=>{
      console.log(res);
    },error=>{
      alert(error);
    });
    
  }

const fetchDataHandler=()=>{
  // get request
  fetch("https://swapi.dev/api/films/").then(res=>res.json()).then((response)=>{
    const transformedMovies=response.results.map((movie)=>{
      return {
        id:movie.episode_id,
        title:movie.title,
        releaseDate:movie.release_date,
        openingText:movie.opening_crawl
  
      }
    })
  setMovies(transformedMovies)},(error) => {
   alert(error.message);
  })
}
 

  return (
    <React.Fragment>
        <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchDataHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
