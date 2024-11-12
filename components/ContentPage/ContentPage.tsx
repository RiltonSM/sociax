import styles from './ContentPage.module.scss'

export default function ContentPage({ children }: { children: React.ReactNode }) {
    return (
        <section className={styles.content}>
            {children}
        </section>
    )
}