import ImageItem from '@enact/sandstone/ImageItem'
import React from 'react'


function SearchItem(props) {
  return (
    <div>
        <ImageItem
            style={{ width: "500px", height: "500px" }}
            src={props.thumbnail}
            label={props.longDescription}
        >
            {props.title}
        </ImageItem>
    </div>
  )
}

export default SearchItem