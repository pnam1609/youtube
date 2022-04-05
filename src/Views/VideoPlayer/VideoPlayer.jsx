import VideoPlayer from '@enact/sandstone/VideoPlayer';
import { MediaControls } from '@enact/sandstone/MediaPlayer';
import Button from '@enact/sandstone/Button';
import { useSelector } from 'react-redux';
import { useRef } from 'react';

function VideoDetail(props) {
    const videoRef = useRef(null);

    const videoItem = useSelector((state) => state.videoplayer.videoItem);
    return (
        <div {...props}>
            <VideoPlayer title={videoItem?.title} ref={videoRef} onJump={() => console.log("hello back")}>
                <source src={videoItem?.url} type="video/mp4" />
                <infoComponents>
                    {videoItem?.longDescription}
                </infoComponents>
                <MediaControls actionGuideLabel="Press Down Button">
                    <leftComponents><Button backgroundOpacity="translucent" icon="star" /></leftComponents>
                    <rightComponents><Button backgroundOpacity="translucent" icon="notification" /></rightComponents>

                    <Button backgroundOpacity="translucent">Add To Favorites</Button>
                    <Button backgroundOpacity="translucent" icon="search" />
                </MediaControls>
            </VideoPlayer>
        </div>

    )
}
export default VideoDetail