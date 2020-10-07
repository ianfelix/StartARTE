import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import Sobre from '../../components/Sobre';
import ImgCard from '../../components/Card/ImgCard';
import imgNorte from '../../assets/images/img-norte-removebg-preview.png';
import ImgNordeste from '../../assets/images/img-nordeste-removebg-preview.png';
import CardBody from '../../components/Card/CardBody';
import { NavLink } from 'react-router-dom';
import './styles.css';

import './styles.css';

const Home = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Home' description='Essa é a página Home' />
      <Sobre />
      <Card>
        <div className='card-content'>
          <NavLink to='/norte'>
            <ImgCard img={imgNorte} title='Imagem do norte' />
          </NavLink>
          <CardBody
            titleCard='Cultura Norte'
            title='O artesanato no Norte é bem diversificado e os trabalhos são produzidos com fibras, coquinhos, cerâmica, couro, madeira, látex, entre outros.
            O artesanato indígena é utilizado como enfeites, para compor a indumentária usada nos rituais e também para a produção de utensílios domésticos e na comercialização.'
          />
        </div>
        <div className='card-content'>
          <NavLink to='/nordeste'>
            <ImgCard img={ImgNordeste} title='Imagem do nordeste' />
          </NavLink>
          <CardBody
            titleCard='Cultura Nordeste'
            title='O artesanato da região Nordeste é bastante diversificado, uma vez que foi influenciado por indígenas, africanos e europeus, destacam-se as redes tecidas, rendas, crivo, produtos de couro, cerâmica, madeira, argila, as garrafas com imagens produzidas de areia colorida, os objetos feitos a partir da fibra do buriti, entre outros.'
          />
        </div>
      </Card>
    </div>
  );
};

export default Home;
