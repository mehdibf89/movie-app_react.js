import './App.css';
import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBar from './components/SearchBar';

function App() {

const [movies, setMovies]=useState([]);
const [searchValue, setSearchValue] = useState("");

const getMovieRequest = async (searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=71d995d9`

  const response = await fetch(url);
  const responseJson = await response.json();

if(responseJson.Search){
  setMovies(responseJson.Search);

}

  
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
    <div className='movie-app'>
    <div className="container-fluid movie-app">
      <div className="header">
        <MovieListHeading heading='Movies & Series' />
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      </div>
      </div>
      <div className="row">
        <MovieList movies={movies}/>
      </div>
    </div>
  );
}

export default App;
