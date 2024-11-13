import clsx from "clsx";

import { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "reverse" | "outlined";
    color?: "gray";
}

export default function Button({ variant, color, ...props}: ButtonProps) {
    console.log(variant, color)
    const className = clsx(
        styles.button,
        variant && styles[`button--${variant}`],
        color && styles[`button--${color}`]
    )
    return (
        <button className={className} {...props}>
            {props.children}
        </button>
    );
}