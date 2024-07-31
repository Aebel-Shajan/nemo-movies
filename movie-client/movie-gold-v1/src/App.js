import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

/**
 * @function 
 * @description This is the parent component that manages the states for movie, movies & reviews. 
 * It also creates the routes to all other components.
 * @returns {JSX.Element} The rendered App component.
 */

function App() {
  const[movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);
  
  /**
   * @function
   * @description This function makes a get request to the api to get the list of all movies then
   * updates the movies state.
   * @returns {Promise} A promise that is fulfilled and returns nothing once the get request and state update
   * is complete.
   */
  const getMovies = async () => {
    try { 
        const response = await api.get("/movies");
        console.log(response.data);
        setMovies(response.data);
    } catch (error) {
      console.error(error);
    }
  };

   /**
   * @function 
   * @description This function makes a get request to the api to get a specific movie using it's movieId. It then updates the movie 
   * state and updates its reviews too. 
   * @returns {Promise} A promise that is fulfilled and returns nothing once the get request and state update
   * is complete.
   */
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
                setReviews={setReviews}
                movie={movie}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;