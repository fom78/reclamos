import { Contenedor, Texto, SimpleCheck, DobleCheck } from './estilos'

const Firmas = ({ barrio = true, firmas }) => {
  const leyendaBarrio = `${firmas.filter((e) => { return e.esHabitanteDelBarrio }).length} Vecinos de Los Pioneros firmaron.`
  const leyendaNoBarrio = `${firmas.filter((e) => { return !e.esHabitanteDelBarrio }).length} Ciudadanos que conocen el Barrio.`

  return (
    <>
      <Contenedor>
        {(barrio)
          ? <DobleCheck />
          : <SimpleCheck />}
        <Texto>{(barrio) ? leyendaBarrio : leyendaNoBarrio} </Texto>
      </Contenedor>

    </>
  )
}

export default Firmas
