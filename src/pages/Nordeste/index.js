import React from 'react';
import { NavLink } from 'react-router-dom';
import imageNordeste from '../../assets/images/cangaceiros.jpg';
import ImgCard from '../../components/Card/ImgCard';
import Head from '../../components/Head';
import CardBody from '../../components/Card/CardBody';

import './styles.css';
import Card from '../../components/Card';

const Nordeste = () => {
  return (
    <div className='margin-body animeDown'>
      <Head title='Nordeste' description='Essa é a página da região Nordeste' />
      <div className='container-flex-nordeste'>
        <Card>
          <div className='card-content'>
            <NavLink to='/norte'>
              <ImgCard img={imageNordeste} title='Imagem do norte' />
            </NavLink>
            <CardBody
              titleCard='Cultura Norte'
              title='O artesanato da região Nordeste é muito bastante diversificada, uma vez que foi influenciada por indígenas, africanos e europeus, destacam-se as redes tecidas, rendas, crivo, produtos de couro, cerâmica, madeira, argila, as garrafas com imagens produzidas de areia colorida, os objetos feitos a partir da fibra do buriti, entre outros.
              Ao clicar aqui você poderá conhecer um pouco mais sobre o universo  dos artesãos nordestinos, e suas obras de arte.
              '
            />
          </div>
          <div className='card-content'>
            <NavLink to='/nordeste'>
              <ImgCard img={imageNordeste} title='Imagem do nordeste' />
            </NavLink>
            <CardBody
              titleCard='Cultura Nordeste'
              title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Nordeste;
