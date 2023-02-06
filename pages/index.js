import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Resilience Lab</title>
        <link rel="icon" href="/resilience_lab_logo.svg" />
      </Head>
      <Navbar />
      <main >
        <p>"Driving positive change in disadvantaged communities through innovative approaches to climate adaptation, and environemental sustainability to create a more equitable world for all"</p>
        <h1 className='title' style={{["color"]: "#14b8a6"}}>Coming Soon</h1>

      </main>

      {/* <Footer /> */}
    </div>
  )
}
