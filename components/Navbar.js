import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <>
            <div className={styles.navbar}>
                <img src='/resilience_lab_logo_remove_bg.png' 
                alt='Resilience Lab logo with tagline - A Better Tomorrow, Today' className={styles.logo} />
                {/* <h3>The header will come here</h3> */}
            </div>
        </>
    )
}