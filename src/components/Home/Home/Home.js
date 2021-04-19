import React from 'react';
import MainNavbar from '../../Shared/MainNavbar/MainNavbar';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Footer from '../../Shared/Footer/Footer';
import OurBlog from '../OurBlog/OurBlog';


const Home = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Header></Header>
            <Services></Services>
            <Featured></Featured>
            <OurBlog></OurBlog>
            <Testimonials></Testimonials>
            <Footer></Footer>

        </div>
    );
};

export default Home;