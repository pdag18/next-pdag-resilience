import Footer from '@components/Footer'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
        <p>"Driving positive change in disadvantaged communities through innovative approaches to climate adaptation, and environemental sustainability to create a more equitable world for all"</p>
        <h1 className='title' style={{["color"]: "#14b8a6"}}>Coming Soon</h1>
    </div>
    <Footer />
    </>
  )
}
