import Image from 'next/image';

import { format } from 'date-fns'
import Post from '../Post/Post';
import DateSeparator from './DateSeparator/DateSeparator';

import calendarImg from '@/assets/images/calendar.png'

import styles from './SchedulePosts.module.scss'

interface SchedulePostsProps {
    posts: Array<Post>
}

interface SchedulePosts {
    [key: string]: Array<Post>
}

export default function SchedulePosts({ posts }: SchedulePostsProps) {
    const schedulePosts: SchedulePosts = {};
    posts.forEach((post) => {
        const postDate = format(new Date(post.date), 'yyyy-MM-dd')
        schedulePosts[postDate] = schedulePosts[postDate] ? [...schedulePosts[postDate], post] : [post];
    })

    const generatePosts = () => {
        const componentsToRender: JSX.Element[] = [];
        Object.keys(schedulePosts).map((date) => {
            componentsToRender.push(<DateSeparator date={date} key={date}/>)
            schedulePosts[date].forEach((post, index) => {
                componentsToRender.push(
                    <Post date={post.date} text={post.text} socials={post.socials} key={`${date}-${index}`}/>
                )
            })
        })

        return componentsToRender
    }

    if (posts.length === 0) {
        return (
            <div className={styles.no_schedule_posts}>
                <Image src={calendarImg} alt="Calendar" />
                <h2 className={styles.no_schedule_posts__title}>No posts scheduled</h2>
                <p className={styles.no_schedule_posts__description}>We couldn’t found any publications schedule, refresh or try again later.</p>
            </div>
        )
    }

    return (
        <div>
           {generatePosts()}
        </div>
    )
}