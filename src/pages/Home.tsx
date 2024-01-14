import { useGetPostsQuery } from '../shared/store/api'
import { useCallback, useEffect, useState } from 'react'
import { IPosts } from '../app/interfaces/posts'
import style from '../app/styles/Home.module.css'
import Post from '../entities/Post'
import { scrollEvent } from '../features/infinityPosts'
import { isEqual, throttle } from 'lodash'

export default function Home() {
	const [postsData, setPostsData] = useState<IPosts>([])
	const [start, setStart] = useState(0)
	const [hasMorePosts, setHasMorePosts] = useState(true) // New state to track if there are more posts

	// get data
	const {
		data: posts,
		isFetching: postsIsLoading,
		error: postsIsError,
	} = useGetPostsQuery({ start }, { refetchOnMountOrArgChange: true })

	// setter in local
	useEffect(() => {
		if (!posts || isEqual(posts, postsData)) return

		setPostsData(prev => prev.concat(posts))
	}, [posts])

	// handle scrolling
	const handleScroll = useCallback(
		throttle(() => {
			if (hasMorePosts) scrollEvent(setStart)
		}, 300),
		[hasMorePosts]
	)

	// event listeners
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])

	// check if there are more posts
	useEffect(() => {
		if (posts && posts.length === 0) setHasMorePosts(false)
	}, [posts])

	return (
		<div className={style.wrapper}>
			{postsData.map((post, index) => {
				return <Post key={`${post.userId}_${post.id}_${index}`} data={post} />
			})}
			{postsIsLoading ? <span>Loading...</span> : null}
			{postsIsError ? <span>ERROR! in fetch posts data</span> : null}
		</div>
	)
}
