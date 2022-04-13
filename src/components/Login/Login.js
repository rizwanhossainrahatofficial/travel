
import React from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const navigate=useNavigate()
    const {googleSignIn}=useAuth()
    const location=useLocation()

    const redirectUri=location.state?.from || '/home';

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            navigate(redirectUri)
       
        })
    }

    return (
        <div style={{}}>
            <Button variant="warning" onClick={handleGoogleSignIn}>Google sign In</Button>
            
        </div>
    );
};

export default Login;