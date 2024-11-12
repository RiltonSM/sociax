import styles from './FormContainer.module.scss'

export default function FormContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.formContainer}>
            {children}
        </div>
    )
}