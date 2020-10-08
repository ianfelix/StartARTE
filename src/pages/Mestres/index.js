import React from 'react';
import arteIndigena from '../../assets/images/indigena.png';
import mestreNorte1 from '../../assets/images/mestreNorte1.jpeg';
import mestreNorte2 from '../../assets/images/mestreNorte2.webp';
import mestreNorte3 from '../../assets/images/mestreNorte3.jpeg';
import Card from '../../components/Card';
import Head from '../../components/Head';
import './styles.css';

const Mestres = () => {
  const URL_NAME = window.location.pathname;

  if (URL_NAME === '/norte/mestres')
    return (
      <section className='margin-body animeDown'>
        <Head title='Mestres' description='Essa é a página dos Mestres' />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={mestreNorte1}
              titleImg='Doutor da Borracha – ACRE'
              titleCard='Doutor da Borracha – ACRE'
              textCard='O seringueiro José Rodrigues cresceu extraindo látex na cidade de Assis Brasil, no Acre, onde nasceu. Há doze anos, teve a ideia de confeccionar sapatos com a borracha que extraía da natureza e o negócio deu tão certo que o artesão passou a ser conhecido como ‘Dr. Borracha’ e viver da renda desse negócio.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNorte2}
              titleImg='Levy Cardoso'
              titleCard='Levy Cardoso'
              textCard='Levy Cardoso, 48 anos, filho de Raimundo Cardoso, mestre ceramista que levou a arte em cerâmica da Amazônia para além das fronteiras do estado:'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNorte3}
              titleImg='José Guilherme Carneiro'
              titleCard='José Guilherme Carneiro'
              textCard='Um desses artistas da cultura popular do miriti, que ainda tem como se segurar de outra forma, é o artista plástico José Guilherme Carneiro. O atelier dele mistura peças de miriti com quadros, imagens de santos restauradas, cosméticos, perfumes, remédios naturais e algumas coisas de armarinho. A cada ano, ele produz até 1,5 mil peças para vender no Círio. Neste ano, não vai produzir nem uma novidade. Até porque sobrou coisa do Círio de 2019.'
            />
          </div>
        </div>
      </section>
    );

  if (URL_NAME === '/nordeste/mestres')
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

export default Mestres;
