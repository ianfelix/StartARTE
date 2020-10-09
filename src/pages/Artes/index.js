import React from 'react';
import Card from '../../components/Card';
import Head from '../../components/Head';
import arteIndigena1 from '../../assets/images/arteIndigena1.jpg';
import arteIndigena2 from '../../assets/images/arteIndigena2.jpg';
import arteIndigena3 from '../../assets/images/arteIndigena3.jpg';
import arteSertaneja1 from '../../assets/images/arteSertaneja1.jpg';
import arteSertaneja2 from '../../assets/images/arteSertaneja2.jpg';
import arteSertaneja3 from '../../assets/images/arteSertaneja3.jpg';

import './styles.css';

const Artes = () => {
  const URL_NAME = window.location.pathname;

  if (URL_NAME === '/norte/artes')
    return (
      <section className='margin-body animeDown'>
        <Head
          title='Artes Indígenas'
          description='Essa é a página das Artes Indígenas'
        />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={arteIndigena1}
              titleImg='ARTE BANIWA'
              titleCard='ARTE BANIWA'
              textCard='Cesta togeliforme ou balaio ( wayála) Confeccionada em fibra de uramã natural e tingida de preto, kettamárhi (desenho de um tipo de besouro) Povos Baniwa (artesão) Alto Rio Negro Bacia do Rio Içana.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena2}
              titleImg='Cocar etnia Karajá'
              titleCard='Cocar etnia Karajá'
              textCard='O cocar é um símbolo de nobreza para os índios, ultrapassa limites do estético e imprime em suas penas e sementes a ordenação da aldeia, o significado da vida, a importância do ser.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena3}
              titleImg='estatuetas'
              titleCard='Estatuetas Karajá'
              textCard='A madeira é utilizada para a fabricação de diversos trabalhos nas sociedades indígenas. Vários artefatos são produzidos como ornamentos, máscaras, banquinhos, bonecas, pequenas estatuetas, canoas, entre vários outros.'
            />
          </div>
        </div>
      </section>
    );

  if (URL_NAME === '/nordeste/artes')
    return (
      <section className='margin-body animeDown'>
        <Head
          title='Artes Sertanejas'
          description='Essa é a página das Artes Sertanejas'
        />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={arteSertaneja1}
              titleImg='Cordel'
              titleCard='Cordel'
              textCard='A Literatura de Cordel é uma expressão literária, tradicionalmente ligada ao nordeste e à cultura popular brasileira. Os seus locais de origem e destaque são os estados de Pernambuco, Alagoas, Paraíba, Pará, Rio Grande do Norte e Ceará. Contudo, hoje tem se tornado presente em muitas feiras culturais do Sudeste.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteSertaneja3}
              titleImg='arte do barro'
              titleCard='Arte do barro'
              textCard='Mestre Vitalino deu vida ao barro em violeiros, bois, vacas, cangaceiros, ciranda, zabumba, cavalo-marinho, noivos, cavalos, Lampião e Maria Bonita, vaquejada, entre outros. Sua produção artística passou a ser iconográfica, influenciando a formação de novas gerações de artistas, principalmente no Alto do Moura em Caruaru.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteSertaneja2}
              titleImg='Xilogravura'
              titleCard='Xilogravura'
              textCard='A Xilogravura é uma arte milenar que marca a identidade da cultura do Nordeste do Brasil e retrata o rico imaginário da cultura popular a partir de temáticas religiosas, políticas e até eróticas. A técnica consiste em talhar um pedaço de madeira usando facas e canivetes bem amolados.'
            />
          </div>
        </div>
      </section>
    );
};

export default Artes;
