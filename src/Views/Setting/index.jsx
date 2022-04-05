import React from 'react'
import ItemBase from '@enact/sandstone/Item'
import { Row, Cell } from '@enact/ui/Layout'
import Scroller from '@enact/sandstone/Scroller'
import { Link, Route, Routes } from 'react-router-dom'
import AutoPlay from './AutoPlay'
import Preview from './Preview'
import styles from './index.module.css'

function Setting() {
    return (

        <Row style={{ height: '100%', padding: 0, marginLeft: 50 }}>
            <Scroller style={{ width: 340, borderRight: 'solid 1px #73706a', }} >
                <Cell style={{ borderRight: 'solid 1px #73706a', paddingRight: 10, height: "100vh" }}>
                    <h4>Setting</h4>
                    <Link to="auto-play" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Auto Play
                        </ItemBase>
                    </Link>

                    <Link to="/preview" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Preview with sound
                        </ItemBase>
                    </Link>

                    <Link to="/restriced" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Restriced mode
                        </ItemBase>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> Link TV & Phone</p>
                    <Link to="/wifi" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Link with wifi
                        </ItemBase>
                    </Link>

                    <Link to="/code" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Link with TV code
                        </ItemBase>
                    </Link>

                    <Link to="/device" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Linked Devices
                        </ItemBase>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> LANGUAGES & LOCATION</p>
                    <Link to="/language" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Languages
                        </ItemBase>
                    </Link>

                    <Link to="/location" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Location
                        </ItemBase>
                    </Link>

                    <p style={{ fontSize: 22, borderBottom: 'solid 1px #73706a', color: "#73706a" }}> HISTORY & DATA</p>

                    <Link to="/history" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            History
                        </ItemBase>
                    </Link>

                    <Link to="/data" className={styles.styleNone}>
                        <ItemBase style={{ fontSize: 20, height: 60 }}>
                            Data
                        </ItemBase>
                    </Link>
                </Cell>
            </Scroller>

            <Routes>
                <Route path='/auto-play' element={<AutoPlay />} />
                <Route path='/previews' element={<Preview />} />
            </Routes>
        </Row>
    )
}

export default Setting

{/* <ItemBase className={styles.item}>Auto Play</ItemBase>
<ItemBase className={styles.item}>Preview with sound</ItemBase>
<ItemBase className={styles.item}> Restriced mode</ItemBase>
<p className={styles.title}> Link TV & Phone</p>
<ItemBase className={styles.item}>Link with wifi</ItemBase>
<ItemBase className={styles.item}>Link with TV code</ItemBase>
<ItemBase className={styles.item}>Linked Devices</ItemBase>
<p className={styles.title}> LANGUAGES & LOCATION</p>
<ItemBase className={styles.item}>Languages</ItemBase>
<ItemBase className={styles.item}>Location</ItemBase>
<p className={styles.title}> HISTORY & DATA</p>
<ItemBase className={styles.item}>History</ItemBase>
<ItemBase className={styles.item}>Data</ItemBase> */}