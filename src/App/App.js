import React, { useCallback, useState } from 'react'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Setting from '../Views/Setting'
import Home from '../Views/Home/Home.jsx'
import VideoPlayer from '../Views/Detail';
import View from '../Views'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VideoDetail from '../Views/VideoPlayer/VideoPlayer';

function App(props) {
	return (
		<div {...props}>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<View />} />
					<Route path='/videoplayer/*' element={<VideoDetail />} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}
export default ThemeDecorator(App);