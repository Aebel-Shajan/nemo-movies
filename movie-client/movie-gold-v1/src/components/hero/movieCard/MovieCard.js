import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();

    function review(movieId) {
        navigate(`/Reviews/${movieId}`)
    }

    return (
        <div className='movie-card-container'>
            <div className='movie-card' style={{ "--img": `url(${movie.backdrops[0]})` }}>
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
                                onClick={() => review(movie.imdbId)}
                            >
                                Reviews
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard