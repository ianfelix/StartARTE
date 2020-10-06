import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import imageNorte from '../../assets/images/cangaceiros.jpg';
import './styles.css';

const Norte = () => {
  return (
    <div className='margin-body animeDown'>
      <div className='container-flex-norte'>
        <ImgCard img={imageNorte} />
        <ImgCard img={imageNorte} />
        <ImgCard img={imageNorte} />
      </div>
    </div>
  );
};

export default Norte;
