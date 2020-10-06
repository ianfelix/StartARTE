import React from 'react';
import ImgCard from './ImgCard';
import imgNorte from '../../assets/images/img-norte-removebg-preview.png';
import ImgNordeste from '../../assets/images/img-nordeste-removebg-preview.png';
import './styles.css';
import CardBody from './CardBody';
import { NavLink } from 'react-router-dom';

const Card = () => {
  return (
    <div className='content'>
      <div className='flex-card'>
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
      </div>
    </div>
  );
};

export default Card;
