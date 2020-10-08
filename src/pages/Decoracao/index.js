import React from 'react';
import arteIndigena from '../../assets/images/indigena.png';
import decoracaoNorte1 from '../../assets/images/decoracaoNorte1.jpg';
import decoracaoNorte2 from '../../assets/images/decoracaoNorte2.jpg';
import decoracaoNorte3 from '../../assets/images/decoracaoNorte3.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';
import './styles.css';

const Decoracao = () => {
  const URL_NAME = window.location.pathname;

  if (URL_NAME === '/norte/decoracao')
    return (
      <section className='margin-body animeDown'>
        <Head title='Decoração' description='Essa é a página de decoração' />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={decoracaoNorte1}
              titleImg='Artesanato Indígena Marajoara'
              titleCard='Artesanato Indígena Marajoara'
              textCard='A arte marajoara é um tipo de cerâmica fruto do trabalho das tribos indígenas que habitavam a ilha brasileira de Marajó (próximo a Belém, no estado do Pará), na foz do rio Amazonas, durante o período pré-colonial de 400 a 1400 d.C.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNorte2}
              titleImg='Povoados ribeirinhos - PA'
              titleCard='Povoados ribeirinhos - PA'
              textCard='Feitos pelo povoado ribeirinho, os produtos são fruto de um processo de qualificação, conscientização e organização de trabalho que promove a inclusão social, razão pela qual levam a certificação de "produto ecologicamente manejado, socialmente justo e economicamente viável.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNorte3}
              titleImg='Marchetaria da Amazônia – ACRE'
              titleCard='Marchetaria da Amazônia – ACRE'
              textCard='A marchetaria é uma técnica artística e artesanal de incrustar e embutir peças de madeira, pedras preciosas, madrepérola, metais, entre outros materiais em superfícies planas de móveis, painéis, pisos, paredes e tetos.'
            />
          </div>
        </div>
      </section>
    );

  if (URL_NAME === '/nordeste/decoracao')
    return (
      <section className='margin-body animeDown'>
        <Head title='Mestres' description='Essa é a página dos Mestres' />
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

export default Decoracao;
