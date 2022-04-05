import React, { useCallback, useState } from 'react'
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import View from '../Views'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import VideoDetail from '../Views/VideoPlayer/VideoPlayer';

function App(props) {
	return (
		<div {...props}>
			<BrowserRouter>
				<Routes>
				<Route path='/videoplayer' element={<VideoDetail />} />
				<Route
        path="*"
        element={<Navigate to="/view" replace />}
    />
					<Route path='/view/*' element={<View />} />

				</Routes>
			</BrowserRouter>
		</div>
	)
}
export default ThemeDecorator(App);