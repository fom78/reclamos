
import { firmas } from "../../datos";
import { Contenedor, Texto, SimpleCheck, DobleCheck } from "./estilos";

const Firmas = ({barrio = true}) => {
    
    let vecinosBarrio = 0
    let vecinosCiudad = 0

    firmas.map(e=>{
        if (e.barrio) {
            vecinosBarrio ++
        } else {
            vecinosCiudad ++
        }
    })
    
    const leyendaBarrio = `${vecinosBarrio} Vecinos de Los Pioneros firmaron.`
    const leyendaNoBarrio = `${vecinosCiudad} Ciudadanos que conocen el Barrio.`

    return ( 
        <>
            <Contenedor> 
                {(barrio) 
                ? <DobleCheck />
                : <SimpleCheck />
                }
                <Texto>{(barrio)?leyendaBarrio:leyendaNoBarrio} </Texto>
            </Contenedor>
            
        </>
     );
}

export default Firmas;