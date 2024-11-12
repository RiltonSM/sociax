'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from './NavBarItem.module.scss';

interface NavBarItemProps {
    href: string;
    label: string;
}

export default function NavBarItem({ href, label }: NavBarItemProps) {
    const pathname = usePathname();
    return (
        <li className={pathname.startsWith(href) ? `${styles.navBarItem} ${styles.navBarItem}--active` : `${styles.navBarItem}`}>
            <Link href={href}>{label}</Link>

            <div className={pathname.startsWith(href) ? `${styles.circle} ${styles.circle}--active` : `${styles.circle}`}/>
        </li>
    )
}