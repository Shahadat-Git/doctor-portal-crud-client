import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/main';
import Home from '../pages/Home';
import AddService from '../pages/AddService';
import EditService from '../pages/EditService';
import Booking from '../pages/Booking';
import ManageBooking from '../pages/ManageBooking';
import MyBookings from '../pages/MyBookings';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services'),
            },
            {
                path: '/add-service',
                element: <AddService></AddService>
            },
            {
                path: '/service/edit/:id',
                element: <EditService></EditService>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute><Booking></Booking></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/manage-bookings',
                element: <ManageBooking></ManageBooking>,
                loader: () => fetch('http://localhost:5000/bookings')
            },
            {
                path: '/my-bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])
export default router;