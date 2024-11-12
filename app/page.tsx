'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import heroImg from '@/assets/images/hero.png';
import logoBlack from '@/assets/images/logo-black.png';

import styles from './page.module.scss';
import InputText from '@/components/InputText/InputText';
import Checkbox from '@/components/Checkbox/Checkbox';
import Button from '@/components/Button/Button';

export default function Home() {
  const router = useRouter();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push('/publish');
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <Image src={heroImg} alt="SociaX home page"/>
      </section>

      <section className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleLogin}>
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
              placeholder="Password"
            />

            <div className={styles.options}>
              <Checkbox
                label="Remember account"
                id="remember"
              />

              <Link href="/forgotPassword" className={styles.forgot}>Forgot password?</Link>
            </div>

            <div className={styles.buttons}>
              <Link href="/signup" className={styles.signup}>Create a account</Link>
              <Button>Login</Button>
            </div>
          </div>
        </form>
        

      </section>
    </main>
  );
}
