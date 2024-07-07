import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';

function App() {
  
  const[movies, setMovies] = useState();

  try {

    const getMovies = async () => {
      const response = await api.get("/api/movies")
      setMovies(response.data);
    }
    
  } 
  catch (error) {
    console.log(error);
  }
  

  
  return (
    <div className="App">

    </div>
  );
}

export default App;
