// import { GlobalStyle } from "./../styles/globales";
import Layout from "../components/Layout";
import Firmas from "../components/Firmas";
import styled from "styled-components";

export default function Home() {
  return (
    <>
    {/* <GlobalStyle /> */}
    <Layout title="Reclamamos..." footer={true} dark>
      
      <CardReclamo>
        <Articulo>
        <Titulo>Titulo del reclamo</Titulo>
        <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis aut voluptates illo magnam doloremque ut quae numquam eum voluptatum est iste, totam corrupti illum laborum eveniet! Perspiciatis, velit ipsa!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime labore culpa repudiandae nam magnam fugit velit sint qui eos, exercitationem nesciunt, perspiciatis necessitatibus alias et iure. Quasi, adipisci rerum.
          console.log();
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque rem deserunt perspiciatis ex natus cum aliquam tempore, nobis accusantium quibusdam? Necessitatibus quibusdam ipsa quas voluptatum, reprehenderit cum architecto numquam accusamus!
          inventore, minus harum accusantium numquam iste reprehenderit sequi repellat aspernatur et vitae ab nemo tempore ea, beatae impedit suscipit omnis. Quas veritatis delectus nostrum dolorem possimus, sed porro ullam.
          Distinctio, eligendi, sed in autem repellat numquam commodi quam ex quaerat quisquam eaque labore sequi dolore natus suscipit earum beatae ratione mollitia voluptas nulla architecto! Nihil assumenda similique ipsam delectus.
          Eius, sapiente. Aspernatur accusamus dolores ipsam at iste! Perspiciatis, eos consectetur iusto sapiente non praesentium animi laborum sequi, quae ex molestiae sed. Maiores quibusdam nostrum tempora quis repudiandae dolorum corporis?
          Cumque minus nulla molestias eos eum accusamus suscipit repellendus hic necessitatibus vel impedit voluptates ut est temporibus possimus deserunt, iste illo distinctio aperiam nesciunt, in reiciendis dolorum. Beatae, doloremque consectetur.
          Ratione reiciendis consequatur dolores. Asperiores nostrum totam ex iusto dolores soluta voluptatem nobis! Reprehenderit, quia! Quae esse tempore aliquid illum impedit cupiditate repellat. Delectus veritatis laborum dolore maiores, sequi aliquam!
          Iusto ipsa placeat vel, officia porro aliquam, totam veritatis nulla quasi corporis ipsam molestiae atque. Totam quibusdam maxime quam voluptate exercitationem, similique molestiae nihil inventore culpa repellendus error quis voluptates!
        </Texto>
        </Articulo>
        <Conteo>
          <Firmas /><Firmas barrio={false}/>
        </Conteo>
      </CardReclamo>
      

    </Layout>
    </>
    
  );
}

const CardReclamo = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    min-height:250px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
`
// Articulo
const Articulo = styled.div`
  color: black;
`
const Titulo = styled.h5`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  color:#494D49;
`
const Texto = styled.p`
  padding: 0.4rem;
  color:#151715;
`

const Conteo = styled.div`
  padding: .6rem;
  display:flex;
`