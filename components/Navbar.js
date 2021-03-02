import Link from "next/link";
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Reclamos los Pioneros</a>
        </Link>
       
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page">
                  Firmas
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">
                 Fotos 
                </a>
              </Link>
            </li>
          </ul>
        </div>
      {/* </div> */}
    </nav>
    <Navegacion>
      <ContenedorNavegacion>
        <Link href="/">
          <a className="navbar-brand">Reclamos los Pioneros</a>
        </Link>
       
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link active" aria-current="page">
                  Firmas
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <a className="nav-link">
                 Fotos 
                </a>
              </Link>
            </li>
          </ul>
        </ContenedorNavegacion>
      {/* </div> */}
    </Navegacion>
    </>
  );
};

const Navegacion = styled.nav`
  background-color: #373a3c!important;
  color: #f8f9fa!important;
  position: relative;
  padding: .5rem 1rem;
`

const ContenedorNavegacion = styled.div`
  display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

export default Navbar;
