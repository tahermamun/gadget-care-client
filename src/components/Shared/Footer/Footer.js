import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const ourQuickLinks = [
        { name: "About", link: "/about" },
        { name: "Project", link: "/project" },
        { name: "Our Team", link: "/ourTeam" },
        { name: "Terms Conditions", link: "/termsConditions" },
    ]
    const services = [
        { name: "Services", link: "/Services" },
        { name: "Contact", link: "/Contact" },
        { name: "Our Blog", link: "/ourBlog" },
        { name: "Dashboard", link: "/dashboard" },
    ]
    return (
        <footer className="footer-area">
            <div className="container pt-5 pb-3">
                <div className="row py-5">
                    <div className="col-md-5 footer-right">
                        <h1>Gadget Care</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est eveniet delectus fugiat corrupti sapiente cupiditate nostrum, temporibus quod eos perspiciatis.</p>
                    </div>
                    <FooterCol key={1} footerMenuTitle="Company" footerMenuItems={services} />
                    <FooterCol key={2} footerMenuTitle="Quick Links" footerMenuItems={ourQuickLinks} />

                    <div className="col-md-3 footer-left">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, minus!</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="/facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="/google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="/instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;