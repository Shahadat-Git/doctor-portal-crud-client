import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Booking = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(service)

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const service = form.service.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;

        const booking = {
            service,
            email,
            date,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully added')
                }
            })
    }
    return (
        <div>
            <h3 className='text-center text-4xl'>Book Services</h3>

            <div>
                <form onSubmit={handleBooking}>
                    <div className='grid grid-cols-2 gap-4 mt-5'>
                        <input defaultValue={user.email} name='email' readOnly type="text" placeholder="email" className="input input-bordered w-full" />
                        <input name='service' defaultValue={service.name} type="text" placeholder="service name" className="input input-bordered w-full" />
                        <input name='date' type="date" className="input input-bordered w-full" />
                        <input name='price' defaultValue={service.price} type="text" placeholder="Price" className="input input-bordered w-full" />

                    </div>
                    <input className='btn btn-block my-5' type="submit" value="book" />
                </form>
            </div>
        </div>
    );
};

export default Booking;