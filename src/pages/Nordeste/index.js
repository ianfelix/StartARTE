import React from 'react';
import imageNordeste from '../../assets/images/cangaceiros.jpg';
import ImgCard from '../../components/Card/ImgCard';
import Head from '../../components/Head';

import './styles.css';

const Nordeste = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Nordeste' description='Essa é a página da região Nordeste' />
      <div className='container-flex-nordeste'>
        <ImgCard img={imageNordeste} />
        <ImgCard img={imageNordeste} />
        <ImgCard img={imageNordeste} />
      </div>
    </div>
  );
};

export default Nordeste;
