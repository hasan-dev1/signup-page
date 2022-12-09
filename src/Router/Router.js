import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SignUp from '../Components/Signup/SignUp';
import Home from '../Home';

const router = createBrowserRouter([
    {
        path:'/',
        element:<SignUp></SignUp>
    },
    {
        path:'/home',
        element:<Home></Home>
    }
])

export default router;