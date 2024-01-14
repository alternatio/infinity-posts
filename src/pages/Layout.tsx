import { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

interface ILayoutProps {
	children?: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
	return (
		<>
			<div>{children}</div>
			<Outlet />
		</>
	)
}
