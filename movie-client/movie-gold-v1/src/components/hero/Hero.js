import React from 'react'
import './Hero.css'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import MovieCard from './movieCard/MovieCard'


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