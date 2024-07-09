import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  const[movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  
  const getMovies = async () => {
    try { 
        const response = await api.get("/movies");
        console.log(response.data);
        setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    getMovies();
  },[]);
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
          <Route 
            path='/Reviews/:movieId' 
            element=
            {
              <Reviews 
                getMovieData={getMovieData} 
                reviews={reviews} 
                setReviews={setReviews}/>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;