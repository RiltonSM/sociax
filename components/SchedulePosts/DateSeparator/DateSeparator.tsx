import { isToday, isTomorrow, format,  } from 'date-fns';
import { TZDate } from '@date-fns/tz'

import styles from "./DateSeparator.module.scss"

interface DateSeparatorProps {
    date: string
}

export default function DateSeparator({ date }: DateSeparatorProps) {
    const handleTextToShow = () => {
        const [year, month, day] = date.split("-")
        const dateParsed = new TZDate(Number(year), Number(month) - 1, Number(day), "America/Sao_Paulo")
        if (isToday(dateParsed, { })) {
            return "Today"
        } else if (isTomorrow(dateParsed)) {
            return "Tomorrow"
        } else {
            return format(dateParsed, "dd/MM/yyyy")
        }
    }

    return (
        <div className={styles.dateSeparator}>
            <span className={styles.dateSeparator__text}>{handleTextToShow()}</span>
            <hr className={styles.dateSeparator__line}/>
        </div>
    )
}