import { Contenedor, Texto, SimpleCheck, DobleCheck } from "./estilos";
import { getFirmas } from "../../firebase/client";
import {useState, useEffect } from "react";

const Firmas = ({barrio = true, firmas}) => {
    // const [firmas, setFirmas] = useState([]);
    
    // useEffect(()=>{
    //     getFirmas()
    //         .then((res)=>{
    //             const docs = [];
    //             res.forEach(doc => {
    //             docs.push({ ...doc.data(), id: doc.id })
    //             });
    //             setFirmas(docs);
    //         })
    // },[])
   
    
    const leyendaBarrio = `${firmas.filter((e)=>{return e.esHabitanteDelBarrio}).length} Vecinos de Los Pioneros firmaron.`
    const leyendaNoBarrio = `${firmas.filter((e)=>{return !e.esHabitanteDelBarrio}).length} Ciudadanos que conocen el Barrio.`

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