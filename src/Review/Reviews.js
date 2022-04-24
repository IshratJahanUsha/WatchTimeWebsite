import React from 'react';
import './Reviews.css';
import useReview from '../Hooks/useHooks';
import Review from './Review';



const Reviews = () => {
    const [reviews, setReviews] = useReview();
    
    return (

        <div className='review-container'>
            {
                reviews.map(review => <Review
                key={review.id}
                reviews = {review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;