import { configureStore } from '@reduxjs/toolkit';
import path from '../Views/path.slice'

export const store = configureStore({
    reducer: {
        path
    },
});
