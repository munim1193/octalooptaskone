import React from 'react'
import './NavBar.css'
import LOGO from '../assets/LOGO.png'
import Icon from '../assets/Icon.png'
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='nav-main'>

      <div className='logo-layout'>
        <img alt='icon' src={Icon} className='icon' />
        <img alt='logo' src={LOGO} className='logo' />
      </div>
      <div className='navitems'>
        <NavLink className='navitem' to='/' exact activeClassName='active' >
          Home
        </NavLink>
        <NavLink className='navitem' to='/' activeClassName='active' >
          Service
        </NavLink>
        <NavLink className='navitem' to='/' activeClassName='active' >
          Feature
        </NavLink>
        <NavLink className='navitem' to='/' activeClassName='active' >
          Product
        </NavLink>
        <NavLink className='navitem' to='/' activeClassName='active' >
          Testimonial
        </NavLink>
      </div>
      <div className='navbuttons'>
        <button className='navbutton1'>Login</button>
        <button className='navbutton2'>Sign up</button>
      </div>
    </div>
  )
}

export default NavBar
