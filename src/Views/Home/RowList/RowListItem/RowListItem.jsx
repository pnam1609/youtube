import Item from '@enact/sandstone/Item';
import ImageItem from '@enact/sandstone/ImageItem';
import kind from '@enact/core/kind';

const SelectionComponent = kind({
  render: () => <div>custom selection component</div>
});
const RowListItem = (props) => {
  return <div {...props}>

    <ImageItem
      selectionComponent={SelectionComponent}
      style={{ width: "500px", height: "500px"}}
      src="https://i.ytimg.com/vi/hA_mbqIPNuA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYE8yiNLeZRjzjT2gjiWAToOPzhw"
      label="Music"
    >
      horizontalScrollbar horizontalScrollbar horizontalScrollbar horizontalScrollbar

    </ImageItem>

  </div>
}
export default RowListItem