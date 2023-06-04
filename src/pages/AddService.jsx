import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AddService = () => {
    const [services, setServices] = useState([]);
    const hadleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const service = {
            name,
            category,
            price,
            photo
        }


        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    alert('successfully added')
                }
            })

    }


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [hadleSubmit])


    return (
        <div>
            <h3 className="text-center text-4xl">Add New Service</h3>

            <form onSubmit={hadleSubmit} className='md:w-6/12 mx-auto px-5'>
                <div>
                    <label className='text-xl my-1 block'> Name</label>
                    <input type="text" placeholder="Name"
                        name='name' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Category</label>
                    <input type="text" placeholder="Category"
                        name='category' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Price</label>
                    <input type="text" placeholder="Price"
                        name='price' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Photo</label>
                    <input type="text" placeholder="Photo Url"
                        name='photo' className="input input-bordered input-primary w-full" />
                </div>

                <input className='btn btn-block my-2 bg-purple-600 text-white hover:bg-purple-600' type="submit" value="Submit" />
            </form>

            <div>
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
                                        <Link to={`/service/edit/${service._id}`} className='btn btn-outline'>Edit</Link>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AddService;