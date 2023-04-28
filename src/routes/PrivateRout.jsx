import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRout = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location= useLocation();
    console.log("location",  location) 
    if(loading){
        return  <Spinner animation="border" variant="primary" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRout;
/*
1. check user logged in or not
2. if logged in allow to visit
3. else redirect to login
4. set up private route
5. set loading
*/ 
