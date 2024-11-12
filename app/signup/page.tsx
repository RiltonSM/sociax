import Image from 'next/image';
import Link from 'next/link';

import heroImg from '@/assets/images/hero.png';
import logoBlack from '@/assets/images/logo-black.png';

import InputText from '@/components/InputText/InputText';
import Button from '@/components/Button/Button';

import styles from './page.module.scss';

export default function Page() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image src={heroImg} alt="SociaX home page"/>
      </section>

      <section className={styles.formContainer}>
        <form className={styles.form}>
            <Image src={logoBlack} alt="SociaX"/>

            <hr className={styles.divider}/>

            <div className={styles.textContainer}>
                <h2 className={styles.title}>It’s time to keep your social accounts updated at once</h2>
                <p className={styles.description}>We accelerate the posting procces for creating posts.</p>
            </div>

            <div className={styles.inputs}>
                <InputText
                    type="text"
                    placeholder="Username"
                />

                <InputText
                    type="text"
                    placeholder="Email"
                />

                <InputText
                    type="text"
                    placeholder="Password"
                />
            </div>

            <div className={styles.buttons}>
                <Link href="/" className={styles.signup}>Already have an account? Log in</Link>
                <Button type='button'>Register</Button>
            </div>
        </form>
        

      </section>
    </main>
    )
}