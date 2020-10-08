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
      <div className='content card-content content-grid-pages'>
        <div className='flex-card'>
          <Card
            img={arteSertaneja}
            titleImg='Arte'
            titleCard='Arte Sertaneja'
            textCard=''
            textButton='Saiba mais'
            to='artes'
          />
        </div>
        <div className='flex-card'>
          <Card
            img={mestre}
            titleImg='Arte'
            titleCard='Mestres'
            textCard=''
            textButton='Saiba mais'
            to='mestres'
          />
        </div>
        <div className='flex-card'>
          <Card
            img={decoracao}
            titleImg='Decoração'
            titleCard='Decoração'
            textCard=''
            textButton='Saiba mais'
            to='decoracao'
          />
        </div>
      </div>
    </div>
  );
};

export default Nordeste;
