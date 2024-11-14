import PictureIcon from '@/assets/icons/picture'
import FolderIcon from '@/assets/icons/folder'
import styles from './Post.module.scss'
import InstagramIcon from '@/assets/icons/instagram'
import TwitterIcon from '@/assets/icons/twitter'
import LinkedinIcon from '@/assets/icons/linkedin'
import FacebookIcon from '@/assets/icons/facebook'

interface PostProps {
    date: string
    text: string
    socials: string[]
}

export default function Post({ date, text, socials }: PostProps) {
    return (
        <div className={styles.post}>
            <span className={styles.post__date}>{date}</span>

            <p className={styles.post__text}>
                {text}
            </p>

            <div className={styles.post__actions}>
                <div className={styles.post__actions__row}>
                    <PictureIcon />
                    <span>Contain Images</span>
                </div>

                <div className={styles.post__actions__row}>
                    <span>See Post</span>
                    <FolderIcon />
                </div>
            </div>

            <div className={styles.post__socials}>
                { socials.includes("instagram") && <InstagramIcon />}
                { socials.includes("twitter") && <TwitterIcon />}
                { socials.includes("linkedin") && <LinkedinIcon />}
                { socials.includes("facebook") && <FacebookIcon />}
            </div>
        </div>
    )
}