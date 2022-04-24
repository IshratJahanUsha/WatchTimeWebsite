import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/useHooks';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useReview();

    return (
        
    <div>
        <div className='home-section'>
            <div className='home-banner-text'>
                <h2>Your <span>Watch</span> - Your <span>Time</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint nulla, quaerat quod dolorem libero. Quia sed eligendi optio tenetur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sint nulla, quaerat quod dolorem libero. Quia sed eligendi optio tenetur.</p>
                <Link to ="/dashboard"><button className='home-sec-btn'>Sells Overview</button></Link>
            </div>

            <div className='home-banner-img'>
                <img src='https://cdn.dribbble.com/users/44553/screenshots/15144571/media/0c9a7dbdc8e039da812615fb062ccdaf.gif' alt='watchImg'></img>
            </div>
        </div>

        <div className='home-review-section'>
            <h2>REVIEWS</h2>
            <div className='review-container'>
                {
                    reviews.slice(0,3).map(review => <Review
                    key={review.id}
                    reviews = {review}
                    ></Review>)
                }
            </div>
            <Link to ="/reviews"><button className='home-sec-btn'>See All Reviews</button></Link>
        </div>

    </div>   

 )
    
};

export default Home;