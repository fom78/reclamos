import { Container, AvatarStyled, UserName } from './estilos'

export default function Avatar ({ userName, src, text }) {
  return (
    <Container>
      <AvatarStyled alt={userName} src={src} title={userName} />
      <UserName>{userName}</UserName>
      {text && <strong>{text}</strong>}
    </Container>
  )
}
