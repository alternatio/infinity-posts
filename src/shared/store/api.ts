import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost, IPosts } from "../../app/interfaces/posts";

export const postsApi = createApi({
	reducerPath: 'postsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com',
	}),
	endpoints: builder => ({
		getPosts: builder.query<IPosts, { start?: number, limit?: number }>({
			query: ({ start = 0, limit = 10 }) => ({
				url: `/posts`,
				params: {
					_limit: limit,
					_start: start,
				},
			}),
		}),
		getPost: builder.query<IPost, { id?: number }>({
			query: ({ id = 0 }) => ({
				url: `/posts/${id}`
			})
		})
	}),
})

export const { useGetPostsQuery, useGetPostQuery } = postsApi
export type TPostApi = typeof postsApi.reducer
