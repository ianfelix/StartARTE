import React from 'react';
import Card from '../../components/Card';
import arteSertaneja from '../../assets/images/sertanejo.jpg';
import mestre from '../../assets/images/artesa.jpg';
import decoracao from '../../assets/images/rendeira3.jpg';
import Head from '../../components/Head';
import './styles.css';

const Nordeste = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Nordeste' description='Essa é a página da região Nordeste' />
      <Card
        img={arteSertaneja}
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

export default Nordeste;
