import Head from 'next/head'
//import 'animate.css/animate.min.css'
//import '../styles/globals.css'
import '../styles/estilos.css'



export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Los Pioneros reclama!</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

// // This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }