import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "reverse" | "outlined";
}

export default function Button({ variant, ...props}: ButtonProps) {
    return (
        <button className={variant ? `${styles.button} ${styles[`button--${variant}`]}`: styles.button} {...props}>
            {props.children}
        </button>
    );
}