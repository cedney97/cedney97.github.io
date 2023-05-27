import { useRef } from 'react'
// import useScrollSnap from 'react-use-scroll-snap'

import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'
import ContactPage from './ContactPage'

import styles from '../styles/page.module.css';

const Page = ({
    navOpen
}) => {

    // const scrollRef = useRef(null)
    // useScrollSnap({
    //     ref: scrollRef,
    //     duration: 0,
    //     delay: 0
    // })

    return (
        <div className={`${styles.page_container} ${navOpen ? styles.nav_open : styles.nav_closed}`} /*ref={scrollRef}*/>
            <HomePage />
            <AboutPage />
            <ProjectsPage />
            <ContactPage />
        </div>
    )
}

export default Page