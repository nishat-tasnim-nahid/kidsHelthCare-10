import React from 'react';
import './Nav.css'
import { Navbar } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className=''>

      <Navbar className=' navber'>
        <h2>Health Care</h2>
        <NavLink className='navlink' to='/home'>Home</NavLink>
        <NavLink className='navlink' to='/services'>Services</NavLink>
        <NavLink className='navlink' to='/login'>Login</NavLink>
        <NavLink className='navlink' to='/register'>Register</NavLink>
      </Navbar>
    </div>

  );
};

export default Nav;