import React from 'react';
import Card from '../../components/Card';
import Sobre from '../../components/Sobre';

import './styles.css';

const Main = () => {
  return (
    <div className='margin-body animeDown'>
      <Sobre />
      <Card />
    </div>
  );
};

export default Main;
