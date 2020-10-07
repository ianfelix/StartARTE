import React from 'react';
import imageNordeste from '../../assets/images/cangaceiros.jpg';
import ImgCard from '../../components/Card/ImgCard';
import sertanejo from '../../assets/images/sertanejo';

import './styles.css';

const Nordeste = () => {
  return (
    <div className='margin-body animeDown'>
      <div className='container-flex-nordeste'>
        <ImgCard img={sertanejo} />
        <ImgCard img={imageNordeste} />
        <ImgCard img={imageNordeste} />
      </div>
    </div>
  );
};

export default Nordeste;
