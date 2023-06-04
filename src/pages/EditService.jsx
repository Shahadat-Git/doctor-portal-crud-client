import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditService = () => {
    const service = useLoaderData();
    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const editedService = {
            name,
            category,
            price,
            photo
        }

        fetch(`http://localhost:5000/services/${service._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editedService)

        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    alert('services updated')
                }
            })
    }
    return (
        <div>
            <h3 className="text-center text-4xl">Update Service</h3>

            <form onSubmit={handleUpdate} className='md:w-6/12 mx-auto px-5'>
                <div>
                    <label className='text-xl my-1 block'> Name</label>
                    <input defaultValue={service.name} type="text" placeholder="Name"
                        name='name' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Category</label>
                    <input defaultValue={service.category} type="text" placeholder="Category"
                        name='category' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Price</label>
                    <input defaultValue={service.price} type="text" placeholder="Price"
                        name='price' className="input input-bordered input-primary w-full" />
                </div>

                <div>
                    <label className='text-xl my-1 block'> Photo</label>
                    <input defaultValue={service.photo} type="text" placeholder="Photo Url"
                        name='photo' className="input input-bordered input-primary w-full" />
                </div>

                <input className='btn btn-block my-2 bg-purple-600 text-white hover:bg-purple-600' type="submit" value="update" />
            </form>
        </div>
    );
};

export default EditService;