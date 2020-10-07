import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import decoracao from '../../assets/images/decoracao.jpg';
import arteIndigena from '../../assets/images/indigena.png';
import mestre from '../../assets/images/mestre.jpg';
import './styles.css';
import CardBody from '../../components/Card/CardBody';

const Norte = () => {
  return (
    <div className='margin-body animeDown'>
      <div className='container-flex-norte'>
        <div>
          <ImgCard img={arteIndigena} />
          <CardBody titleCard='Arte indígena' />
        </div>
        <div>
          <ImgCard img={mestre} />
          <CardBody titleCard='Mestres' />
        </div>
        <div>
          <ImgCard img={decoracao} />
          <CardBody titleCard='Decoração' />
        </div>
      </div>
    </div>
  );
};

export default Norte;
