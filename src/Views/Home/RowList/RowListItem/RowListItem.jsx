import ImageItem from '@enact/sandstone/ImageItem';
import style from './index.module.less'
import Spotlight from '@enact/spotlight'
import Button from '@enact/sandstone/Button'

const RowListItem = (props) => {

  const handleSpotlightDown = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    // Spotlight.focus('[data-component-id="myButton"]');
    console.log(e)
  }

  return <div {...props}>
    <ImageItem
      style={{ width: "500px", height: "500px" }}
      src={props.thumbnail}
      label={props.title}
      onClick={props.onClick}
      // className={style.spottable}
      onSpotlightDown={handleSpotlightDown}
    >
      <Button data-component-id='myButton'>Source Button</Button>
      {props.longdescription}
    </ImageItem>

  </div>
}
export default RowListItem