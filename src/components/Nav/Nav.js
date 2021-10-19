import React from 'react';
import './Nav.css'
import { Navbar } from 'react-bootstrap';

import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Nav = () => {
  const{user,logOut} = useAuth()
  return (
    <div className=''>

      <Navbar className=' navber'>
        <h2>Health Care</h2>
        <NavLink className='navlink' to='/home'>Home</NavLink>
        <NavLink className='navlink' to='/services'>Services</NavLink>
        <NavLink className='navlink' to='/details'>Details</NavLink>
        <NavLink className='navlink' to='/contact'>Contact Us</NavLink>
        <NavLink className='navlink' to='/login'>Login</NavLink>
        <NavLink className='navlink' to='/register'>Register</NavLink>
        <span> {user?.displayName} </span>
            {user?.email && <button onClick={logOut}>Log Out</button>}
      </Navbar>
    </div>

  );
};

export default Nav;