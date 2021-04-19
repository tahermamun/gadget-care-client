import React from 'react';
import ReactStars from "react-rating-stars-component";
import './TestimonialCard.css'

const TestimonialCard = ({ review }) => {
    const { reviewName, reviewDescription, reviewCompany, reviewRating,photo, name } = review

    return (
        <div className="col testimonial-card">
            <div className='profile'>
                <img src={photo} className='user' alt="" />
                <blockquote>{reviewDescription}</blockquote>
                <h3>{name} <span>{reviewCompany}</span></h3>
                <ReactStars
                    count={5}
                    size={24}
                    value={reviewRating}
                    edit={false}
                />,
            </div>
        </div>
    );
};

export default TestimonialCard;

