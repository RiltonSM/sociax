"use client"

import clsx from 'clsx'
import styles from './SocialMediaAccountButton.module.scss'
import instagram from '@/assets/icons/instagram'
import twitter from '@/assets/icons/twitter'
import linkedin from '@/assets/icons/linkedin'
import facebook from '@/assets/icons/facebook'
import { SocialMedias } from '@/@types/socialMedias'

interface SocialMediaIconButtonProps {
    icon: SocialMedias
    handleClick: (socialMedia: SocialMedias) => void
}

export default function SocialMediaAccountButton({ icon, handleClick }: SocialMediaIconButtonProps) {
    const iconOptions = {
        instagram,
        twitter,
        linkedin,
        facebook
    }
    const Icon = iconOptions[icon]

    const classname = clsx(
        styles.container,
        icon === "instagram" && styles['container--instagram']
    )

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <button 
            className={classname}
            onClick={() => handleClick(icon)}
        >
            <Icon />
            <span>Connect to {capitalizeFirstLetter(icon)}</span>
        </button>
    )
}