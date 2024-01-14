import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { postsApi, TPostApi } from "./api";
import { IPosts } from "../../app/interfaces/posts";

interface IRootReducer {
	posts: IPosts
	[postsApi.reducerPath]: TPostApi
}

const rootReducer = combineReducers<IRootReducer>({
	posts: [],
	[postsApi.reducerPath]: postsApi.reducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(postsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
