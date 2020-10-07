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
            title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
          />
        </div>
        <div className='card-content'>
          <NavLink to='/nordeste'>
            <ImgCard img={ImgNordeste} title='Imagem do nordeste' />
          </NavLink>
          <CardBody
            titleCard='Cultura Nordeste'
            title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
          />
        </div>
      </Card>
    </div>
  );
};

export default Home;
