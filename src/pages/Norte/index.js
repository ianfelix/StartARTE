import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import imageNorte from '../../assets/images/cangaceiros.jpg';
import arteIndigena from '../../assets/images/indigena.png';
import mestre from '../../assets/images/mestre.jpg';
import './styles.css';

const Norte = () => {
  return (
    <div className="margin-body animeDown">
      <div className="container-flex-norte">
        {/* <ImgCard img={artesã} /> */}
        <ImgCard img={arteIndigena} />
        <ImgCard img={mestre} />
      </div>
    </div>
  );
};

export default Norte;
