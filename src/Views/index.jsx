import React from 'react'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/TopBar'
import RowList from './Home/RowList/RowList'
import { Row, Cell, Column } from '@enact/ui/Layout'

function Views() {
    return (
        <Row style={{ height: '100%' }}>
            <Cell size="20%"><SideBar /></Cell>
            <Cell>
                <Column>
                    <RowList />
                </Column>
            </Cell>
        </Row>
    )
}

export default Views