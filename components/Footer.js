import styles from './Footer.module.css'

export default function Footer() {
  const today = new Date();
  const year = {currentYear: today.getFullYear()}
  return (
    <>
      <footer className="py-3 mt-5 fixed-bottom" style={{['background-color']: "#14b8a6"}}>
        <div className='d-flex column justify-content-center align-items-center'>
          <p className='small'>© Resilience Lab {year.currentYear} | All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
