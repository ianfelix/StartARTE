import React from 'react';
import ImgCard from './ImgCard';
import BodyCard from './BodyCard';
import ButtonCard from './ButtonCard';

const Card = ({ img, titleImg, textCard, titleCard, textButton, to }) => {
  return (
    <div>
      <ImgCard img={img} titleImg={titleImg} />
      <BodyCard textCard={textCard} titleCard={titleCard} />
      <ButtonCard textButton={textButton} to={to} />
    </div>
  );
};

export default Card;
