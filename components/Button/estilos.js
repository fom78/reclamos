import styled from "styled-components";
import { modoButton } from "./index";


const handleModoType = modo => {
  switch (modo) {
    case modoButton.FIRMAR:
      return "#B4E97A";
    case modoButton.ENVIAR_FIRMA:
      return "#03a9f3";
      case modoButton.CANCELAR_FIRMAR:
        return "#DA1A03";
    default:
      return "#000000";
  }
};

export const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  background: ${({ modo }) => handleModoType(modo)};
  border-radius: 9999px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 800;
  padding: 8px 24px;
  transition: opacity 0.3s ease;
  width: ${props => props.modo === modoButton.ENVIAR_FIRMA ? '100%' : null};

  ${props => props.disabled ? 'opacity: 0.2; pointer-events: none' : null}

  &:hover{
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  box-shadow: none;
  }
` 
  

// button > :global(svg) {
//   margin-right: 8px;
// }

