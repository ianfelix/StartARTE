import React from 'react';
import decoracao from '../../assets/images/decoracao.jpg';
import arteIndigena from '../../assets/images/indigena.png';
import mestre from '../../assets/images/mestre.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';
import './styles.css';

const Norte = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Norte' description='Essa é a página da região Norte' />
      <Card
        img={arteIndigena}
        titleImg='Arte'
        titleCard='Arte Sertaneja'
        textCard=''
        textButton='Saiba mais'
      />
      <Card
        img={mestre}
        titleImg='Arte'
        titleCard='Mestres'
        textCard=''
        textButton='Saiba mais'
      />
      <Card
        img={decoracao}
        titleImg='Decoração'
        titleCard='Decoração'
        textCard=''
        textButton='Saiba mais'
      />
    </div>
  );
};

export default Norte;
