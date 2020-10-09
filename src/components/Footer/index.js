import React from 'react';
import { FaFacebookSquare, FaInstagram, FaPinterest } from 'react-icons/fa';
import logo from '../../assets/images/logo-arte.png';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className='content-flex'>
        <p className='img-logo'>
          <img src={logo} alt='Logo da página' />
        </p>
        <ul className='social-media'>
          <li>Facebook {<FaFacebookSquare />}</li>
          <li>Instagram {<FaInstagram />}</li>
          <li>Pinterest {<FaPinterest />}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
