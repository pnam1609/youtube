import React from 'react'
import { Item } from '@enact/sandstone/Item'
import { Row, Column } from '@enact/ui/Layout'
import Icon from '@enact/sandstone/Icon';
import {  useNavigate } from 'react-router-dom';
import styles from './index.module.css'



function SideBar(props) {
    const navigate = useNavigate()
    return (
        <>
            <Row style={{ height: '100%', padding: 0, margin: 0, width: props.sideBarWidth }}>
                <Column style={{ width: "100%" }}>
                    <div size="25%" style={{ paddingRight: 10, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <div>
                            <Item className={styles.item} onClick={() => navigate("/sign-in")}>
                                <Icon size="tiny">profile</Icon>Sign in
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("/search")} >
                                <Icon size="tiny">search</Icon>Search
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("")}>
                                <Icon size="tiny">home</Icon>Home
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("/music")}>
                                <Icon size="tiny">music</Icon>Music
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("/gaming")} >
                                <Icon size="tiny">controller</Icon>Gaming
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("/news")} >
                                <Icon size="tiny">bookmark</Icon>News
                            </Item>
                            <Item className={styles.item} onClick={() => navigate("/subscription")} >
                                <Icon size="tiny">playspeed</Icon>Subscriptions
                            </Item>
                        </div>
                        <div>
                            <Item className={styles.item} onClick={() => navigate("/setting")}><Icon size="tiny">gear</Icon>Setting</Item >
                        </div>
                    </div>
                </Column>
            </Row>
        </>
    )
}

export default SideBar