import styles from './Avatar.module.scss';

export default function Avatar() {
    return (
        <div className={styles.avatar}>
            <div className={styles.avatar__circle}>
                JD
            </div>
            <div className={styles.avatar__info}>
                <p className={styles.avatar__info__name}>John Doe</p>
                <p className={styles.avatar__info__email}>4E7nG@example.com</p>
            </div>
        </div>
    )
}