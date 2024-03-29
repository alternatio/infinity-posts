import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from '../pages/Layout'
import PostDetail from "../pages/PostDetail";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/post/:postId' element={<PostDetail />} /> {/* Add this line */}
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
