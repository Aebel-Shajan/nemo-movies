package com.nemo.movies.services;

import com.nemo.movies.models.Movie;
import com.nemo.movies.models.Review;
import com.nemo.movies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;


@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imdbId) {
       Review review = reviewRepository.insert(new Review(reviewBody, LocalDateTime.now(), LocalDateTime.now()));

       mongoTemplate.update(Movie.class)
               .matching(Criteria.where("imdbId").is(imdbId))
               .apply(new Update().push("reviews").value(review.getId()))
               .first();

       return review;
    }

}
