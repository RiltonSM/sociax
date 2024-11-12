"use client";

import PictureIcon from "@/assets/icons/picture"
import styles from "./FileInput.module.scss"
import { useRef } from "react"

export default function FileInput() {
    const inputRef =  useRef<HTMLInputElement>(null)

    const handleClick = () => {
        inputRef.current?.click()
    }
    return (
        <div className={styles.container}>
            <input type="file" ref={inputRef}/>
            <button 
                className={styles.button} 
                onClick={handleClick}
                type="button"
            >
                <PictureIcon />
            </button>
        </div>
    )
}