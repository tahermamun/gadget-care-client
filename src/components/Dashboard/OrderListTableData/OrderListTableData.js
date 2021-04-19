import React, { useState } from 'react';
import './OrderListTableData.css'


const OrderListTableData = ({ orderData }) => {
    const { name, email, serviceTitle, OrderStatus, _id } = orderData
    const [updateStatus, setUpdateStatus] = useState('')

    function updateOrderService(id) {
        fetch(`https://infinite-anchorage-60184.herokuapp.com/updateStatus`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: updateStatus, id: id })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result, 'check update')
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{serviceTitle}</td>
            <td>{OrderStatus}</td>
            <td>
                <div className="form-group">
                    <select onChange={(event) => { setUpdateStatus(event.target.value) }} className='statues-input'>
                        <option selected>{OrderStatus}</option>
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                    </select>
                    <button className='btn btn-success' onClick={() => updateOrderService(_id)}>update</button>

                </div>




            </td>

        </tr>
    );
};
export default OrderListTableData;

