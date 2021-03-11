import { Contenedor, ContenedorFirmas, Texto, SimpleCheck, DobleCheck } from './estilos'

const Firmas = ({ barrio = true, firmas = [] }) => {
  const leyendaBarrio = `${firmas.filter((e) => { return e.esHabitanteDelBarrio }).length} Vecinos de Los Pioneros firmaron.`
  const leyendaNoBarrio = `${firmas.filter((e) => { return !e.esHabitanteDelBarrio }).length} Ciudadanos que conocen el Barrio.`
  console.log('firmas******', firmas)
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
        <div>
          {firmas.map(({ id, createdAt, esHabitanteDelBarrio, msg, userId }) =>
            (<span key={id}> -***  {createdAt} ***de: {userId}</span>)

          )}
          {/* {firmas.map(({ id, userId }) => {
            return <span key={id}>hola {userId}</span>
          })} */}
        </div>
      </ContenedorFirmas>
    </>
  )
}

export default Firmas
