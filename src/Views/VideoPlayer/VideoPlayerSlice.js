import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    videoItem:{}
 }

const videoPlayer = createSlice({
  name: 'videoplayer',
  initialState,
  reducers: {
    setVideoItem(state,action) {
      state.videoItem = action.payload
    }
  },
})

export const { setVideoItem } = videoPlayer.actions
export default videoPlayer.reducer