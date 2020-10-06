import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import imageNorte from '../../assets/images/cangaceiros.jpg';
import './styles.css';
import Head from '../../components/Head';

const Norte = () => {
  return (
    <div className='margin-body animeDown'>
      <div className='container-flex-norte'>
        <Head title='Norte' description='Essa é a página da região Norte' />
        <ImgCard img={imageNorte} />
        <ImgCard img={imageNorte} />
        <ImgCard img={imageNorte} />
      </div>
    </div>
  );
};

export default Norte;
