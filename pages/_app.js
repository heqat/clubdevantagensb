import 'bootstrap/dist/css/bootstrap.css'

import '../styles/global.css'
import '../styles/navbar.css'
import '../styles/index.css'
import "../styles/footer.css";
import "../styles/empresas.css";

import { useEffect } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  },[])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
