import React from 'react';
import './Header.css'
import Mechanic from '../../../Image/HeaderMechanic.png'
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <main className='header-main'>
            <div className='container'>
                <div className=" row align-items-center ">
                    <div className="col-md-6 header-content">
                        <h1 className='header-title'>Electronic Gadget Repair <br />for Any Issue</h1>
                        <p>We Will Fix All Types Of Computer, Mobile, Laptop. Problems is the process of identifying, troubleshooting and resolving problems and issues in a faulty computer</p>
                        <button className='global-btn-style'>Get Services</button>
                    </div>
                    <div className="col-md-6">
                        <img src={Mechanic} class="header-image img-fluid" alt="..." />

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Header;