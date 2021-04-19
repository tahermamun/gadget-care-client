import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import ManageServicesTableData from '../ManageServicesTableData/ManageServicesTableData';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = () => {


    const [manageServices, setManageServices] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    // Load Order product form database
    useEffect(() => {
        fetch('https://infinite-anchorage-60184.herokuapp.com/manageServices')
            .then(res => res.json())
            .then(data => {
                setManageServices(data)
            })
    }, [])
    console.log(manageServices, 'manageOrderList')

    return (

        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Manage Services'></DashboardHeader>
                <div className='dashboard-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Service Name</th>
                                <th>Service Price</th>
                                <th>Admin Email</th>
                                <th>Delete Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                manageServices.map(service => <ManageServicesTableData key={service._id} service={service}></ManageServicesTableData>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>








    );
}
export default ManageServices;


