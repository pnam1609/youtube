import React from 'react'
import Item from '@enact/sandstone/Item'
import { Row, Cell } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import AutoPlay from './AutoPlay'
import Preview from './Preview'
import styles from './index.module.css'
import Language from './Language'
import Restrict from './Restrict'
import ResetApp from './ResetApp'

function Setting() {
    let navigate = useNavigate()
    return (
        <Row style={{ height: '100%', padding: 0, marginLeft: 0 }}>
            <Cell size="18%">
                <Scroller style={{ width: 340, borderRight: 'solid 1px #73706a' }} >
                    <h4>Setting</h4>
                    <Link to="auto-play" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/auto-play")}>
                            Auto Play
                        </Item>
                    </Link>

                    <Link to="preview" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/preview")}>
                            Preview with sound
                        </Item>
                    </Link>

                    <Link to="restrict" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/restrict")}>
                            Restriced mode
                        </Item>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> Link TV & Phone</p>
                    <Link to="wifi" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/wifi")}>
                            Link with wifi
                        </Item>
                    </Link>

                    <Link to="code" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/code")}>
                            Link with TV code
                        </Item>
                    </Link>

                    <Link to="device" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/device")}>
                            Linked Devices
                        </Item>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> LANGUAGES & LOCATION</p>
                    <Link to="language" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/language")}>
                            Languages
                        </Item>
                    </Link>

                    <Link to="location" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/location")}>
                            Location
                        </Item>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> HISTORY & DATA</p>

                    <Link to="clear-watch" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/clear-watch")}>
                            Clear watch history
                        </Item>
                    </Link>

                    <Link to="clear-search" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/clear-search")}>
                            Clear search history
                        </Item>
                    </Link>

                    <Link to="resetapp" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/resetapp")}>
                            Reset app
                        </Item>
                    </Link>

                    <Link to="improve-youtube" className={styles.styleNone}>
                        <Item style={{ fontSize: 20, height: 60 }} onClick={() => navigate("/view/setting/improve-youtube")}>
                            Improve Youtbe
                        </Item>
                    </Link>
                </Scroller>
            </Cell>

            <Cell>
                <Routes>
                    <Route render={() => <Navigate to="/auto-play" />} />
                    <Route path='/auto-play' element={<AutoPlay />} />
                    <Route path='/preview' element={<Preview />} />
                    <Route path='/language' element={<Language />} />
                    <Route path='/restrict' element={<Restrict />} />
                    <Route path='/resetapp' element={<ResetApp />} />
                </Routes>
            </Cell>
        </Row>
    )
}

export default Setting