import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyBookingsRow from './MyBookingsRow';
import { AuthContext } from '../providers/AuthProvider';

const MyBookings = () => {
    const [bookings, setBookings] = useState([])
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setBookings(data))
    }, [])

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
                                bookings.map(booking => <MyBookingsRow
                                    key={booking._id}
                                    booking={booking}
                                    handleDelete={handleDelete}
                                ></MyBookingsRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;