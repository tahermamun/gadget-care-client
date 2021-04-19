import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import Sidebar from '../Sidebar/Sidebar';
import "./Payment.css";
import SplitCardForm from '../SplitCardForm/SplitCardForm';
import { loadStripe } from '@stripe/stripe-js';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';

const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");

const Payment = () => {
    const { serviceId } = useParams();
    const [serviceOrder, setServiceOrder] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    // Load single service form database for payment
    useEffect(() => {
        fetch(`https://infinite-anchorage-60184.herokuapp.com/payment/${serviceId}`)
            .then(res => res.json())
            .then(data => {
                setServiceOrder(data)
                console.log(data)
            })
    }, [])


    const handlePaymentProcess = paymentId => {
        const newServiceOrder = { ...serviceOrder };
        newServiceOrder.email = loggedInUser.email
        newServiceOrder.name = loggedInUser.name
        newServiceOrder.paymentId = paymentId
        newServiceOrder.OrderTime = new Date()
        newServiceOrder.OrderStatus = 'Pending'
        setServiceOrder(newServiceOrder);

        const url = 'https://infinite-anchorage-60184.herokuapp.com/addServiceOrder'
        console.log(newServiceOrder)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServiceOrder)
        }).then(res => {

        })

    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Book'></DashboardHeader>

                <div className='dashboard-container'>
                    <div>
                        <p className='dashboard-input'>{loggedInUser.name}</p>
                        <p className='dashboard-input'>{loggedInUser.email}</p>
                        <p className='dashboard-input'>{serviceOrder.serviceTitle}</p>
                    </div>

                    <div>
                        <p>Pay With Credit Card</p>
                        <Elements stripe={stripePromise}>
                            <SplitCardForm handlePaymentProcess={handlePaymentProcess} serviceOrder={serviceOrder}></SplitCardForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </section>

    );
};
export default Payment;





