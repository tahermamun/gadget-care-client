import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ManageServicesTableData.css'

const ManageServicesTableData = ({service}) => {
    const {adminEmail, servicePrice, serviceTitle, _id } = service

    // Delete Service Function
    const deleteProduct = (id) => {
        fetch(`https://infinite-anchorage-60184.herokuapp.com//deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete', result)
                
            })
            .catch(err => console.log(err.message))
    }
    return (
        <tr>
            <td>{serviceTitle}</td>
            <td>{servicePrice}</td>
            <td>{adminEmail}</td>
            <td> <button className='delete-btn' onClick={() => deleteProduct(_id)}><FontAwesomeIcon icon={faTrashAlt} /> </button></td>
           
        </tr>
    );
};

export default ManageServicesTableData;