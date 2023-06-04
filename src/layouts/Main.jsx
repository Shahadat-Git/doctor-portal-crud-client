import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;