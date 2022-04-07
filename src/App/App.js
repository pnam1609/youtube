import React from 'react'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import View from '../Views'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VideoDetail from '../Views/VideoPlayer/VideoPlayer';

function App(props) {
	return (
		<div {...props}>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={() => Navigate("/")} />

					<Route path='/videoplayer' element={<VideoDetail />} />
					<Route path='/' element={<View />} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}
export default ThemeDecorator(App);