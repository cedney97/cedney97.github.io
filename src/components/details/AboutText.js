import { useEffect } from 'react'

import styles from '../../styles/about.module.css'

const AboutText = ({
    hoverIndex,
    setHoverIndex
}) => {

    useEffect(() => {
        setHoverIndex(0)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(hoverIndex)

    const handleHover = (i) => {
        setHoverIndex(i)
    }



    return (
        <div className={styles.about_text}>
            <h2 className={styles.about_heading}>I am a
                <span style={{ '--order': 1 }} className={styles.astro_teal} id={styles.pulse} onMouseEnter={e => handleHover(1)}> student</span>,
                <span style={{ '--order': 2 }} className={styles.astro_teal} id={styles.pulse} onMouseEnter={e => handleHover(2)}> coder</span>,
                <span style={{ '--order': 3 }} className={styles.astro_teal} id={styles.pulse} onMouseEnter={e => handleHover(3)}> musician</span>
            </h2>
            {hoverIndex === 0 && <h2 className={styles.about_desc}>Hover over the pulsing words for more info!</h2>}
            {hoverIndex === 1 && <h2 className={styles.about_desc}>I am a student at Washington University in St. Louis, majoring in Computer Science and minoring in Music and Linguistics.</h2>}
            {hoverIndex === 2 && <h2 className={styles.about_desc}>I have experience in Java, C++, HTML, CSS, Javascript, React, Python, and Swift. See my sample projects on the next page for more details!</h2>}
            {hoverIndex === 3 && <h2 className={styles.about_desc}>I am the Music Director for the Washington University in St. Louis Aristocats, the school's premiere Disney A Cappella group, as well as have made a musical exhibit for the Kemper Art Museum in St. Louis. Outside of those experiences, I have a passion for playing piano, guitar, and singing!</h2>}
        </div>
    )
}

export default AboutText