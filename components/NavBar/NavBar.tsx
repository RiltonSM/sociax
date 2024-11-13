import Image from "next/image";

import NavBarItem from "./NavBarItem/NavBarItem";

import logoWhite from '@/assets/images/logo-white.png';

import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <nav className={styles.navigation}>
            <Image src={logoWhite} alt="SociaX" className={styles.logo}/>
            <ul className={styles.navList}>
                <NavBarItem href="/publish" label="Publish a post" />
                <NavBarItem href="/publications" label="Publications" />
                <NavBarItem href="/calendar" label="Calendar" />
                <NavBarItem href="/config" label="Configuration" />
                <NavBarItem href="/account" label="My Account" />
            </ul>
        </nav>
    )
}