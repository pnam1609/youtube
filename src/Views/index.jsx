import React, { useState } from 'react'
import SideBar from '../Components/SideBar'
import Topbar from '../Components/TopBar'
import RowList from './Home/RowList/RowList'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'
import Setting from './Setting'
import { Route, Routes } from 'react-router-dom'
import Search from './Search/Search'

function View() {
    const [size, setSize] = useState({ width: 100, sizeCell: "4%" })
    return (
        <Row style={{ height: '100%' }}>
            <Cell onFocus={() => setSize({ width: 270, sizeCell: "15%" })} onBlur={() => setSize({ width: 70, sizeCell: "4%" })} size={size.sizeCell}>
                <SideBar sideBarWidth={size.width} />
            </Cell>
            <Cell >
                <Column>
                    
                    <Scroller verticalScrollbar="hidden">
                        <div style={{ height: 900, width: "95%", float: "right", padding: "30px 0px 50px 0px" }}>
                            {/* <Route path='' component={RowList} /> */}
                            <Routes>
                                <Route path='/' element={<RowList />} />
                                <Route path='/setting/*' element={<Setting />} />
                                <Route path='/search/*' element={<Search />} />

                            </Routes>
                            
                        </div>
                    </Scroller> 
                </Column>
            </Cell>
        </Row>
    )
}

export default View