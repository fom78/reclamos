import { Contenedor, ContenedorFirmas, Texto, SimpleCheck, DobleCheck, Firma, FirmaHeader, FirmaContent } from './estilos'
import Avatar from '../Avatar'

const Firmas = ({ barrio = true, firmas = [] }) => {
  const leyendaBarrio = `${firmas.filter((e) => { return e.esHabitanteDelBarrio }).length} Vecinos de Los Pioneros firmaron.`
  const leyendaNoBarrio = `${firmas.filter((e) => { return !e.esHabitanteDelBarrio }).length} Ciudadanos que conocen el Barrio.`
  return (
    <>
      <Contenedor>
        {/* {(barrio)
          ? <DobleCheck />
          : <SimpleCheck />}
        <Texto>{(barrio) ? leyendaBarrio : leyendaNoBarrio} </Texto> */}

        <DobleCheck />
        <Texto>{leyendaBarrio} </Texto>
      </Contenedor>

      <Contenedor>
        <SimpleCheck />
        <Texto>{leyendaNoBarrio} </Texto>

      </Contenedor>
      <ContenedorFirmas>
        {firmas.map(({ id, createdAt, esHabitanteDelBarrio, msg, userId, userName, userAvatar }) =>
          (
            <Firma key={id}>
              <FirmaHeader><Avatar userName={userName} src={userAvatar} /><span>{createdAt}</span></FirmaHeader>
              <FirmaContent>{msg}</FirmaContent>
            </Firma>)

        )}
        {/* {firmas.map(({ id, userId }) => {
            return <span key={id}>hola {userId}</span>
          })} */}

      </ContenedorFirmas>
    </>
  )
}

export default Firmas
