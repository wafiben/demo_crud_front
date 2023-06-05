import {Children} from 'react';
import {SideBar} from './components/SideBar';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Layout} from './components/Layout';
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";



function App() {
	const router=createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Layout>
						<Home />
					</Layout>
				</>
			),
		},
		{
			path: "about",
			element: (
				<>
					<Layout>
						<About />
					</Layout>
				</>
			),
		},
	]);
	return (
		<div>
			<RouterProvider router={router} />
		</div>

	);
}

export default App;
