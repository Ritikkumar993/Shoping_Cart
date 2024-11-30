import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css';
const Navbar = () => {
  return (
    <nav>
        <ul className='flex p-5 px-10'>
            <li className='px-10'><NavLink to="/" activeClassName="active" >Home</NavLink></li>
            <li className='px-10' ><NavLink to="/about" activeClassName="active" >About</NavLink></li>
            <li className='px-10' ><NavLink to="/contact" activeClassName="active" >Contact</NavLink></li>
        </ul>
    </nav>
    
  )
}

export default Navbar