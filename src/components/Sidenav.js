import styles from '../styles/navbar.module.css'
import { useState } from 'react'

const Sidenav = (
    navOpen,
    setNavOpen
) => {

    const closeNav = () => {
        setNavOpen("closed")
    }

    const openNav = () => {
        setNavOpen("open")
    }

    console.log(navOpen)

    return (
        <div>
            <div className={navOpen}>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={closeNav} />
            </div>
            <a href="javascript:void(0)" className={styles.openbtn} onClick={openNav} />
        </div >
    )
}

export default Sidenav