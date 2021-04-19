import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import BookingListCard from '../BookingListCard/BookingListCard';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import './BookingList.css'

const BookingList = () => {

    const [orderedList, setOrderedList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // Load Booking List form database
    useEffect(() => {
        fetch('https://infinite-anchorage-60184.herokuapp.com/bookingList?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(res => {
                setOrderedList(res)
            })
    }, [])




    
    console.log(orderedList, 'orserlist')
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Booking List'></DashboardHeader>
                <div className='dashboard-container'>
                    <div className='order-card-container'>
                        {
                            orderedList.map(orderData => <BookingListCard key={orderData._id} orderData={orderData}></BookingListCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;