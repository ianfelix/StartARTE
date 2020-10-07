import React from 'react';

const Card = ({ children }) => {
  return (
    <div className='content'>
      <div className='flex-card'>{children}</div>
    </div>
  );
};

export default Card;
