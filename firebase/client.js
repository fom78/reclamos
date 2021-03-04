import firebase from "firebase"

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
    username: email,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

// export const loginWithGitHub = () => {
//   const githubProvider = new firebase.auth.GithubAuthProvider()
//   return firebase.auth().signInWithPopup(githubProvider)
// }

export const loginWithGmail = () => {
  const gmailProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(gmailProvider)
}

export const logout = () => {
  console.log('logout')
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    return true
  }).catch((error) => {
    // An error happened.
  });
}

// export const addDevit = ({ avatar, content, img, userId, userName }) => {
//   return db.collection("devits").add({
//     avatar,
//     content,
//     img,
//     userId,
//     userName,
//     createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
//     likesCount: 0,
//     sharedCount: 0,
//   })
// }

// const mapDevitFromFirebaseToDevitObject = (doc) => {
//   const data = doc.data()
//   const id = doc.id
//   const { createdAt } = data

//   return {
//     ...data,
//     id,
//     createdAt: +createdAt.toDate(),
//   }
// }

// export const listenLatestDevits = (callback) => {
//   return db
//     .collection("devits")
//     .orderBy("createdAt", "desc")
//     .limit(20)
//     .onSnapshot(({ docs }) => {
//       const newDevits = docs.map(mapDevitFromFirebaseToDevitObject)
//       callback(newDevits)
//     })
// }

// export const uploadImage = (file) => {
//   const ref = firebase.storage().ref(`images/${file.name}`)
//   const task = ref.put(file)
//   return task
// }