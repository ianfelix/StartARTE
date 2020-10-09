import React from 'react';
import mestreNorte1 from '../../assets/images/mestreNorte1.jpeg';
import mestreNorte2 from '../../assets/images/mestreNorte2.webp';
import mestreNorte3 from '../../assets/images/mestreNorte3.jpeg';
import mestreNordeste1 from '../../assets/images/mestreNordeste1.jpg';
import mestreNordeste2 from '../../assets/images/mestreNordeste2.jpg';
import mestreNordeste3 from '../../assets/images/mestreNordeste3.jpg';
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
              state='Rio+Branco'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNorte2}
              titleImg='Levy Cardoso'
              titleCard='Levy Cardoso'
              textCard='Levy Cardoso, 48 anos, filho de Raimundo Cardoso, mestre ceramista que levou a arte em cerâmica da Amazônia para além das fronteiras do estado:o paraense chegou a ter trabalhos expostos até no Museu do Louvre, em Paris, e continua a inspirar a família mesmo oito anos após sua morte, em 2006.'
              state='Belem'
              textButton='Ver mapa'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNorte3}
              titleImg='José Guilherme Carneiro'
              titleCard='José Guilherme Carneiro'
              textCard='Um desses artistas da cultura popular do miriti, que ainda tem como se segurar de outra forma, é o artista plástico José Guilherme Carneiro. O atelier dele mistura peças de miriti com quadros, imagens de santos restauradas, cosméticos, perfumes, remédios naturais e algumas coisas de armarinho. A cada ano, ele produz até 1,5 mil peças para vender no Círio. Neste ano, não vai produzir nem uma novidade. Até porque sobrou coisa do Círio de 2019.'
              state='Manaus'
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
              img={mestreNordeste1}
              titleImg='Zezinho de Tracunhaém'
              titleCard='Zezinho de Tracunhaém'
              textCard='O ceramista José Joaquim da Silva, o Zezinho de Tracunhaém, fez da arte santeira a sua expressão maior, tornando-se um dos mais importantes artistas populares do Brasil, fonte de inspiração e mestre de dezenas de artesãos, tendo obra escultórica encontrada em acervos de igrejas, museus e coleções particulares, como o Museu de Arte Contemporânea (PE), Museu Casa do Pontal (RJ) e Palácio do Planalto. '
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNordeste2}
              titleImg='Abias'
              titleCard='Abias'
              textCard='entre galhos, raízes e troncos caídos, que José Abias da Silva alimenta a sua capacidade criadora, transformando e dando novos significados ao que para muitos seria apenas resíduo. Essa relação sustentável com o ambiente remonta à infância quando aproveitava cocos secos e gravetos para dar forma aos próprios brinquedos.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={mestreNordeste3}
              titleImg='Ademar'
              titleCard='Ademar'
              textCard='Especialista na arte sacra, Mestre Ademar aprendeu o ofício com o sogro, no ano de 1973, em São Paulo. Antes disso, ele não teve nenhum contato com a madeira, usada hoje como principal matéria-prima dos seus trabalhos. Segundo Ademar Inácio dos Santos, sua história é fruto de mero acaso.  '
            />
          </div>
        </div>
      </section>
    );
};

export default Mestres;
