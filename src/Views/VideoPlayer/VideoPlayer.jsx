import VideoPlayer from '@enact/sandstone/VideoPlayer';
import { MediaControls } from '@enact/sandstone/MediaPlayer';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import VideoItemList from './VideoItemList';

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
                    <div style={{display:"flex", justifyContent:"space-around"}}>
                    <VideoItemList thumbnail={videoItem?.thumbnail} title={videoItem?.title}/>
                  <VideoItemList thumbnail={videoItem?.thumbnail} title={videoItem?.title}/>
                  <VideoItemList thumbnail={videoItem?.thumbnail} title={videoItem?.title}/>
                    </div>
                </MediaControls>
            </VideoPlayer>
        </div>

    )
}
export default VideoDetail