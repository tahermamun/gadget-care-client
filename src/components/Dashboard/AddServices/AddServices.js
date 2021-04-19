import axios from 'axios';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const AddServices = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [service, setService] = useState({});
    const [imageURL, setImageURL] = useState(null)

    const handleBlur = e => {
        const newService = { ...service };
        newService[e.target.name] = e.target.value;
        setService(newService);
    }

    // Image upload function
    const handleFileChange = (event) => {
        console.log(event.target.files)
        const imageData = new FormData()
        imageData.set('key', '59b9f92bf1b5d3036dd00cceba773135')
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
            });
    }

    // Submit Service to database function
    const handleSubmit = (e) => {
        const newService = { ...service };
        newService.imageURL = imageURL;
        newService.adminEmail = loggedInUser.email
        setService(newService);
        console.log('ami full', service)

        const url = 'https://infinite-anchorage-60184.herokuapp.com/addService'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        }).then(res => {

        })
        e.preventDefault();
        e.target.reset();
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Add Services'></DashboardHeader>

                <div className='dashboard-container'>
                    <form onSubmit={handleSubmit} className='dashboard-form'>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Service Title</label>
                            <input onBlur={handleBlur} type="text" className="dashboard-input" name="serviceTitle" placeholder="Service Title" />
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Service Price</label>
                            <input onBlur={handleBlur} type="text" className="dashboard-input" name="servicePrice" placeholder="Service Price" />
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Service Description</label>
                            <textarea onBlur={handleBlur} type="text" name="serviceDescription" placeholder="Service Description" class="dashboard-input" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Upload a image</label>
                            <input onChange={handleFileChange} type="file" className="dashboard-input" placeholder="Picture" />
                        </div>
                        <button type="submit" className="global-btn-style">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    );
}
export default AddServices;


