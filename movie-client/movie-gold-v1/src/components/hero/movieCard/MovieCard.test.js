import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for better assertions
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

// Example movie (barebones movie object specificallly for tests.)
const movie = {
    title: 'Sample Movie',
    poster: 'https://example.com/sample-poster.jpg',
    backdrops: ['https://example.com/sample-backdrop.jpg'],
    trailerLink: 'https://youtube.com/watch?v=12345678901',
    imdbId: 'sampleImdbId'
};

test("renders movie poster, title, play button and review button", () => {
    // Render movie card inside browser router. This allows the component to use Link
    // and navigate.
    render(
        <BrowserRouter>
            <MovieCard movie={movie}/>
        </BrowserRouter>
    )

    // Check for movie poster
    const poster = screen.getByAltText('movie-poster')
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', movie.poster);

    // Check for movie title
    const title = screen.getByText(movie.title);
    expect(title).toBeInTheDocument();

    // Check for play button
    const playButton = screen.getByRole("link");
    expect(playButton).toBeInTheDocument();
    expect(playButton).toHaveAttribute('href', `/Trailer/12345678901`);

    // Check for review button
    const reviewButton = screen.getByText("Reviews")
    expect(reviewButton).toBeInTheDocument();
})

