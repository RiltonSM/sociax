"use client";

import { useState } from "react"
import NavBar from "@/components/NavBar/NavBar"

import styles from './page.module.scss'
import FormContainer from "@/components/FormContainer/FormContainer"
import ContentPage from "@/components/ContentPage/ContentPage"
import SocialMediaIconButton from "@/components/SocialMediaIconButton/SocialMediaIconButton"
import PlusIcon from "@/assets/icons/plus"
import Dropzone from "@/components/Dropzone/Dropzone"
import EmoticonButton from "@/components/EmoticonButton/EmoticonButton"
import FileInput from "@/components/FileInput/FileInput"
import InstagramIcon from "@/assets/icons/instagram"
import Button from "@/components/Button/Button"
import { SocialMedias } from "@/@types/socialMedias";

export default function Page() {
    const [socialMedias, setSocialMedias] = useState<Array<SocialMedias>>(["instagram", "twitter", "linkedin", "facebook"])
    const [text, setText] = useState<string>("")

    const handleRemoveSocialMedia = (socialMedia: string) => {
        setSocialMedias(socialMedias.filter((media) => media !== socialMedia))
    }

    const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }

    const handleAddEmojiToText = (emojiCode: string) => {
        const sym = emojiCode.split("-");
        const codesArray: number[] = [];
        sym.forEach((el) => codesArray.push(parseInt("0x" + el, 16)));
        const emoji = String.fromCodePoint(...codesArray);

        setText(text + emoji);
    } 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(text)
    }

    return (
        <main className={styles.page}>
            <NavBar />

            <ContentPage>
                <FormContainer>
                    <h1 className={styles.title}>Share your ideas</h1>

                    <hr className={styles.divider}/>

                    <div className={styles.socialMedias}>
                        <span className={styles.socialMedias__label}>Social media selected:</span>

                        <div className={styles.socialMedias__buttons}>
                            { socialMedias.includes("instagram") && <SocialMediaIconButton icon="instagram" onClick={handleRemoveSocialMedia}/> }
                            { socialMedias.includes("twitter") && <SocialMediaIconButton icon="twitter" onClick={handleRemoveSocialMedia}/> }
                            { socialMedias.includes("linkedin") && <SocialMediaIconButton icon="linkedin" onClick={handleRemoveSocialMedia}/> }
                            { socialMedias.includes("facebook") && <SocialMediaIconButton icon="facebook" onClick={handleRemoveSocialMedia}/> }

                            <button className={styles.add}>
                                <PlusIcon />
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        { socialMedias.includes("instagram") && <Dropzone />}

                        <div className={styles.reverseRow}>
                            <span>Max images: 6</span>
                            <InstagramIcon />
                        </div>

                        <div className={styles.inputs}>
                            <textarea 
                                placeholder="¿Write your thoughts?"
                                onChange={handleChangeText}
                                value={text}
                            />
                            <div className={styles.buttonsRow}>
                                <FileInput />
                                <EmoticonButton onSelectEmoji={handleAddEmojiToText}/>
                            </div>
                            
                        </div>
                        <div className={styles.reverseRow}>
                            <span>Max characters: 0/2.200</span>
                            <InstagramIcon />
                        </div>

                        <hr className={`${styles.divider} ${styles.divider}--withoutMarginTop}`}/>

                        <div className={styles.actions}>
                            <Button variant="reverse">Save as Draft</Button>
                            <Button variant="outlined">Schedule</Button>
                            <Button type="submit">Publish Post</Button>
                        </div>
                    </form>

                </FormContainer>
            </ContentPage>
        </main>
    )
}