import styles from './Checkbox.module.scss'

interface CheckboxProps {
    label: string;
    id: string;
}

export default function Checkbox({ label, id }: CheckboxProps) {
    return (
        <div className={styles.checkboxContainer}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}