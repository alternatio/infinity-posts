import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from '../shared/store/api'
import style from '../app/styles/PostDetail.module.css'
import BackImage from "../assets/backImage";

export default function PostDetail() {
	const { postId } = useParams()

	const {
		data: post,
		isFetching: postIsLoading,
		error: postIsError,
	} = useGetPostQuery({ id: Number(postId) })

	return (
		<div className={style.wrapper}>
			<div className={style.innerWrapper}>
				<div className={style.postTop}>
					<Link className={style.backLink} to={'/'}>
						<BackImage />
					</Link>
				</div>

				<h2 className={style.postTitle}>{post?.title}</h2>
				<p className={style.postBody}>{post?.body}</p>

				{postIsLoading ? <span>Loading...</span> : null}
				{postIsError ? <span>Error fetching post data</span> : null}
			</div>
		</div>
	)
}
