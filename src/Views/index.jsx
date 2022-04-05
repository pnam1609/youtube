import React, { useEffect, useLayoutEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/TopBar'
import RowList from './Home/RowList/RowList'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'

function Views() {
    const [size, setSize] = useState({ width: 100, sizeCell: "4%" })
    return (
        <Row style={{ height: '100%' }}>
            <Cell onFocus={() => setSize({ width: 250, sizeCell: "14%" })} onBlur={() => setSize({ width: 70, sizeCell: "4%" })} size={size.sizeCell}>
                <SideBar sideBarWidth={size.width} />
            </Cell>
            <Cell >
                <Column>
                    <Topbar />
                    <Scroller verticalScrollbar="hidden">
                        <div style={{ height: "100vh", width: "95%", float: "right" }}>
                            <RowList />
                        </div>
                    </Scroller>
                </Column>
            </Cell>
        </Row>
    )
}

export default Views