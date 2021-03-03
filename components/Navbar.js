import Link from "next/link";
import styled from "styled-components";


const Navegacion = styled.nav`
  background-color: #373a3c !important;
  color: #f8f9fa !important;
  position: relative;
  padding: 0.5rem 1rem;
`;

const ContenedorNavegacion = styled.div`
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

const NavbarBrand = styled.a`
  
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

const MenuIzquierda = styled.ul`
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

const NavItem = styled.li`
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

const Navbar = () => {
  return (
    <>
      <Navegacion>
        <ContenedorNavegacion>
          <Link href="/">
            <NavbarBrand activo>Reclamos los Pioneros</NavbarBrand>
          </Link>

          <MenuIzquierda>
            <NavItem>
              <Link href="/firmas">
                <a aria-current="page">
                  Firmas
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/github">
                <a>Fotos</a>
              </Link>
            </NavItem>
          </MenuIzquierda>
        </ContenedorNavegacion>
        {/* </div> */}
      </Navegacion>
    </>
  );
};

export default Navbar;
