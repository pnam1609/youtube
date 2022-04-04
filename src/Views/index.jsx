import React, { useEffect, useLayoutEffect, useState } from 'react'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/TopBar'
import RowList from './Home/RowList/RowList'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'

function Views() {
  const [size, setSize] = useState({width:100,sizeCell:"8%"})
    return (
        <Row  style={{ height: '100%' }}>
            <Cell onFocus={()=>setSize({width:250, sizeCell:"12%"})} onBlur={()=>setSize({width:70, sizeCell:"2%"})} size={size.sizeCell}>
              <SideBar sideBarWidth={size.width}/>
              </Cell>
            <Cell >
                <Column>
                <Scroller verticalScrollbar="hidden">
                <div className='abc' style={{ height: "100vh",width:"95%",float:"right" }}>
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