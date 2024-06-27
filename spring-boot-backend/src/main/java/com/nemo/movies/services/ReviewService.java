package com.nemo.movies.services;

import com.nemo.movies.models.Review;
import com.nemo.movies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {

    @Autowired
    ReviewRepository reviewRepository;


}
