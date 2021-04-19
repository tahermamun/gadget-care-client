import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';

const DashboardHeader = ({ headerPageTitle }) => {
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
        <div className='d-flex row dashboard-header align-items-center p-3'>
            <h5 className="dashboard-header-title">{headerPageTitle}</h5>
            <div className='d-flex align-items-center ml-auto pr-3'>
                <h5 className='mt-3 mr-3 text-light'>{loggedInUser.name}</h5>
                {
                    loggedInUser.isSignIn ?
                        <button onClick={logOutRouteChange} className='global-btn-style'>LogOut</button> :
                        <button onClick={loginRouteChange} className='global-btn-style'>Login</button>

                }
            </div>
        </div>
    );
};

export default DashboardHeader;