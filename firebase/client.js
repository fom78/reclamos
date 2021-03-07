import firebase from "firebase"
import { useRouter } from "next/router"

const firebaseConfig = {
  apiKey: "AIzaSyCMZaxpuyP7bAQ-0T7h8yDN06dKzShixeQ",
  authDomain: "reclamos-8b620.firebaseapp.com",
  projectId: "reclamos-8b620",
  storageBucket: "reclamos-8b620.appspot.com",
  messagingSenderId: "977920751989",
  appId: "1:977920751989:web:68fb490037e0f01e217b3c"
};
//console.log(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)
//const firebaseConfig = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CONFIG)

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { email, photoURL, uid } = user
  return {
    avatar: photoURL,
    userName: email,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
    if (normalizedUser) {
      addUser({uid:normalizedUser.uid,userName:normalizedUser.userName})
      .then((res)=>
        {
          if (res) {
            // Enviar un email ?!
          }
      })
    }
    
  })
}

export const addUser = async ({ uid, userName }) => {
  const userRef = db.collection('users').doc(uid);
  const doc = await userRef.get();
  if (!doc.exists) {
    const newUserRef = db.collection('users');
    const newUsers = {
      uid,
      userName,
      firma:null,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    }
    await newUserRef.doc(uid).set(newUsers);
    return true
  } else {
    return false
  }
}

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(gmailProvider)
}

export const logout = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    return true
  }).catch((error) => {
    // An error happened.
  });
}

export const editUser = async ( uid, firma ) => {
  const userRef = db.collection('users').doc(uid);
  return  await userRef.update({firma})
  
}

export const getUser = async (uid) => {
  const userRef = db.collection('users').doc(uid);
  const doc = await userRef.get();
  if (doc.exists) {
    return doc.data()
  }
  return false
}

export const getFirmaByUserId = async(userId) => {
  const firmasRef = db.collection('firmas')
  const snapshot = await firmasRef.where('userId', '==', userId).get();
  if (snapshot.empty) {
    return false;
  }
  let res = false
  snapshot.forEach(doc => {
    return res = doc.data()
  });
  return res
}

export const addFirma = async ({ userId, msg }) => {
  const firmasRef = db.collection('firmas')
  const firma = {
    userId,
    msg,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
  }
  await firmasRef.doc().set(firma);
  return true
 
}