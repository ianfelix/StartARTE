import React from 'react';

import './styles.css';

const ImgCard = ({ img, titleImg }) => {
  return (
    <>
      <img className='img-card' src={img} alt={titleImg} />
    </>
  );
};

export default ImgCard;
