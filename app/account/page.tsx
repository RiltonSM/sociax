import FormContainer from "@/components/FormContainer/FormContainer";
import NavBar from "@/components/NavBar/NavBar";
import ContentPage from "@/components/ContentPage/ContentPage";

import styles from './page.module.scss'
import Avatar from "@/components/Avatar/Avatar";
import Button from "@/components/Button/Button";

export default function AccountPage() {
    return (
        <main className={styles.page}>
            <NavBar />

            <ContentPage>
                <FormContainer>
                    <h1 className={styles.title}>My Account</h1>

                    <hr className={styles.divider} />

                    <Avatar />

                    <div className={styles.actions}>
                        <Button variant="outlined">Log out</Button>
                        <Button variant="outlined" color="gray">Erase all data from account</Button>
                    </div>
                </FormContainer>
            </ContentPage>
        </main>
    )
}