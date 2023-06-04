import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = (event) => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                // console.log(result)
            })
            .catch((error) => {
                console.log(error.message)
            })

    }

    return (
        <div className=' lg:w-6/12 mx-auto'>
            <h3 className='text-2xl text-center my-5'>Login</h3>
            <form onSubmit={handleSignIn} className='grid grid-cols-1 gap-5'>
                <input type="email" name='email' placeholder="Email" className="input input-bordered w-full" />
                <input type="password" name='password' placeholder="Password" className="input input-bordered w-full" />
                <input className='btn btn-block' type="submit" value="Login" />
            </form>
            <Link to='/register' className='mt-2 block text-gray-600'>Don't have an account ?</Link>
        </div>
    );
};

export default Login;