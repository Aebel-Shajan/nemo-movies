package com.nemo.movies.services;

import com.nemo.movies.models.Review;
import com.nemo.movies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;


@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    public Review createReview(String reviewBody, String imbdId) {
       Review review = reviewRepository.insert(new Review(reviewBody));

       mongoTemplate.update(Movie.class)
               .matching(Criteria.where("imbdId").is(imbdId))
               .apply(new Update().push("reviewIds").value(review))
               .first();

       return review;
    }

}
