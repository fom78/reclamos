import Head from 'next/head'
//import 'bootswatch/dist/cosmo/bootstrap.min.css'
//import 'animate.css/animate.min.css'
//import '../styles/globals.css'
import '../styles/estilos.css'

//Opcion Auth0
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}


// Opcion inicial
// export default function MyApp({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <title>Los Pioneros reclama!</title>
//       </Head>
//       <Component {...pageProps} />
//     </>
//   )
// }

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }