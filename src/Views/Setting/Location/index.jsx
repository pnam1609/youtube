import React from 'react'
import Item from '@enact/sandstone/Item'
import Icon from '@enact/sandstone/Icon'

function Location() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Location</h1>
            <p style={{ width: 1200, textAlignLast: 'center' }}>This may influence the videos and channels recommended to you. It's won change the language of the app.</p>
            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", margin: "40px 0 15px 0", borderRadius: 4 }}>
                Location: USA
                <Icon style={{ position: 'absolute', top: -10, right: 0 }}>edit</Icon>
            </Item>
        </div>
    )
}

export default Location