import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <nav className='navbar navbar-expand-lg navbar-light bg-white fixed-top'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        <img src='/resilience_lab_logo_remove_bg.png' 
                        alt='Resilience Lab logo with tagline - A Better Tomorrow, Today'
                        height='90'
                        />
                    </a>
                </div>
            </nav>
        </>
    )
}