import React, { useState } from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {

    const [makeAdmin, setMakeAdmin] = useState({});

    const handleBlur = e => {
        const newMakeAdmin = { ...makeAdmin };
        newMakeAdmin[e.target.name] = e.target.value;
        setMakeAdmin(newMakeAdmin);
    }
    const handleSubmit = (e) => {
        const url = 'https://infinite-anchorage-60184.herokuapp.com/makeAdmin'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(makeAdmin)
        }).then(res => {
            setMakeAdmin({});
        })
        e.preventDefault();
        e.target.reset();
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Make Admin'></DashboardHeader>
                <div className='dashboard-container'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Email</label>
                            <input onBlur={handleBlur} type="email" className="dashboard-input" name="adminEmail" placeholder="Enter Admin Email" />
                        </div>
                        <button type="submit" className="global-btn-style">Submit</button>
                    </form>
                </div>
            </div>
        </section>



    );
}
export default MakeAdmin;


