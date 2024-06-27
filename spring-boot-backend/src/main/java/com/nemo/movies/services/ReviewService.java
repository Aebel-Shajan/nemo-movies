package com.nemo.movies.services;

import com.nemo.movies.models.Review;
import com.nemo.movies.repositories.ReviewRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;

    public Review createReview(String reviewBody, String imbdId) {
        Review review = new Review();
    }
}
