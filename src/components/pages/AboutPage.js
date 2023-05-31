import { useState } from 'react'

import styles from '../../styles/about.module.css'

import CircularCard from '../details/CircularCard'
import AboutText from '../details/AboutText'

const AboutPage = () => {
    const [hoverIndex, setHoverIndex] = useState(0)

    return (
        <div className={styles.about_container}>
            <CircularCard />
            <AboutText
                hoverIndex={hoverIndex}
                setHoverIndex={setHoverIndex}
            />
        </div>
    )
}

export default AboutPage