import { useEffect, useState } from "react"
import { onAuthStateChanged, getUser, getFirmaByUserId } from "../firebase/client"
import { useRouter } from "next/router"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const [userHaFirmado, setUserHaFirmado] = useState(false)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/")
    if (user){
      // // obtener el user desde la bd, controlar si res es false o user !!!
      // getUser(user.uid)
      //   .then((res)=>{ setUser(res);})

        getFirmaByUserId(user.uid)
        .then((res)=>{ 
          if (res) {
            setUserHaFirmado(true);
          } else {
            setUserHaFirmado(false);
          }
        })
    }
  }, [user])

  return {user, setUser, userHaFirmado, setUserHaFirmado}
}
