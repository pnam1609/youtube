import Item from '@enact/sandstone/Item'
import React from 'react'

function ClearWatch() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1 >Clear watch history</h1>
            <p style={{ width: 1165, textAlignLast: 'center' }}> Clear video watched while signed out on this device. This will also clear your stories watch history</p>
            <Item centered style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, margin: 50 }}>
                Clear watch history
            </Item>
        </div>
    )
}

export default ClearWatch