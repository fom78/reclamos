import { useEffect, useState } from "react"
import { onAuthStateChanged, getFirmaByUserId } from "../firebase/client"
import { useRouter } from "next/router"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const [userHaFirmado, setUserHaFirmado] = useState(false)
  const [firmando, setFirmando] = useState(false)
  const[userFirma, setUserFirma] = useState(null)

  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/")
    if (user === USER_STATES.NOT_LOGGED) {
      setUserFirma(null)
      setFirmando(false)
    } 
    if (user){
       getFirmaByUserId(user.uid)
        .then((res)=>{ 
          if (res) {
            setUserHaFirmado(true);
            setUserFirma(res)
          } else {
            setUserHaFirmado(false);
          }
        })
    }
  }, [user])

  return {user, setUser, userHaFirmado, setUserHaFirmado, firmando, setFirmando,userFirma}
}
