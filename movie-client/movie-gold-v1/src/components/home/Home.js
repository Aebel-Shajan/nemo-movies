import React from 'react'
import Hero from '../hero/Hero';

/**
 * @component
 * @description This is component renders the home page which displays the carousel made in the
 * Hero component.
 * @param {Object} movies - movies prop passed down from App component and passed to Hero component.
 * @returns - The rendered Home component.
 */
const Home = ({movies}) => {
    return (
        <Hero movies={movies}/>
    )
}

export default Home
