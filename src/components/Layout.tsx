import {SideBar} from "./SideBar"
import {ReactNode} from 'react';
import '../assets/file.css'

type childrenProps={
	children: ReactNode
}
export const Layout: React.FC<childrenProps>=({children}) => {
	return (
		<div className="layout">
			<div className="side-bar">
				<SideBar />
			</div>
			<div className="children">
				{children}
			</div>
		</div>)
}
