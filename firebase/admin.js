
const admin = require("firebase-admin");

const serviceAccount = require("./firebase-keys.json");
/*
Para generar ese json, primero en la consola de firebase: 
Configuracion/Cuentas de Servicio, darle al boton: 
Generar nueva clave privada.

Listo copiar esas credenciales en un json, y agregarlo a .gitignore

*/
//console.log(serviceAccount)
try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      })
  } catch (e) {}



export const firestore = admin.firestore()