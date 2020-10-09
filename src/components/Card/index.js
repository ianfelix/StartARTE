import React from 'react';
import ImgCard from './ImgCard';
import BodyCard from './BodyCard';
import ButtonCard from './ButtonCard';
import Api from '../../services/Api';

const Card = ({
  img,
  titleImg,
  textCard,
  titleCard,
  textButton,
  to,
  state,
}) => {
  return (
    <div>
      <ImgCard img={img} titleImg={titleImg} />
      <BodyCard textCard={textCard} titleCard={titleCard} />
      <ButtonCard textButton={textButton} to={to} />
      <Api state={state} />
    </div>
  );
};

export default Card;
