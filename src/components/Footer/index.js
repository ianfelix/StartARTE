import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './styles.css';

const Footer = () => {
  return (
    <footer>
      <div className='content-flex'>
        <p className='img-logo'>logo</p>
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
