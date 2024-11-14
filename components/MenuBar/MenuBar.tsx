import clsx from 'clsx';
import styles  from './MenuBar.module.scss'
import InfoIcon from '@/assets/icons/info';

interface MenuBarProps {
    itens: Array<"History" | "Drafts">;
    activeItem: string;
    handleClick: (item: "History" | "Drafts") => void
}

export default function MenuBar({ itens, activeItem, handleClick }: MenuBarProps) {
    return (
        <nav className={styles.menuBar}>
            <ul className={styles.menuBar__list}>
                {itens.map((item, index) => {
                    const classname = clsx(
                        styles.menuBar__list__item,
                        activeItem === item && styles['menuBar__list__item--active']
                    )
                    return (
                        <li className={classname} key={index} onClick={() => handleClick(item)}>
                            {item}
                            <div className={styles.menuBar__list__item__icon}>
                                <InfoIcon />
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        </nav>
    )
}