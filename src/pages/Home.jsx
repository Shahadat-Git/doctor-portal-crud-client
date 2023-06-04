import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const services = useLoaderData();
    // console.log(services)
    return (
        <div>
            <h3 className='text-center text-4xl'>Total services : {services.length}</h3>
            <div className='grid grid-cols-3 gap-5 my-5'>
                {
                    services?.map(service =>
                        <div key={service._id} className="card w-full bg-base-100 shadow-xl">
                            <figure><img className='w-40 h-40' src={service.photo} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {service.name}

                                </h2>
                                <div className="card-actions justify-end">
                                    <p> Price : $ {service.price}</p>
                                    <Link to={`/booking/${service._id}`} className='btn btn-outline'>book</Link>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Home;