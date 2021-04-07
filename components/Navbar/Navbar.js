import Link from 'next/link'
// import { useEffect } from 'react'
import Avatar from '../Avatar'
import {
  Navegacion,
  ContenedorNavegacion,
  NavbarBrand,
  MenuIzquierda,
  Cuenta,
  BtnSalir
} from './estilos'
import useUser from '../../hooks/useUser'
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
          {user
            ? (
              <Cuenta>
                <Avatar userName={user.userName} src={user.avatar} />
                <MenuIzquierda>
                  <BtnSalir onClick={handleClickSalir}> Salir</BtnSalir>
                </MenuIzquierda>
              </Cuenta>
              )
            : null}
        </ContenedorNavegacion>
      </Navegacion>
    </>
  )
}

export default Navbar
