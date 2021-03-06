import styled from "styled-components";


export const Navegacion = styled.nav`
  background-color: #373a3c !important;
  color: #f8f9fa !important;
  position: relative;
  padding: 0.5rem 1rem;
`;

export const ContenedorNavegacion = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    max-width: 540px;
  }
  @media screen and (min-width: 768px) {
    max-width: 720px;
  }
  @media screen and (min-width: 992px) {
    max-width: 960px;
    /* flex-wrap: nowrap; */
  }
`;

export const NavbarBrand = styled.a`
  
  display: inline-block;
  padding-top: 0.324219rem;
  padding-bottom: 0.324219rem;
  margin-right: 1rem;
  font-size: .971875rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${props => props.activo ? '#fff' : 'rgba(255, 255, 255, 0.5)'};

  &:hover {
    text-decoration: none;
    color: green;
    cursor:pointer;
  }

  

  @media screen and (max-width: 576px) {
    font-size: 0.771875rem;
    flex-direction: row;
  }
`;

export const MenuIzquierda = styled.ul`
  margin-left: auto !important;
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;

  a {
    //color: rgba(255, 255, 255, 0.5);
    display: block;
    padding: 0.5rem 1rem;
    font-size: .771875rem;
    text-decoration:none;
    cursor:pointer;

    ${props => props.activo ? 'color: #fff' : 'color: rgba(255, 255, 255, 0.5)'}
  }
`;

export const BtnSalir = styled.button`
  border-style:none;
  border-radius:2.5rem;
  padding: .5rem .3rem;
  background-color:transparent;
  font-size: .771875rem;
  font-weight:700;
  cursor:pointer;
  color: #fff;

  &:hover {
    text-decoration: none;
    //font-size: 1rem;
    color:#0A0EF5;
    cursor:pointer;
    transition: 0.5s all ease-in-out;
  }
`