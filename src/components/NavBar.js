import React, { useState } from 'react';
import './NavBar.css';
import LOGO from '../assets/LOGO.png';
import Icon from '../assets/Icon.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav-main'>
      <div className='logo-layout'>
        <img alt='icon' src={Icon} className='icon' />
        <img alt='logo' src={LOGO} className='logo' />
      </div>

      {/* Menu for larger screens */}
      <div className={`navitems ${menuOpen ? 'hide' : ''}`}>
        <NavLink className='navitem' to='/' exact activeClassName='active'>
          Home
        </NavLink>
        <NavLink className='navitem' to='/services' activeClassName='active'>
          Service
        </NavLink>
        <NavLink className='navitem' to='/features' activeClassName='active'>
          Feature
        </NavLink>
        <NavLink className='navitem' to='/products' activeClassName='active'>
          Product
        </NavLink>
        <NavLink className='navitem' to='/testimonials' activeClassName='active'>
          Testimonial
        </NavLink>
      </div>
      <div className='navbuttons'>
        <button className='navbutton1'>Login</button>
        <button className='navbutton2'>Sign up</button>
      </div>

      {/* Burger menu for mobile screens */}
      <div className='burger-menu' onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
      </div>

      {/* Menu items for mobile screens */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink className='navitem' to='/' exact activeClassName='active' onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink className='navitem' to='/services' activeClassName='active' onClick={toggleMenu}>
          Service
        </NavLink>
        <NavLink className='navitem' to='/features' activeClassName='active' onClick={toggleMenu}>
          Feature
        </NavLink>
        <NavLink className='navitem' to='/products' activeClassName='active' onClick={toggleMenu}>
          Product
        </NavLink>
        <NavLink className='navitem' to='/testimonials' activeClassName='active' onClick={toggleMenu}>
          Testimonial
        </NavLink>
        <button className='navbutton1' onClick={toggleMenu}>
          Login
        </button>
        <button className='navbutton2' onClick={toggleMenu}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
