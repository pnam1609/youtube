import React from 'react'
import Item from '@enact/sandstone/Item'
import { Row, Cell } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AutoPlay from './AutoPlay'
import Language from './Language'
import Restrict from './Restrict'
import ResetApp from './ResetApp'
import LinkWithWifi from './LinkWithWifi'
import LinkedDevice from './LinkedDevice'
import Location from './Location'
import Improve from './Improve'
import ClearSearch from './ClearSearch'
import ClearWatch from './ClearWatch'
import Premium from './Premium'

function Setting() {
    let navigate = useNavigate()
    return (
        <Row style={{ height: '100%', padding: 0, marginLeft: 0 }}>
            <Cell size="18%">
                <Scroller style={{ width: 340, borderRight: 'solid 1px #73706a' }} >
                    <h4>Setting</h4>
                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/premium")}>
                        Get Youtube Premium
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/auto-play")}>
                        Auto Play
                    </Item>



                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/restrict")}>
                        Restriced mode
                    </Item>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> Link TV & Phone</p>
                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/wifi")}>
                        Link with wifi
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/code")}>
                        Link with TV code
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/linked-device")}>
                        Linked Devices
                    </Item>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> LANGUAGES & LOCATION</p>
                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/language")}>
                        Languages
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/location")}>
                        Location
                    </Item>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> HISTORY & DATA</p>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/clear-watch")}>
                        Clear watch history
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/clear-search")}>
                        Clear search history
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/resetapp")}>
                        Reset app
                    </Item>

                    <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/improve")}>
                        Improve Youtbe
                    </Item>
                </Scroller>
            </Cell>

            <Cell>
                <Routes>
                    <Route render={() => <Navigate to="/auto-play" />} />
                    <Route path='/auto-play' element={<AutoPlay />} />
                    <Route path='/premium' element={<Premium />} />
                    <Route path='/language' element={<Language />} />
                    <Route path='/restrict' element={<Restrict />} />
                    <Route path='/resetapp' element={<ResetApp />} />
                    <Route path='/wifi' element={<LinkWithWifi />} />
                    <Route path='/linked-device' element={<LinkedDevice />} />
                    <Route path='/location' element={<Location />} />
                    <Route path='/improve' element={<Improve />} />
                    <Route path='/clear-search' element={<ClearSearch />} />
                    <Route path='/clear-watch' element={<ClearWatch />} />
                </Routes>
            </Cell>
        </Row>
    )
}

export default Setting