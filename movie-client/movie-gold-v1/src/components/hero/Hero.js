import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import MovieCard from './movieCard/MovieCard'

/**
 * @component
 * @description This component renders a carousel of all the movies with it's poster and title. 
 * It also has buttons to watch the trailer or go to the movie's reviews page.
 * 
 * @param {Object[]} movies - An array of movies for the carousel.
 * @param {string} movies[].title - title of movie.
 * @param {string} movies[].poster - poster for movie.
 * @param {string[]} movies[].backdrops - Array of URL for backdrop image of each movie.
 * @param {string} movies[].trailerLink - link to trailer of movie.
 * @param {string} movies[].imdbId - the imdbId of movie used to go to it's review page.
 * 
 * @returns {JSX.Element} The rendered Hero component.
 */
const Hero = ({ movies }) => {
    return (
        <div>
            <Carousel className='movie-carousel-container'>
                {
                    movies.map((movie, index) => {
                        return (
                            <Paper key={"card-" + index}>
                                <MovieCard movie={movie} />
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero