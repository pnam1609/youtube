import React from 'react'
import Item from '@enact/sandstone/Item'
import Icon from '@enact/sandstone/Icon'

function Language() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Language</h1>
            <p style={{ width: 1200, textAlignLast: 'center' }}>This changes the language of the app. Videos remain in their original language unless creator provide translation.</p>
            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", margin: "40px 0 15px 0", borderRadius: 4 }}>
                Language: English (US)
                <Icon style={{ position: 'absolute', top: -10, right: 0 }}>edit</Icon>
            </Item>
        </div>
    )
}

export default Language