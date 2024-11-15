import NavBar from "@/components/NavBar/NavBar";
import styles from "./page.module.scss";
import ContentPage from "@/components/ContentPage/ContentPage";
import FormContainer from "@/components/FormContainer/FormContainer";
import PlusIcon from "@/assets/icons/plus";
import Link from "next/link";
import SchedulePosts from "@/components/SchedulePosts/SchedulePosts";

const mockedPosts = [
    {
        date: "2024-11-15T14:00:00.000Z",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
    {
        date: "2024-11-15T14:00:00.000Z",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
    {
        date: "2024-11-16T14:00:00.000Z",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
    {
        date: "2024-11-17T14:00:00.000Z",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    }
]
export default function Page() {
    return (
        <main className={styles.page}>
            <NavBar />

            <ContentPage>
                <FormContainer>
                    <h1 className={styles.title}>Calendar</h1>

                    <hr className={styles.divider} />

                    <p className={styles.description}>Visualize all the publications schedule to automatic publications on the following days:</p>

                    <Link href="/publish" className={styles.schedule_button}>
                        <span>Schedule  a publication</span>
                        <PlusIcon />
                    </Link>

                    <div className={styles.schedule_posts}>
                        <SchedulePosts posts={mockedPosts} />
                    </div>
                </FormContainer>
            </ContentPage>
        </main>
    );
}