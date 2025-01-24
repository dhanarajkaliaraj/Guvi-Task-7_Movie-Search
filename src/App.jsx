import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";


import Header from './Header';
import Modal from './Modal';
import Description from "./Description";
import LandingPage from './LandingPage';

function App() {

  const [searchKeyword, setSearchKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState('');

  let fetchMovies = async (page = 1) => {
    const URL_ADDRESS = `https://www.omdbapi.com/?s=${searchKeyword}&page=${page}&type=movie&apikey=b8bf11a5`;
    
    const movieData = await fetch(
      URL_ADDRESS
      );
      
      const movieResponse = await movieData.json();
      
      if(movieResponse.Response == 'True') {
        setMovies(movieResponse.Search);
        setTotalMovies(movieResponse.totalResults);
      } else {
        setMovies([]);
        setTotalMovies(0);
        setError(movieResponse.Error);
        setModal(true);
      }
    };

    const searchMovie = (movieKeyWord) => {
      setSearchKeyword(movieKeyWord);
    }

    useEffect(() => {
      if(searchKeyword.length > 0) {
        fetchMovies();
      } else {
        setMovies([]);
        setTotalMovies(0);
      }
    }, [searchKeyword]);
  
  return (
    <BrowserRouter>
      <Header  />
      <Routes>
        <Route path="/" element={<LandingPage movies={movies} totalMovies={totalMovies} handleSearchMovie={searchMovie} handleFetchMovies={fetchMovies}/> } />
        <Route path="/description/:id" element={<Description />} />
      </Routes>
      <Modal modal={modal} handleModal={() => setModal(false)} error={error}/>
    </BrowserRouter>
  );
}

export default App;