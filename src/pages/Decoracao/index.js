import React from 'react';
import decoracaoNorte1 from '../../assets/images/decoracaoNorte1.jpg';
import decoracaoNorte2 from '../../assets/images/decoracaoNorte2.jpg';
import decoracaoNorte3 from '../../assets/images/decoracaoNorte3.jpg';
import decoracaoNordeste1 from '../../assets/images/decoracaoNordeste1.jpg';
import decoracaoNordeste2 from '../../assets/images/decoracaoNordeste2.jpg';
import decoracaoNordeste3 from '../../assets/images/decoracaoNordeste3.jpg';
import Card from '../../components/Card';
import Head from '../../components/Head';

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
              titleImg='Artesanato Marajoara'
              titleCard='Artesanato Marajoara'
              textCard='A arte marajoara é um tipo de cerâmica fruto do trabalho das tribos indígenas que habitavam a ilha brasileira de Marajó (próximo a Belém, no estado do Pará), na foz do rio Amazonas, durante o período pré-colonial de 400 a 1400 d.C.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNorte2}
              titleImg='Povoados ribeirinhos'
              titleCard='Povoados ribeirinhos'
              textCard='Feitos pelo povoado ribeirinho, os produtos são fruto de um processo de qualificação, conscientização e organização de trabalho que promove a inclusão social, razão pela qual levam a certificação de "produto ecologicamente manejado, socialmente justo e economicamente viável.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNorte3}
              titleImg='Marchetaria da Amazônia'
              titleCard='Marchetaria da Amazônia'
              textCard='A marchetaria é uma técnica artística e artesanal de incrustar e embutir peças de madeira, pedras preciosas, madrepérola, metais, entre outros materiais em superfícies planas de móveis, painéis, pisos, paredes e tetos.'
            />
          </div>
        </div>
      </section>
    );

  if (URL_NAME === '/nordeste/decoracao')
    return (
      <section className='margin-body animeDown'>
        <Head title='Decoração' description='Essa é a página dos Decoração' />
        <div className='content card-content content-grid-pages'>
          <div className='flex-card'>
            <Card
              img={decoracaoNordeste1}
              titleImg='Decoração baiana '
              titleCard='Decoração baiana '
              textCard='A Bahia é conhecida por ser berço de diversos seguimentos artísticos e culturais. E uma de suas peculiaridades é o artesanato. Alguns objetos impressionam os visitantes, com temas que carregam as mais inusitadas características do estado.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNordeste2}
              titleImg='Artesanato com areia'
              titleCard='Artesanato com areia'
              textCard='O Artesanato com areia colorida, é a técnica manual de fazer paisagens ou qualquer outra imagem usando areia colorida dentro de potes, garrafas ou copos de vidro.  Pra trabalhar com areia colorida é preciso muita criatividade e concentração, o desenho é criado dentro de garrafas, potes, copos e jarras, deixando a magia da criatividade falar mais alto.'
            />
          </div>
          <div className='flex-card'>
            <Card
              img={decoracaoNordeste3}
              titleImg='renda'
              titleCard='Renda filé'
              textCard='A renda ou bordado filé é característica do litoral de Alagoas, e nasceu do aproveitamento das redes confeccionadas pelos maridos pescadores e bordados pela mulheres em cores fortes e vibrantes características da região, presente nos barcos, nas casas e festas folclóricas, como o maracatu.'
            />
          </div>
        </div>
      </section>
    );
};

export default Decoracao;
