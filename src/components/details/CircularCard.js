import styles from '../../styles/about.module.css'

const CircularCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.front} />
                <div className={styles.back} />
            </div>
        </div>
    )
}

export default CircularCard