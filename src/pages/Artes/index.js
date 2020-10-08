import React from 'react';
import arteIndigena from '../../assets/images/indigena.png';
import arteIndigena1 from '../../assets/images/arteIndigena1.jpg';
import arteIndigena2 from '../../assets/images/arteIndigena2.jpg';
import arteIndigena3 from '../../assets/images/arteIndigena3.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';
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
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={arteIndigena}
              titleImg='Mestre'
              titleCard='Zezinho de Tracunhaém'
              textCard='Fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil'
            />
          </div>
        </div>
      </section>
    );
};

export default Artes;
