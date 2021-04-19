import React from 'react';
import laptop from '../../../Image/leptopFix.jpg';
import desktop from '../../../Image/desktopFix.jpg';
import mobile from '../../../Image/mobileFIx.jpg';
import OurBlogCard from '../OurBlogCard/OurBlogCard';
import './OurBlog.css'

const blogData = [
    {
        blogTitle: 'DESKTOP SERVICES',
        image: desktop
    },
    {
        blogTitle: 'LAPTOP SERVICES',
        image: laptop
    },
    {
        blogTitle: 'MOBILE SERVICES',
        image: mobile
    },
]

const OurBlog = () => {

    return (
        <section className='container mt-5'>
            <div className='text-center'>
                <h1 className='section-title'><span className='section-title-span'>OUR</span>BLOG</h1>
            </div>
            <div className='blog-card-container mt-5'>
                {
                    blogData.map(blog => <OurBlogCard key={blog.image} blog={blog}></OurBlogCard>)
                }
            </div>
        </section>
    );
};

export default OurBlog;