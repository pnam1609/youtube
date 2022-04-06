import Item from '@enact/sandstone/Item'
import React from 'react'
import Icon from '@enact/sandstone/Icon'

function Improve() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Improve Youtube</h1>
            <p>Help improve Youtube by sending anonymus using data</p>
            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, margin: "40px 0 15px 0" }}>
                On
            </Item>

            <Item style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, position: 'relative' }}>
                Off
                <Icon style={{ position: 'absolute', top: -10, right: 0 }}>check</Icon>
            </Item>
        </div>
    )
}

export default Improve