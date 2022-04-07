import ImageItem from '@enact/sandstone/ImageItem';

const RowListItem = (props) => {

  return <div {...props}>
    <ImageItem
      style={{ width: "500px", height: "500px" }}
      src={props.thumbnail}
      label={props.title}
      onClick={props.onClick}
    >
      {props.longdescription}
    </ImageItem>

  </div>
}
export default RowListItem