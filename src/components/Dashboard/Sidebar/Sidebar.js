import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripHorizontal, faPlus, faUserPlus, faCommentAlt, faCartPlus, faHdd, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import { Navbar } from 'react-bootstrap';
import navIcon from '../../../Image/navIcon.png'




<i class="fas faCartPlus"></i>
const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        const url = 'https://infinite-anchorage-60184.herokuapp.com/isAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        }).then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className="sidebar col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <Navbar.Brand href="/"><img style={{width:'100px'}} src={navIcon} alt=""/></Navbar.Brand>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                    </Link>
                </li>

                {isAdmin ? <div>
                    <li>
                        <Link to="/dashboard/orderList" className="text-white" >
                            <FontAwesomeIcon icon={faHdd} /> <span>Order List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/addService" className="text-white" >
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/makeAdmin" className="text-white" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/manageServices" className="text-white" >
                            <FontAwesomeIcon icon={faThLarge} /> <span>Manage Services</span>
                        </Link>
                    </li>
                </div> :
                    <div>
                        <li>
                            <Link to="/payment/:serviceId" className="text-white" >
                                <FontAwesomeIcon icon={faCartPlus} /> <span>Book</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/bookingList" className="text-white" >
                                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/dashboard/review" className="text-white" >
                                <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;