
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Firmas from '../components/Firmas'
import Button, { modoButton } from '../components/Button'
import styled from 'styled-components'

import { loginWithGmail, addFirma, getFirmas } from '../firebase/client'

import useUser from '../hooks/useUser'

const defaultMessage = 'Firmo en total acuerdo con el reclamo!'

export default function Home () {
  const [verFirma, setVerFirma] = useState(false)
  const [message, setMessage] = useState(defaultMessage)
  const [firmas, setFirmas] = useState([])

  const { user, setUser, userHaFirmado, userFirma, firmando, setFirmando } = useUser()

  useEffect(() => {
    getFirmas()
      .then((res) => {
        const docs = []
        res.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id })
        })
        setFirmas(docs)
      })
  }, [])

  const handleClickFirmar = () => {
    setFirmando(!firmando)
  }
  const handleClickVerMiFirma = () => {
    setVerFirma(!verFirma)
  }

  const handleClickEnviarFirma = (e) => {
    e.preventDefault()

    // Controlamos si el usuario hafirmado ??
    const esHabitanteDelBarrio = true
    // const provisorioUid = new Date().getTime()
    if (!userHaFirmado) {
      const currentFirma = {
        userId: user.uid,
        // userId: provisorioUid,
        esHabitanteDelBarrio,
        msg: message
      }

      addFirma(currentFirma)
        .then((res) => {
          const newUser = { ...user, firma: currentFirma }
          setUser(newUser)
          setFirmando(!firmando)
          setFirmas([...firmas, currentFirma])
        })
    } else { console.log('ya firmaste papa!!!!') }
  }

  const handleClickGmail = () => {
    loginWithGmail()
      .catch((err) => {
        console.log(err)
      })
  }

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  return (
    <>
      <Layout footer dark>
        <CardFirma>

          {(user)
            ? ((!userHaFirmado)
                ? (
                  <>
                    <p>Estoy de Acuerdo y quiero firmar!</p>
                    <Button
                      onClick={handleClickFirmar}
                      modo={(!firmando) ? modoButton.FIRMAR : modoButton.CANCELAR_FIRMAR}
                    >
                      {(!firmando) ? 'Firmar' : 'Cancelar'}
                    </Button>
                  </>
                  )
                : (
                  <>
                    <p>Ya Firme!!</p>
                    <Button
                      onClick={handleClickVerMiFirma}
                      modo={modoButton.VER_FIRMA}
                    >{!verFirma ? 'Ver' : 'Ocultar'} Mi Firma
                    </Button>
                  </>
                  )
              )
            : <><p>Estoy de Acuerdo y quiero firmar!</p><Button onClick={handleClickGmail}>Ingresar con Gmail</Button></>}
        </CardFirma>
        {(!userHaFirmado)
          ? (
            <ContenedorFormulario firmando={firmando}>
              <FormularioFirma>
                <TextArea
                  onChange={handleChange}
                  value={message}
                />
                <Button onClick={handleClickEnviarFirma} modo={modoButton.ENVIAR_FIRMA}>Enviar mi firma</Button>
              </FormularioFirma>
            </ContenedorFormulario>
            )
          : null}
        {(verFirma && userFirma)
          ? (
            <ContenedorVerFirma>
              <MiFirma>{userFirma.msg}</MiFirma>
            </ContenedorVerFirma>
            )
          : null}
        <CardReclamo>
          <Articulo>
            <Titulo>Titulo del reclamo</Titulo>
            <Texto>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis aut voluptates illo magnam doloremque ut quae numquam eum voluptatum est iste, totam corrupti illum laborum eveniet! Perspiciatis, velit ipsa!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum maxime labore culpa repudiandae nam magnam fugit velit sint qui eos, exercitationem nesciunt, perspiciatis necessitatibus alias et iure. Quasi, adipisci rerum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque rem deserunt perspiciatis ex natus cum aliquam tempore, nobis accusantium quibusdam? Necessitatibus quibusdam ipsa quas voluptatum, reprehenderit cum architecto numquam accusamus!
              inventore, minus harum accusantium numquam iste reprehenderit sequi repellat aspernatur et vitae ab nemo tempore ea, beatae impedit suscipit omnis. Quas veritatis delectus nostrum dolorem possimus, sed porro ullam.
              Cumque minus nulla molestias eos eum accusamus suscipit repellendus hic necessitatibus vel impedit voluptates ut est temporibus possimus deserunt, iste illo distinctio aperiam nesciunt, in reiciendis dolorum. Beatae, doloremque consectetur.
              xercitationem, similique molestiae nihil inventore culpa repellendus error quis voluptates!
            </Texto>
          </Articulo>
          <Conteo>
            <Firmas firmas={firmas} /><Firmas firmas={firmas} barrio={false} />
          </Conteo>
        </CardReclamo>

      </Layout>
    </>

  )
}

// Reclamo
const CardReclamo = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    justify-content: space-between;
    min-width: 0;
    min-height:250px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
`
// Articulo
const Articulo = styled.div`
  color: black;
`
const Titulo = styled.h5`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  color:#494D49;
`
const Texto = styled.p`
  padding: 0.4rem;
  color:#151715;
`

// Conteo
const Conteo = styled.div`
  padding: .6rem;
  display:flex;
`

// Firmar
const CardFirma = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  min-height: 3rem;
  padding: .4rem;

  p {
    font-size: 1rem;
    font-weight: 700;
    color: #C70039;
  }
`
const ContenedorFormulario = styled.div`
  display:${props => props.firmando ? 'flex' : 'none'};
  /* border: 2px solid #838C78; */
  border-radius: .5rem;
  margin: .5rem auto;
  width:100%;
  min-height:8rem;
  /* opacity: 0;
  transition: 2.5s all ease-in; */
`
const FormularioFirma = styled.form`
  width:100%;
`

const TextArea = styled.textarea`
    border: 3px solid #838C78;
    border-radius: 10px;
    font-size: 1.5rem;
    min-height: 200px;
    padding: 15px;
    outline: 0;
    resize: none;
    width: 100%;
`

// Ver Firma
const ContenedorVerFirma = styled.div`
  /* display:${props => props.verFirma ? 'flex' : 'none'}; */
  display:flex;
  /* border: 2px solid #838C78; */
  border-radius: .5rem;
  margin: .5rem auto;
  width:100%;
  min-height:2rem;
`
const MiFirma = styled.span`
    border: 3px solid #838C78;
    border-radius: 10px;
    font-size: 1.5rem;
    height:auto;
    background-color:#90EB90;
    padding: 15px;
    outline: 0;
    //resize: none;
    width: 100%;
`
