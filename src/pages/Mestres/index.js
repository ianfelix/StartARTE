import React from 'react';
// import decoracao from '../../assets/images/decoracao.jpg';
import arteIndigena from '../../assets/images/indigena.png';
// import mestre from '../../assets/images/mestre.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';
import './styles.css';

const Mestres = () => {
  const URL_NAME = window.location.pathname;

  if (URL_NAME === '/norte/mestres')
    return (
      <div className='margin-body animeDown'>
        <Head title='Mestres' description='Essa é a página dos Mestres' />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
        </div>
      </div>
    );

  if (URL_NAME === '/nordeste/mestres')
    return (
      <div className='margin-body animeDown'>
        <Head title='Mestres' description='Essa é a página dos Mestres' />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
        </div>
      </div>
    );
};

export default Mestres;
