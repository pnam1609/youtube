import React, { useRef } from 'react'
import VideoPlayer, { MediaControls } from '@enact/sandstone/VideoPlayer'
import Button from '@enact/sandstone/Button'

function VideoPlayers() {
    const video = useRef()
    setTimeout(() => {
        video.current.hideControls()
    }, 2000);
    return (
        <VideoPlayer ref={video} title="Hilarious Cat Video" poster="http://my.cat.videos/boots-poster.jpg">
            <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
            {/* <infoComponents>A video about my cat Boots, wearing boots.</infoComponents> */}
            {/* <MediaControls>
                <Button backgroundOpacity="translucent" icon="star" />
                <Button backgroundOpacity="translucent" icon="notification" />
                <Button backgroundOpacity="translucent">Add To Favorites</Button> 
                 <Button backgroundOpacity="translucent" icon="search" />
            </MediaControls> */}
        </VideoPlayer>
    )
}

export default VideoPlayers