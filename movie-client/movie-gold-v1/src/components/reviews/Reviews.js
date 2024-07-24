import {useEffect, useRef } from 'react';
import api from '../../api/axiosConfig';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react';

/**
 * @description This component renders a review page for each specific movie. Where the movie to be 
 * reviewed is on the left and the text area to submit the review is on the right.
 * 
 * @param {function} getMovieData - prop for function that retrieves the data for the chosen movie 
 * that the user wants to review.
 * @param {object} movie - prop for the movie that the user wants to review.
 * @param {Array<{body: string}>} reviews - prop for the array of review objects 
 * with a body property that represents the review commment. 
 * @param {function} setReviews - prop for function that sets the state of reviews.
 * 
 * @returns {JSX.Element} The rendered Reviews component.
 */
const Reviews = ({getMovieData, movie, reviews, setReviews}) => {

    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(()=> {
        getMovieData(movieId);
    }, [])

    /**
     * @description This function makes a post request to the API when a new review has been submitted, adding it to the reviews array and updating the state. 
     * If the user has only typed whitespace or has left the text area blank then nothing happens.
     * 
     * @param {Event} e - represents the form submission event.
     * @returns {void}
     */
    
    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;
        if (!rev.value.trim()) {
            return ;
        }
        try{
            
            const response = await api.post("/reviews", {reviewBody:rev.value,imdbId:movieId});
    
            const updatedReviews = [...reviews, {body:rev.value}];
    
            rev.value = "";
    
            setReviews(updatedReviews);

        } catch(error){
            console.error(error);
        }

    }

    return (
        <Container>
            <Row>
                <Col><h3>Reviews</h3></Col>
            </Row>
            <Row className="mn-2">
                <Col>
                <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm 
                                        handleSubmit={addReview} 
                                        revText={revText} 
                                        labelText="Write a Review" 
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {
                        reviews?.map((r) => {
                            return(
                                <>
                                    <Row>
                                        <Col>{r.body}</Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <hr />
                                        </Col>
                                    </Row>
                                </>
                            )
                        })
                    }
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    )
}

export default Reviews