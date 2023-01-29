import styles from './index.module.css';
import Card from './Card'

export default () => {
    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <image src='/logo.png' className={styles.logo} alt='logo' />
            </header>
            <div className={styles.grid}>
                
            </div>
        </div>
    )
}