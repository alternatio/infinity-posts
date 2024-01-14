import style from './Post.module.css'
import { IPost } from '../app/interfaces/posts'
import { memo } from 'react'
import { Link } from "react-router-dom";

interface IPostProps {
	data: IPost
}

export default memo(function Post({ data }: IPostProps) {
	return (
		<div className={style.post}>
			<div className={style.postTop}>
				<span className={style.postTitle}>{data.title}</span>
				<span className={style.postBody}>{data.body}</span>
			</div>
			<Link className={style.link} to={`/post/${data.id}`}>Go</Link>
		</div>
	)
})
