import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
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
          <li>LinkedIn {<FaLinkedin />}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
