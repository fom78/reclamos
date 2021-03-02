import Head from 'next/head'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
//import 'animate.css/animate.min.css'
import '../styles/globals.css'




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

// This default export is required in a new `pages/_app.js` file.
// export default function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }