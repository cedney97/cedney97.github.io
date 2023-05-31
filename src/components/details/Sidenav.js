import styles from '../../styles/navbar.module.css'

import { Link } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'

const Sidenav = ({
    navOpen,
    setNavOpen
}) => {

    const closeNav = () => {
        setNavOpen(false)
    }

    const openNav = () => {
        setNavOpen(true)
    }

    return (
        <div>
            <div className={`${styles.sidenav} ${navOpen ? styles.open : styles.closed}`}>
                <Link href="#!" className={styles.closebtn} onClick={closeNav}>&times;</Link>
                <Link href="/" component={HomePage} className={styles.menu_item}>Home</Link>
                <Link href="/" component={AboutPage} className={styles.menu_item}>About</Link>
                <Link href="/" component={ProjectsPage} className={styles.menu_item}>Projects</Link>
                <Link href="/" component={ContactPage} className={styles.menu_item}>Contact</Link>
            </div>
            <button className={styles.openbtn} onClick={navOpen ? closeNav : openNav} />
        </div >
    )
}

export default Sidenav