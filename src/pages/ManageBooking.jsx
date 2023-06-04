import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ManageBookingsRow from './ManageBookingsRow';

const ManageBooking = () => {
    const loadedBookings = useLoaderData();
    const [bookings, setBookings] = useState(loadedBookings)

    const handleDelete = id => {
        const procced = confirm('are you want to delete?')
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successfully deleted')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining);
                    }
                })
        }
    }

    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated["status"] = 'confirm'
                    const updatedBookings = [...remaining, updated]
                    setBookings(updatedBookings)
                }

            })
    }
    return (
        <div>
            <h3 className='text-center text-4xl'>Manage Bookings</h3>

            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Email</th>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <ManageBookingsRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                    handleConfirm={handleConfirm}
                                ></ManageBookingsRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageBooking;