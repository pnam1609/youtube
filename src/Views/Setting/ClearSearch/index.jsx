import Item from '@enact/sandstone/Item'
import React from 'react'

function ClearSearch() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Clear search history</h1>
            <p>Clear search made while signed out on this device</p>
            <Item centered style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, margin: 50 }}>
                Clear search history
            </Item>
        </div>
    )
}

export default ClearSearch