import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'

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