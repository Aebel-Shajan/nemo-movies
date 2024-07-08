import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  const movies = getPlaceholderMovies()

  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;

function getPlaceholderMovies() {
  return [
    {
      "title": "Avatar: The Way of Water",
      "poster": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
    },
    {
      "title": "Roald Dahl's Matilda the Musical",
      "poster": "https://image.tmdb.org/t/p/w500/ga8R3OiOMMgSvZ4cOj8x7prUNYZ.jpg"
    },
    {
      "title": "Black Panther: Wakanda Forever",
      "poster": "https://image.tmdb.org/t/p/w500/cryEN3sWlgB2wTzcUNVtDGI8bkM.jpg"
    }
  ]
}