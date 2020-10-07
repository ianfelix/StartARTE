import React from 'react';
import ImgCard from '../../components/Card/ImgCard';
import imgCardLeft from '../../assets/images/sertanejo.jpg';
import imgCardRight from '../../assets/images/artesa.jpg';
import imgCardMidle from '../../assets/images/rendeira3.jpg';
import CardBody from '../../components/Card/CardBody';

import './styles.css';

const Nordeste = () => {
  return (
    <div className="margin-body animeDown">
      <div className="container-flex-nordeste">
        <div>
          <ImgCard img={imgCardLeft} />
          <CardBody
            title="ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad omnis placeat similique iusto officia doloremque vitae iste nesciunt tenetur sunt facilis voluptatum inventore impedit dolor magni culpa. Sit, optio."
            titleCard="Arte Sertaneja"
          />
        </div>

        <div>
          <ImgCard img={imgCardMidle} />
          <CardBody
            title="ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad omnis placeat similique iusto officia doloremque vitae iste nesciunt tenetur sunt facilis voluptatum inventore impedit dolor magni culpa. Sit, optio."
            titleCard="Mestres"
          />
        </div>
        <div>
          <ImgCard img={imgCardRight} />
          <CardBody
            title="ipsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad omnis placeat similique iusto officia doloremque vitae iste nesciunt tenetur sunt facilis voluptatum inventore impedit dolor magni culpa. Sit, optio."
            titleCard="Decoração"
          />
        </div>
      </div>
    </div>
  );
};

export default Nordeste;
