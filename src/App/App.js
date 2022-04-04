import React, { useCallback, useState } from 'react'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Setting from '../Views/Setting'
import { Route, Routable, Link } from '@enact/ui/Routable'
import Home from '../Views/Home/Home.jsx'
import VideoPlayer from '../Views/Detail';
// import View from '../Views'

const Views = Routable({ navigate: 'onNavigate' }, ({ children }) => <div>{children}</div>);

function App(props) {
	const [path, nav] = useState('main');
	// if onNavigate is called with a new path, update the state
	const handleNavigate = useCallback((ev) => nav(ev.path), [nav]);
	return (
		<div {...props}>
			{/* <Views path={path} onNavigate={handleNavigate}>
				<Route path="main" component={Home}>
					<Route path='setting' component={Setting} />
				</Route>
			</Views> */}
			<VideoPlayer />
			{/* <Setting /> */}
		</div>
	)
}
export default ThemeDecorator(App);