import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css'


const Services = () => {
    const [serviceData, setServiceData] = useState([]);

    // Load All services form database
    useEffect(() => {
        fetch('https://infinite-anchorage-60184.herokuapp.com/services')
            .then(res => res.json())
            .then(res => {
                setServiceData(res)
            })
    }, [])

    console.log(serviceData)

    return (
        <section id='services' className='container mt-5'>
            <div className='text-center'>
                <h1 className='section-title'><span className='section-title-span'>OUR PROVIDING</span> SERVICES</h1>
            </div>
            <div className='service-card-container mt-5'>
                {
                    serviceData.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>

        </section>
    );
};

export default Services;