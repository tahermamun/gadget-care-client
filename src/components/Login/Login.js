import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn, firebaseInitializeConfig } from './LoginManager';
import './Login.css'
import MainNavbar from '../Shared/MainNavbar/MainNavbar';



const Login = () => {
    firebaseInitializeConfig()

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: '/' } }

    // Google signIn function
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                console.log(res)
                setLoggedInUser(res)
                history.replace(from)
            })
    }
    return (
        <>
            <MainNavbar></MainNavbar>
            <div className='login-container'>
                <h2>LogIn</h2>
                <button className='google-btn' onClick={googleSignIn}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                                Continue with Google</button>
            </div>



        </>
    );
}

export default Login