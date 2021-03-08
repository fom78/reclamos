
//import { firmas } from "../../datos";
import { Contenedor, Texto, SimpleCheck, DobleCheck } from "./estilos";
import { getFirmas } from "../../firebase/client";
import {useState, useEffect } from "react";

const Firmas = ({barrio = true}) => {
    const [firmas, setFirmas] = useState([]);
    // let vecinosBarrio = 0
    // let vecinosCiudad = 0

    // firmas.map(e=>{
    //     if (e.barrio) {
    //         vecinosBarrio ++
    //     } else {
    //         vecinosCiudad ++
    //     }
    // })
    
    useEffect(()=>{
        getFirmas()
            .then((res)=>{
                const docs = [];
                res.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
                });
                setFirmas(docs);
            })
    },[])
    console.log(firmas);
    const leyendaBarrio = `${firmas.length} Vecinos de Los Pioneros firmaron.`
    const leyendaNoBarrio = `${firmas.length} Ciudadanos que conocen el Barrio.`

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