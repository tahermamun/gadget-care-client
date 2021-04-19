import React, { useState } from 'react';
import './BookingListCard.css'
const BookingListCard = ({ orderData }) => {
    const { serviceTitle, OrderStatus, imageURL } = orderData

    const orderStatusFunc = () => {
        if (OrderStatus === 'Pending') {
            return <p style={{ color: '#FF0000', border: '2px solid #ff0000', padding: '10px', borderRadius: '10px', textAlign: 'center' }} className='ml-auto'>{OrderStatus}</p>

        } else if (OrderStatus === 'On Going') {
            return <p style={{ color: '#FFFF00', border: '2px solid #ffff00', padding: '10px', borderRadius: '10px', textAlign: 'center' }} className='ml-auto '>{OrderStatus}</p>

        } else {
            return <p style={{ color: '#00FF00', border: '2px solid #00ff00', padding: '10px', borderRadius: '10px', textAlign: 'center' }} className='ml-auto '>{OrderStatus}</p>

        }
    }
    return (
        <div className='order-card'>
            <div className='order-card-icon d-flex'>
                <img src={imageURL} alt="" />
                {orderStatusFunc()}
            </div>
            <div className='mt-2'>
                <h4 className='order-title'>{serviceTitle}</h4>
                <p className='order-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, molestiae.</p>
            </div>
        </div>
    );
};

export default BookingListCard;