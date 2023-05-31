import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './navbar.scss'

const Navbar = ({ products, isLoggedIn, setIsLoggedIn }) => {

  return (
    <>
      <nav className='navbar'>
        <div className="logo"></div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/addProduct'>Add-Products</NavLink></li>
          <>
            <li><NavLink className='nav-link lowercase opacity' to='/login'>Login</NavLink></li>
            <li><NavLink className='nav-link lowercase opacity' to='/register'>Register</NavLink></li>
          </>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;