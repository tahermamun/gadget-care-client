import React, { useContext } from 'react';
import { Button, Nav, Navbar, } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './MainNavbar.css'
import navIcon from '../../../Image/navIcon.png'


const MainNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const loginRouteChange = () => {
        history.push('/login')
    }
    const logOutRouteChange = () => {
        sessionStorage.clear()
        setLoggedInUser({})
        history.push('/login')
    }
    return (
        <div className='navbar-main'>
            <Navbar sticky="top" className='container' expand="lg">
                <Navbar.Brand href="/"><img style={{ width: '110px' }} src={navIcon} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto d-flex align-items-center ">
                        <NavLink className="nav-link-style" to='/home'>Home</NavLink>
                        <NavLink className="nav-link-style" to='/dashboard'>Dashboard</NavLink>
                        {
                            loggedInUser.isSignIn ?
                                <Button onClick={logOutRouteChange} className='global-btn-style'>LogOut</Button> :
                                <Button onClick={loginRouteChange} className='global-btn-style'>Login</Button>
                        }
                    </Nav>

                </Navbar.Collapse>

            </Navbar>
        </div>

    );
};

export default MainNavbar;