import {
  Contenedor,
  ContenedorFirmas,
  Texto,
  SimpleCheck,
  DobleCheck,
  Firma,
  FirmaHeader,
  FirmaContent
} from './estilos'
import Avatar from '../Avatar'
import useTimeAgo from '../../hooks/useTimeAgo'

const Firmas = ({ barrio = true, firmas = [] }) => {
  const leyendaBarrio = `${
    firmas.filter((e) => {
      return e.esHabitanteDelBarrio
    }).length
  } Vecinos de Los Pioneros firmaron.`
  const leyendaNoBarrio = `${
    firmas.filter((e) => {
      return !e.esHabitanteDelBarrio
    }).length
  } Ciudadanos que conocen el Barrio.`
  return (
    <>
      <Contenedor>
        <DobleCheck />
        <Texto>{leyendaBarrio} </Texto>
      </Contenedor>

      <Contenedor>
        <SimpleCheck />
        <Texto>{leyendaNoBarrio} </Texto>
      </Contenedor>
      <ContenedorFirmas>
        {firmas.map(
          ({
            id,
            createdAt,
            esHabitanteDelBarrio,
            msg,
            userId,
            userName,
            userAvatar
          }) => {
            const { dateTime, timeago } = useTimeAgo({
              timestamp: new Date(createdAt)
            })

            return (
              <Firma key={id}>
                <FirmaHeader>
                  <Avatar userName={userName} src={userAvatar} />
                  <span>
                    {timeago}
                  </span>
                </FirmaHeader>
                <FirmaContent>{msg}</FirmaContent>
              </Firma>
            )
          }
        )}
      </ContenedorFirmas>
    </>
  )
}

export default Firmas
