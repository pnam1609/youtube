import React from 'react'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/TopBar'
import RowList from './Home/RowList/RowList'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'

function Views() {
    return (
        <Row style={{ height: '100%' }}>
            <Cell size="20%"><SideBar /></Cell>
            <Cell size="80%">
                <Column>
                <Scroller verticalScrollbar="hidden">
                <div style={{ height: "100vh",width:"95%",float:"right" }}>
                    <RowList />
                    {/* <p>rowlist</p> */}
                </div>

            </Scroller>
                </Column>
            </Cell>
        </Row>
    )
}

export default Views