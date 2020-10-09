import React from 'react';

import './styles.css';

const BodyCard = ({ titleCard, textCard }) => {
  return (
    <>
      <p className='title-card align-center'>{titleCard}</p>
      <p className='text-card'>{textCard}</p>
    </>
  );
};

export default BodyCard;
