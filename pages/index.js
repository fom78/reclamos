import Layout from "../components/Layout";
import styled from "styled-components";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title="Reclamamos..." footer={true} dark>
      
      <CardReclamo>
        <Titulo>Titulo del reclamo</Titulo>
        <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis aut voluptates illo magnam doloremque ut quae numquam eum voluptatum est iste, totam corrupti illum laborum eveniet! Perspiciatis, velit ipsa!</Texto>
      </CardReclamo>

    </Layout>

    
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
    min-width: 0;
    min-height:250px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
`

const Titulo = styled.h5`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
`
const Texto = styled.p`
  padding: 0.4rem;
`