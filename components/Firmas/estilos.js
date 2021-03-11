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
    //width:80%;
    margin: 0 auto;
    align-items:center;
    background-color: #9133DA;
    border-radius: .4rem;
    padding: .5rem .3rem;
`
