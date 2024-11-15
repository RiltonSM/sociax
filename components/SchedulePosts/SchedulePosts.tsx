import { format } from 'date-fns'
import Post from '../Post/Post';
import DateSeparator from './DateSeparator/DateSeparator';

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

    return (
        <div>
           {generatePosts()}
        </div>
    )
}