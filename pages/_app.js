import 'bootstrap/dist/css/bootstrap.css'
import '@styles/globals.css'
import Head from 'next/head'

function Application({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Resilience Lab</title>
      <link rel="icon" href="/resilience_lab_logo.svg" />
      <meta name='viewport' content='width=device-initial, initial-scale=1' />
    </Head>
    <Component {...pageProps} />
    </>
  )
}

export default Application
