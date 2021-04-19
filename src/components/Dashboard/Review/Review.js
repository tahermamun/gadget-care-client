import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {

    const [review, setReview] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)


    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }

    const handleSubmit = (e) => {
        const newReview = { ...review };
        newReview.name = loggedInUser.name
        newReview.photo = loggedInUser.photo
        setReview(newReview);
        console.log('ami full', review)

        const url = 'https://infinite-anchorage-60184.herokuapp.com/addReview'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        }).then(res => {
            setReview({});

        })
        e.preventDefault();
        e.target.reset();
    }

    const handleSelectChange = (event) => {
        const newReview = { ...review };
        newReview.reviewRating = event.target.value;
        setReview(newReview);
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10" style={{ position: "absolute", right: 0, }}>
                <DashboardHeader headerPageTitle='Review'></DashboardHeader>
                <div className='dashboard-container'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Service Title</label>
                            <input onBlur={handleBlur} type="text" className="dashboard-input" name="reviewTitle" placeholder="Service Title" />
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Service Description</label>
                            <textarea onBlur={handleBlur} type="text" name="reviewDescription" placeholder="Service Description" class="dashboard-input" rows="3"></textarea>
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Your Company Name</label>
                            <input onBlur={handleBlur} type="text" className="dashboard-input" name="reviewCompany" placeholder="Your Company Name" />
                        </div>
                        <div className="form-group">
                            <label className='dashboard-input-title'>Select Rating</label>
                            <select onBlur={handleSelectChange} className='dashboard-input' required>
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                        <button type="submit" className="global-btn-style">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Review;


