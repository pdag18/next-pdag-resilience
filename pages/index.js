import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Resilience Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main >
        <style jsx>{`
         h1 { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px; } h3 { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 15.4px; } p { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 20px; } blockquote { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 21px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 30px; } pre { font-family: Futura, "Trebuchet MS", Arial, sans-serif; font-size: 13px; font-style: normal; font-variant: normal; font-weight: 400; line-height: 18.57143px; }
        `}</style>
        <p>"Driving positive change in disadvantaged communities through innovative approaches to climate adaptation, and environemental sustainability to create a more equitable world for all"</p>
        <h1 className='title'>Coming Soon</h1>
        {/* <Header title="Coming Soon" /> */}

      </main>

      {/* <Footer /> */}
    </div>
  )
}
