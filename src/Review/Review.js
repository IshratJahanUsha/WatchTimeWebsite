import React from 'react';
import './Review.css'
import './Reviews.css'

const Review = ({reviews}) => {
   const {Name, Rating, Reviews, Photo} = reviews;

    return (
        <div className='review-section'>
            <div className='review'>
                <img src={Photo} alt="person"></img>
                <h4><span>Reviewer Name</span> : {Name}</h4>
                <p><span>Rating</span> : {Rating}</p>
                <p><span>Review</span> : {Reviews}</p>
            </div>
        </div>
    );
};

export default Review;