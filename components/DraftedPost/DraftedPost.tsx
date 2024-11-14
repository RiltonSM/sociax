import PictureIcon from '@/assets/icons/picture'
import InstagramIcon from '@/assets/icons/instagram'
import TwitterIcon from '@/assets/icons/twitter'
import LinkedinIcon from '@/assets/icons/linkedin'
import FacebookIcon from '@/assets/icons/facebook'

import styles from './DraftedPost.module.scss'
import ChevronRightIcon from '@/assets/icons/chevron-right'

interface DraftedPostProps {
    date: string
    text: string
    socials: string[]
}

export default function DraftedPost({ date, text, socials }: DraftedPostProps) {
    return (
        <div className={styles.draftedPost}>
            <span className={styles.draftedPost__date}>{date}</span>

            <p className={styles.draftedPost__text}>
                {text}
            </p>

            <div className={styles.draftedPost__actions}>
                <div className={styles.draftedPost__actions__row}>
                    <PictureIcon />
                    <span>Contain Images</span>
                </div>

                
                <div className={styles.draftedPost__socials}>
                    { socials.includes("instagram") && <InstagramIcon />}
                    { socials.includes("twitter") && <TwitterIcon />}
                    { socials.includes("linkedin") && <LinkedinIcon />}
                    { socials.includes("facebook") && <FacebookIcon />}
                </div>
            </div>

            <button className={styles.draftedPost__continue}>
                <span className={styles.draftedPost__continue__text}>Continue Publication</span>

                <ChevronRightIcon />
            </button>

            <p className={styles.draftedPost__expiredInfo}>The drafts have a duration of 48 hours. Then will be deleted.</p>

        </div>
    )
}