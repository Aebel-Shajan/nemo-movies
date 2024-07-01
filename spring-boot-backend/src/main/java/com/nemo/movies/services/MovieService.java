package com.nemo.movies.services;

import com.nemo.movies.models.Movie;
import com.nemo.movies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired // tells framework to instantiate variable for us.
    private MovieRepository movieRepository;

    public List<Movie> allMovies() {
//        System.out.println(movieRepository.findAll());
        return movieRepository.findAll();
    }

}
