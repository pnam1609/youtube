import { configureStore } from '@reduxjs/toolkit';
import VideoPlayerSlice from '../Views/VideoPlayer/VideoPlayerSlice';

export const store = configureStore({
    reducer: {
        videoplayer: VideoPlayerSlice
    },
});
