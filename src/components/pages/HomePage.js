import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

import styles from '../../styles/home.module.css'

const HomePage = () => {

    const [textColor, setTextColor] = useState('white')

    return (
        <div className={styles.home_container}>
            <div style={{
                textAlign: 'center',
                fontSize: '5em',
                color: textColor,
                textShadow: '2px 2px 2px var(--black-sub)'
            }}>
                <TypeAnimation
                    sequence={[
                        'Hello There!',
                        2000,
                        () => setTextColor('var(--reddish)'),
                        'I\'m Cade Edney!',
                        5000,
                        () => setTextColor('white'),
                        'Scroll down for\nmore info!',
                        5000
                    ]}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                    className={styles.text_wrapper}
                    speed={20}
                />
            </div>
        </div>
    )
}

export default HomePage