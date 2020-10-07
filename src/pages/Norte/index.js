import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import imageNorte from '../../assets/images/cangaceiros.jpg';
import './styles.css';
import Head from '../../components/Head';
import CardBody from '../../components/Card/CardBody';
import { NavLink } from 'react-router-dom';
import Card from '../../components/Card';

const Norte = () => {
  return (
    <div className='margin-body animeDown'>
      <div className='container-flex-norte'>
        <Head title='Norte' description='Essa é a página da região Norte' />
        <Card>
          <div className='card-content'>
            <NavLink to='/norte'>
              <ImgCard img={imageNorte} title='Imagem do norte' />
            </NavLink>
            <CardBody
              titleCard='Cultura Norte'
              title=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quis repellendus neque animi maiores optio voluptatibus laboriosam at adipisci suscipit architecto ea illum facere fugit ratione veritatis dolorum, molestias totam.'
            />
          </div>
          <div className='card-content'>
            <NavLink to='/nordeste'>
              <ImgCard img={imageNorte} title='Imagem do nordeste' />
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

export default Norte;
