import Link from 'next/link'
import { useEffect } from 'react'
import Avatar from '../Avatar'
import { Navegacion, ContenedorNavegacion, NavbarBrand, MenuIzquierda, NavItem, Cuenta, BtnSalir, Bars } from './estilos'
import useUser, { USER_STATES } from '../../hooks/useUser'
import { logout } from '../../firebase/client'

// useEffect(() => {

//   getFirmas().then(setFirmas)
// }, [user])

const Navbar = () => {
  const { user } = useUser()
  const handleClickSalir = () => {
    logout()
  }

  return (
    <>
      <Navegacion>
        <ContenedorNavegacion>
          <Link href='/'>
            <NavbarBrand activo>Reclamos los Pioneros</NavbarBrand>
          </Link>

          
            {/* <NavItem>
              <Link href='/firmas'>
                <a aria-current='page'>
                  Firmas
                </a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href='/github'>
                <a>Fotos</a>
              </Link>
            </NavItem> */}
            {(user)
              ? (<Cuenta>
              <Avatar userName={user.userName} src={user.avatar} />
              <MenuIzquierda>
              <BtnSalir onClick={handleClickSalir}> Salir</BtnSalir>
              </MenuIzquierda>
              
              </Cuenta>)
              : null}
          
          <Bars />
        </ContenedorNavegacion>
        {/* </div> */}
      </Navegacion>
    </>
  )
}

export default Navbar
