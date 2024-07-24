import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'

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

const Hero = ({movies}) => {
    const navigate = useNavigate();

/**
 * @function
 * @param {string} movieId - the imdbId of the movie the user want to see the reviews of.
 * @return {void} - doesn't return anything just navigates to correct reviews page.
 */
    function review(movieId) {
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div>
            <Carousel className='movie-carousel-container'>
                {
                    movies.map((movie, index) => {
                        return(
                            <Paper key={"card-" + index}>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                        <div className='movie-detail'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='movie-poster' />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className='movie-buttons-container'>
                                                <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                                    <div className='play-button-icon-container'>
                                                        <FontAwesomeIcon 
                                                            className='play-button-icon'
                                                            icon={faCirclePlay}
                                                        />
                                                    </div>
                                                </Link>
                                                <div className='movies-review-button-container'>
                                                    <Button
                                                        variant="info"
                                                        onClick={()=> review(movie.imdbId)}    
                                                    >
                                                        Reviews
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero