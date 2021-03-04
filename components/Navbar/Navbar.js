import Link from "next/link";
import { Navegacion, ContenedorNavegacion, NavbarBrand, MenuIzquierda, NavItem } from "./estilos";

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
