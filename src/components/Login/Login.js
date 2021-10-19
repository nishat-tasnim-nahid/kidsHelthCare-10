import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="register">
            <h2 className='title'>Please Login</h2>
            <button className='field' onClick={signInUsingGoogle}>With Google</button> <br />
            <Link className='navlink' to='/register'>Do you have Account?</Link>
        </div>
    );
};

export default Login;