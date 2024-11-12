import { InputHTMLAttributes } from "react";
import styles from "./InputText.module.scss";

export default function InputText(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input 
            className={styles.input} 
            {...props}
        />
    )
}