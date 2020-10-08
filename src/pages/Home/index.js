import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import Sobre from '../../components/Sobre';
import imgNorte from '../../assets/images/img-norte-removebg-preview.png';
import ImgNordeste from '../../assets/images/img-nordeste-removebg-preview.png';
import './styles.css';

const Home = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Home' description='Essa é a página Home' />
      <Sobre />
      <div className='content card-content'>
        <div className='flex-card'>
          <Card
            img={imgNorte}
            titleImg='Imagem da região Norte'
            titleCard='Cultura Norte'
            textCard='O artesanato no Norte é bem diversificado e os trabalhos são produzidos com fibras, coquinhos, cerâmica, couro, madeira, látex, entre outros. O artesanato indígena é utilizado como enfeites, para compor a indumentária usada nos rituais e também para a produção de utensílios domésticos e na comercialização.'
            textButton='Saiba mais'
            to='/norte'
          />
        </div>
        <div className='flex-card'>
          <Card
            img={ImgNordeste}
            titleImg='Imagem da região Nordeste'
            titleCard='Cultura Nordeste'
            textCard='O artesanato da região Nordeste é bastante diversificado, uma vez que foi influenciado por indígenas, africanos e europeus, destacam-se as redes tecidas, rendas, crivo, produtos de couro, cerâmica, madeira, argila, as garrafas com imagens produzidas de areia colorida, os objetos feitos a partir da fibra do buriti, entre outros.'
            textButton='Saiba mais'
            to='/nordeste'
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
