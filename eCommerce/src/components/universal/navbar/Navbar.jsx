import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import './navbar.scss'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../../store/auth/authSlice';

const Navbar = () => {

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()


  return (
    <>
      <nav className='navbar'>
        <div className="logo"></div>
        <ul>
          <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
          <li><NavLink className='nav-link' to='/products'>Products</NavLink></li>
          <li><NavLink className='nav-link' to='/addProduct'>Add-Products</NavLink></li>
          <>
            {
              user
                ? <>
                  <li className="nav-item">
                    <button className='nav-link' onClick={() => dispatch(logoutUser())} >Logout</button>
                  </li>
                </>
                : <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">Login</NavLink>
                </li>
            }
            <li><NavLink className='nav-link lowercase opacity' to='/register'>Register</NavLink></li>
            <li><NavLink className='nav-link lowercase opacity' to='/orderlist'>Orders</NavLink></li>
          </>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;