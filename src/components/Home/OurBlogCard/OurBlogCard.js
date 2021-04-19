import React from 'react';
import './OurBlogCard.css'

const OurBlogCard = ({ blog }) => {
    return (

        <div class="card blog-card" style={{width: "18rem"}}>
            <img class="card-img-top" src={blog.image} alt="Card image cap" />
            <div class="card-body">
                <h5 class="card-title">{blog.blogTitle}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" style={{padding: "5px"}} class="global-btn-style">Read More</a>
            </div>
        </div>
    );
};

export default OurBlogCard;