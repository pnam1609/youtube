import Item from '@enact/sandstone/Item'
import React from 'react'

function Premium() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: "100%", height: "100%", flexDirection: "column" }}>
            <h1>Get Youtube Premium</h1>
            <p style={{ width: 1200, textAlignLast: 'center' }}>Watch and listen offline, in the background, and without ad interruptions on Youtube and the Youtube Music app</p>
            <Item centered style={{ width: 650, height: 70, backgroundColor: "#343536", borderRadius: 4, margin: 50 }}>
            Get Youtube Premium
            </Item>
        </div>
    )
}

export default Premium