import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <h1>Come if needed</h1>
            <p>Such treatment is arranged by a trained doctor</p>
            <button>Get Started</button>
            <div className='Footer'>
                <div>
                    <h2>Address</h2>
                    <p>House 48, Road 9/A, Jigatala TSO, Dhanmondi, Dhaka-1209</p>
                </div>
                <div>
                    <h2>About</h2>
                    <p>Our work <br />Our reputation</p>
                </div>
                <div>
                    <h2>Telephone</h2>
                    <p>01234566578 , 01386403696</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;