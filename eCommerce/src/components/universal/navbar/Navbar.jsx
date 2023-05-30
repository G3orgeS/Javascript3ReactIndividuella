import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './navbar.scss'

const Navbar = ({ products, isLoggedIn, setIsLoggedIn}) => {

  return (
    <>
      <nav className='navbar'>
        <div className="logo">
        </div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/addProduct'>Add-Products</NavLink></li>
          {isLoggedIn ? ( // show the logout button if the user is logged in
            <>
              <li><NavLink className='nav-link lowercase opacity' to='/userprofile'>user</NavLink></li>
              <li><NavLink className='nav-link lowercase opacity' to='/login' >Logout</NavLink></li>
            </>
          ) : ( // show the login button if the user is logged out
            <>
              <li><NavLink className='nav-link lowercase opacity' to='/login'>Login</NavLink></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;