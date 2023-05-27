import styles from '../styles/navbar.module.css'

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
                <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav} />
                <a href="/" className={styles.menu_item}>Home</a>
                <a href="/" className={styles.menu_item}>About</a>
                <a href="/" className={styles.menu_item}>Projects</a>
                <a href="/" className={styles.menu_item}>Contact</a>
            </div>
            <a href="javascript:void(0)" className={styles.openbtn} onClick={navOpen ? closeNav : openNav} />
        </div >
    )
}

export default Sidenav