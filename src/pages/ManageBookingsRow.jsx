import React from 'react';

const ManageBookingsRow = ({ booking, handleDelete, handleConfirm }) => {
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(booking._id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                {booking.email}
            </td>
            <td>
                {booking.service}
            </td>
            <td>${booking.price}</td>
            <td>{booking.date}</td>
            <th>
                {
                    booking.status ? <p className='text-purple-800 text-xl'>Confirmed</p>
                        :
                        <button onClick={() => handleConfirm(booking._id)} className="btn btn-ghost btn-xs">Confirm</button>
                }
            </th>
        </tr>
    );
};

export default ManageBookingsRow;