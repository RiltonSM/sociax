"use client"

import { useState } from "react";
import Image from "next/image";

import NavBarItem from "./NavBarItem/NavBarItem";

import logoWhite from '@/assets/images/logo-white.png';

import styles from './NavBar.module.scss';
import clsx from "clsx";
import MenuIcon from "@/assets/icons/menu";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    
    const classnameMobileContainer = clsx(
        styles['navigation_mobile'],
        isOpen && styles['navigation_mobile--opened']
    )

    const classnameMobile = clsx(
        styles['navList'],
        isOpen && styles['navList--opened']
    )

    return (
        <>
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
            <nav className={classnameMobileContainer}>
                <div className={styles.navigation_mobile__header}>
                    <Image src={logoWhite} alt="SociaX" className={styles.logo}/>

                    <button type="button" onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon />
                    </button>
                </div>
                
                {isOpen && <ul className={classnameMobile}>
                    <NavBarItem href="/publish" label="Publish a post" />
                    <NavBarItem href="/publications" label="Publications" />
                    <NavBarItem href="/calendar" label="Calendar" />
                    <NavBarItem href="/config" label="Configuration" />
                    <NavBarItem href="/account" label="My Account" />
                </ul>}
            </nav>
            
        </>
    )
}