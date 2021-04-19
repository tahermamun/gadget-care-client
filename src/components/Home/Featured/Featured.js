import React from 'react';
import './Featured.css'
import FeaturedImage from '../../../Image/featuredImage.jpg'

const Featured = () => {
    return (
        <section className='featured-section mt-5'>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6 mt-5">
                        <h2 className='featured-title'> We can help you now, fill out an application!</h2>
                        <h5>Let us help! If your phone has a broken front glass, non-responsive buttons</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit magni hic non nisi placeat vitae unde, sunt repellendus libero corporis ratione similique reiciendis maxime ipsa, distinctio aperiam earum neque. Aliquam.</p>
                    </div>
                    <div className="col-md-6">
                        <img className='img-fluid' src={FeaturedImage} alt="" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Featured;