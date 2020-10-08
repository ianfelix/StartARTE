import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const ButtonCard = ({ textButton, to = '/' }) => {
  return (
    <Link to={to}>
      {textButton && <button className='btn-card'>{textButton}</button>}
    </Link>
  );
};

export default ButtonCard;
