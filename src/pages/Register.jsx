import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                // console.log(result)
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    return (
        <div className=' lg:w-6/12 mx-auto'>
            <h3 className='text-2xl text-center my-5'>Register</h3>
            <form onSubmit={handleRegister} className='grid grid-cols-1 gap-5'>
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
                <input className='btn btn-block' type="submit" value="Register" />
            </form>
            <Link to='/login' className='mt-2 block text-gray-600'>Alredy have an account?</Link>
        </div>
    );
};

export default Register;