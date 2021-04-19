import React, { useEffect, useState } from 'react';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import './Testimonials.css'

const Testimonials = () => {



    const [allReview, setAllReview] = useState([]);

    // Load Order product form database
    useEffect(() => {
        fetch('https://infinite-anchorage-60184.herokuapp.com/reviews')
            .then(res => res.json())
            .then(res => {
                setAllReview(res)
            })
    }, [])
    return (
        <section className='testimonial-section mt-5'>
            <div className="container">
                <div className='text-center'>
                    <h1 className='section-title mt-5'>TESTIMONIALS</h1>
                </div>
                <div className="row testimonial-container mt-5 p-5">
                    {
                        allReview.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
                    }
                </div>
            </div>
        </section>    );
};

export default Testimonials;