"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBar from '@/components/NavBar/NavBar'
import ContentPage from '@/components/ContentPage/ContentPage'
import FormContainer from '@/components/FormContainer/FormContainer'
import MenuBar from '@/components/MenuBar/MenuBar'
import Post from '@/components/Post/Post'

import PlusIcon from '@/assets/icons/plus'
import publicationImg from '@/assets/images/publication.png' 

import styles from './page.module.scss'
import DraftedPost from '@/components/DraftedPost/DraftedPost'

const mockedPosts = [
    {
        date: "14:00PM - 12/01/2023",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
    {
        date: "14:00PM - 12/01/2023",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
    {
        date: "14:00PM - 12/01/2023",
        text: "Est nam iaculis cras dictumst. Ultrices nisl accumsan aliquam fringilla ut tortor urna semper vulputate. Faucibus.",
        socials: ["instagram", "twitter", "linkedin", "facebook"]
    },
]

export default function PublicationsPage() {
    const [selectedTab, setSelectedTab] = useState("History")

    const handleTabClick = (tab: "History" | "Drafts") => {
        setSelectedTab(tab)
    }

    return (
        <main className={styles.page}>
            <NavBar />

            <ContentPage>
                <FormContainer>
                    <h1 className={styles.title}>Publications</h1>

                    <hr className={styles.divider} />

                    <MenuBar 
                        activeItem={selectedTab} 
                        itens={["History", "Drafts"]} 
                        handleClick={handleTabClick}
                    />

                    <div className={styles.posts}>
                        <Link href="/publish" className={styles.createPublication}>
                            <span>Create a publication</span>

                            <PlusIcon />
                        </Link>

                        { selectedTab === "Drafts" && <>
                            <div className={styles.noPosts}>
                                <Image src={publicationImg} alt="No Publications" />
                                <h2 className={styles.noPosts__title}>No drafts saved.</h2>
                                <p className={styles.noPosts__description}>We couldn’t found any drafts.</p>
                            </div>

                            {mockedPosts.map((post, index) => (
                                <DraftedPost 
                                    {...post} 
                                    key={index} 
                                />
                            ))}
                        </>}

                        { selectedTab === "History" && <>
                            <div className={styles.noPosts}>
                                <Image src={publicationImg} alt="No Publications" />
                                <h2 className={styles.noPosts__title}>No publications created.</h2>
                                <p className={styles.noPosts__description}>We couldn’t found any post, in order to see the history, please create publciations by using  SocialX</p>
                            </div>

                            {mockedPosts.map((post, index) => (
                                <Post 
                                    {...post} 
                                    key={index} 
                                />
                            ))}
                        </>}
                    </div>
                </FormContainer>
            </ContentPage>
        </main>
    )
}