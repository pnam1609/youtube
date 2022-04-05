import React, { useCallback, useState } from 'react'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Setting from '../Views/Setting'
import Home from '../Views/Home/Home.jsx'
import VideoPlayer from '../Views/Detail';
import View from '../Views'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
	return (
		<div {...props}>
			<BrowserRouter>
				<Routes>
					<Route path='/*' element={<View />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
export default ThemeDecorator(App);