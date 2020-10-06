import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './styles.css';

const Header = () => {
  return (
    <header>
      <ul className='header'>
        <li className='norte-nav-link'>
          <NavLink
            className='norte-nav-link'
            to='/norte'
            activeClassName='activeLink'>
            Norte
          </NavLink>
        </li>
        <li>
          <NavLink to='/' end>
            <img src={logo} className='logo' alt='Logo da página' />
          </NavLink>
        </li>
        <li className='nordeste-nav-link'>
          <NavLink
            className='nordeste-nav-link'
            to='/nordeste'
            activeClassName='activeLink'>
            Nordeste
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
