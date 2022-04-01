import React from 'react'
import ItemBase from '@enact/sandstone/Item'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'
import { Route } from '@enact/ui/Routable'
import AutoPlay from './AutoPlay'
import Preview from './Preview'
function Setting() {
    return (

        <Row style={{ height: '100%', padding: 0, margin: 0 }}>
            <Scroller style={{ width: 300 }}>
                <Cell size="25%" style={{ borderRight: 'solid 1px #73706a', paddingRight: 10, height: "100vh" }}>
                    <h4>Setting</h4>
                    <ItemBase style={{ fontSize: 16, height: 60, color: 'red' }}>Auto Play</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Preview with sound</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}> Restriced mode</ItemBase>
                    <p style={{ fontSize: 16, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> Link TV & Phone</p>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Link with wifi</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Link with TV code</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Linked Devices</ItemBase>
                    <p style={{ fontSize: 16, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> LANGUAGES & LOCATION</p>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Languages</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Location</ItemBase>
                    <p style={{ fontSize: 16, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> HISTORY & DATA</p>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>History</ItemBase>
                    <ItemBase style={{ fontSize: 16, height: 60 }}>Data</ItemBase>
                </Cell>
            </Scroller>

            <Cell>
                <ItemBase style={{ fontSize: 16, height: 60 }}>test</ItemBase>
                {/* <Column>
                    <Cell size={90} component="header">
                        <h1>HEADER</h1>
                    </Cell>
                    <Cell>
                        <p>Body area</p>
                    </Cell>
                </Column> */}
                {/* <Route path='/auto-play' component={AutoPlay} />
                <Route path='/preview' component={Preview} /> */}
            </Cell>
        </Row>
    )
}

export default Setting