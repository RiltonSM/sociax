"use client"

import NavBar from "@/components/NavBar/NavBar"
import styles from "./page.module.scss"
import ContentPage from "@/components/ContentPage/ContentPage"
import FormContainer from "@/components/FormContainer/FormContainer"
import SocialMediaAccountButton from "@/components/SocialMediaAccountButton/SocialMediaAccountButton"

export default function ConfigPage() {
    return (
        <main className={styles.page}>
            <NavBar />

            <ContentPage>
                <FormContainer>
                    <h1 className={styles.title}>Configuration</h1>

                    <hr className={styles.divider} />

                    <h2 className={styles.subtitle}>Social Media Accounts</h2>
                    <p className={styles.description}>We may ask for dev and more complicated credentials to connect your account, we’ll provide all neccesary information to do that.</p>

                    <div className={styles.accounts}>
                        <SocialMediaAccountButton icon="instagram" handleClick={() => {}} />
                        <SocialMediaAccountButton icon="twitter" handleClick={() => {}} />
                        <SocialMediaAccountButton icon="linkedin" handleClick={() => {}} />
                        <SocialMediaAccountButton icon="facebook" handleClick={() => {}} />
                    </div>

                    <hr className={styles.divider} />
                </FormContainer>
            </ContentPage>
        </main>
    )
}