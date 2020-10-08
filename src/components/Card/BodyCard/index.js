import React from 'react';

import './styles.css';

const BodyCard = ({ titleCard, textCard }) => {
  return (
    <>
      <p className='title-card'>{titleCard}</p>
      <p className='text-card'>{textCard}</p>
    </>
  );
};

export default BodyCard;
