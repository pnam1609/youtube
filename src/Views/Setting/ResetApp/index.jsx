import Item from '@enact/sandstone/Item'
import React from 'react'
import Icon from '@enact/sandstone/Icon'

function ResetApp() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>ResetApp</h1>
            <p>Clear your setting including connected devices and accounts</p>
            <Item centered style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, margin: 50 }}>
                Reset app
            </Item>
        </div>
    )
}

export default ResetApp