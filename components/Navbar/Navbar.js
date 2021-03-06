import Link from "next/link";
import { useEffect } from "react";
import { Navegacion, ContenedorNavegacion, NavbarBrand, MenuIzquierda, NavItem, BtnSalir } from "./estilos";
import useUser, { USER_STATES } from "../../hooks/useUser"
import { logout } from "../../firebase/client";
const Navbar = () => {
  const user = useUser()

  const handleClickSalir = () => {
    logout()
  }

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
            {(user)
            ? <BtnSalir onClick={handleClickSalir}> Salir</BtnSalir>
            : null}
          </MenuIzquierda>
        </ContenedorNavegacion>
        {/* </div> */}
      </Navegacion>
    </>
  );
};

export default Navbar;
