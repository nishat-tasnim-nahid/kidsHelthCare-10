import React from 'react';
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <h2 className='title'>Register</h2>
            <form>
                <input className='field' type="email" placeholder="Enter your email" /> <br />
                <input className='field' type="password" placeholder="Enter your password" /><br />
                <input className='field' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;