import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import OrderListTableData from '../OrderListTableData/OrderListTableData';
import Sidebar from '../Sidebar/Sidebar';
import './OrderList.css'

const OrderList = () => {
    const [orderedList, setOrderedList] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // Load Order product form database
    useEffect(() => {
        fetch('https://infinite-anchorage-60184.herokuapp.com/orderList')
            .then(res => res.json())
            .then(res => {
                setOrderedList(res)
            })
    }, [])


    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Order List'></DashboardHeader>
                <div className='dashboard-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderedList.map(orderData => <OrderListTableData key={orderData._id} orderData={orderData}></OrderListTableData>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </section>
    );
};

export default OrderList;