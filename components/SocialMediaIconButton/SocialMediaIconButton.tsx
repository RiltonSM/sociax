import styles from './SocialMediaIconButton.module.scss'
import instagram from '@/assets/icons/instagram'
import twitter from '@/assets/icons/twitter'
import linkedin from '@/assets/icons/linkedin'
import facebook from '@/assets/icons/facebook'
import CloseIcon from '@/assets/icons/close'
import { SocialMedias } from '@/@types/socialMedias'

interface SocialMediaIconButtonProps {
    icon: SocialMedias
    onClick: (socialMedia: SocialMedias) => void
}

export default function SocialMediaIconButton({ icon, onClick }: SocialMediaIconButtonProps) {
    const iconOptions = {
        instagram,
        twitter,
        linkedin,
        facebook
    }
    const Icon = iconOptions[icon]
    return (
        <div className={icon === "instagram" ? `${styles.container} ${styles['container--instagram']}` : styles.container}>
            <Icon />
            <button className={styles.remove} onClick={() => onClick(icon)}>
                <CloseIcon />
            </button>
        </div>
    )
}