import { StyledButton } from './estilos'

export const modoButton = {
  DEFAULT: 0,
  FIRMAR: 1,
  FIRMANDO: 2,
  ENVIAR_FIRMA: 3,
  CANCELAR_FIRMAR: 4,
  VER_FIRMA: 5
}
export default function Button ({ children, disabled, onClick, firmar = false, enviarFirma = false, modo = modoButton.DEFAULT }) {
  return (
    <>
      <StyledButton disabled={disabled} onClick={onClick} firmar={firmar} enviarFirma={enviarFirma} modo={modo}>
        {children}
      </StyledButton>

    </>
  )
}
