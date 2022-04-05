import VideoPlayer from '@enact/sandstone/VideoPlayer';
import { MediaControls } from '@enact/sandstone/MediaPlayer';
import Button from '@enact/sandstone/Button';

function VideoDetail(props) {
    return (
        <div {...props}>
            <VideoPlayer title="HI~~~" >
                <source src='https://tue0305.github.io/videos/hotpot/01.mp4' type="video/mp4" />
                <infoComponents>
                    "Hello"
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