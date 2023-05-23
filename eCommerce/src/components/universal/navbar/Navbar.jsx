import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../../scss/components.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink className='nav-link' to='/'>Home</NavLink></li>
        <li><NavLink className='nav-link' to='/productlist'>Products</NavLink></li>
        <li><NavLink className='nav-link' to='/login'>Login</NavLink></li>
        <div className="crudnavdiv">
          <li><NavLink className='nav-link' to='/addproduct'>Add Product</NavLink></li>
          <li><NavLink className='nav-link' to='/editproduct'>Edit Product</NavLink></li>
          <li><NavLink className='nav-link' to='/deleteproduct'>Delete Product</NavLink></li>
        </div>
        <div className='orderdiv'>
          <li><NavLink className='nav-link' to='/orders'>Orders</NavLink></li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar