import Link from "next/link";
import Layout from "../components/Layout";
import styled from "styled-components";

const Display = styled.div`
    text-align: center!important;
    align-content:center;
`
const Texto = styled.h1`
 
      font-size: 6rem!important;
      font-weight: 300;
      line-height: 1.2;
      display: block;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    
`
const custom404 = () => (
  <Layout title="Pagina no encontrada" dark>
    
      <Display>
        <Texto>404</Texto>
        <p>
          Esta pagina no existe. Por favor regrese a{" "}
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </p>
      </Display>

  </Layout>
);

export default custom404;
