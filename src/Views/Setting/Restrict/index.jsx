import Item from '@enact/sandstone/Item'
import React from 'react'
import Icon from '@enact/sandstone/Icon'

function Restrict() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Restrict</h1>
            <p>When Restrict is on, a suggested video will automatically play next</p>
            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", margin: "40px 0 15px 0", borderRadius: 4, position: 'relative' }}>
                On
                <Icon style={{ position: 'absolute', top: -10, right: 0 }}>check</Icon>
            </Item>
            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4 }}>
                Off
            </Item>
        </div>
    )
}

export default Restrict