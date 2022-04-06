import ImageItem from '@enact/sandstone/ImageItem';

const VideoItemList = (props) => {

  return <div {...props}>
    <ImageItem
      style={{ width: "200px", height: "200px" }}
      src={props.thumbnail}
      label={props.title}
      // onClick={props.onClick}
    >
      {/* {props.longDescription} */}
    </ImageItem>

  </div>
}
export default VideoItemList