"use client";

import { useState } from "react";
import Picker from "@emoji-mart/react";
import data from '@emoji-mart/data';

import SmileIcon from "@/assets/icons/smile";

import styles from './EmoticonButton.module.scss'

interface Emoji {
    id: string;
    name: string;
    unified: string;
}

interface EmoticonButtonProps {
    onSelectEmoji: (emoji: string) => void;
}

export default function EmoticonButton({ onSelectEmoji}: EmoticonButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (emoji: Emoji) => {
        console.log(emoji)
        onSelectEmoji(emoji.unified)
    }

    return (
        <div className={styles.container}>
            { isOpen && <Picker 
                onOpenChange={(open: boolean) => setIsOpen(open)}
                onEmojiSelect={handleClick} 
                data={data}
                theme="light"
                maxFrequentRows={0}
                previewPosition="none"
                onClickOutside={() => setIsOpen(false)}
            />}

            <button 
                className={styles.button} 
                onClick={() => setIsOpen(!isOpen)}
                type="button"
            >
                <SmileIcon />
            </button>
        </div>    
        
    )
}