import styled from 'styled-components'
import { FaCheckDouble, FaCheck } from 'react-icons/fa'

export const Contenedor = styled.div`
    display:flex;
    max-width:100%;
    //width:40%;
    margin: 0 auto;
    align-items:center;
    background-color: #9D56DA;
    border-radius: .4rem;
    padding: .5rem .3rem;
`

export const Texto = styled.p`
    color: #000;
    padding-left: .5rem;
`
export const DobleCheck = styled(FaCheckDouble)`
    color:#094F04;
    font-size: 2.2rem;
`
export const SimpleCheck = styled(FaCheck)`
    color:#094F04;
    font-size: 2.2rem;
`
export const ContenedorFirmas = styled.div`
    //display:flex;
    grid-column: span 2;
    min-width:80%;
    //border:2px solid red;
    margin: 0 auto;
    align-items:center;
    //background-color: #9133DA;
    border-radius: .4rem;
    padding: .5rem .3rem;
`

export const Firma = styled.div`
    //border:1px solid #000;
    background-color:#BECABE;
    min-height: 5rem;
    margin-bottom: .8rem;

`
export const FirmaHeader = styled.div`
    display:flex;
    justify-content:space-between;
    padding: .4rem;
    font-weight:700;
    //border:2px solid white;
    /* > span:hover {
        display:none;
    } */
`

export const FirmaContent = styled.div`
    display:flex;
    justify-content:space-between;
    padding: .4rem;
    //border:2px solid white;
`
