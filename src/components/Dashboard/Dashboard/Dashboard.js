import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>

                <DashboardHeader headerPageTitle='DashBoard'></DashboardHeader>
                
                <div className='dashboard-container'>
                    <h2>Welcome to Mr. {loggedInUser.name}</h2>
            </div>
            </div>
        </section>
    );
};

export default Dashboard;