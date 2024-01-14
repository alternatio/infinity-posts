import { SetStateAction, Dispatch } from 'react'

export function scrollEvent(setStart: Dispatch<SetStateAction<number>>) {
	const scroll = window.scrollY
	const windowHeight = window.innerHeight
	const documentHeight = document.documentElement.scrollHeight

	if (windowHeight + scroll >= documentHeight - 100) {
		setStart(prev => prev + 5)
	}
}
