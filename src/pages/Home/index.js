import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import Sobre from '../../components/Sobre';

import './styles.css';

const Home = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Home' description='Essa é a página Home' />
      <Sobre />
      <Card />
    </div>
  );
};

export default Home;
