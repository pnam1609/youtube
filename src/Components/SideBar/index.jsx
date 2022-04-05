import React from 'react'
import { Item } from '@enact/sandstone/Item'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Icon from '@enact/sandstone/Icon';
import { Link } from 'react-router-dom';
import styles from './index.module.css'



function SideBar(props) {
    return (
        <>
            <Row style={{ height: '100%', padding: 0, margin: 0, borderRight: 'solid 1px #73706a', width: props.sideBarWidth }}>
                <Column style={{ width: "100%" }}>
                    <div size="25%" style={{ paddingRight: 10, height: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <div>
                            <Link to='/view/sign-in' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">profile</Icon>Sign in
                                </Item>
                            </Link>
                            <Link to='/view/search' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">search</Icon>Search
                                </Item>
                            </Link>
                            <Link to='/view' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">home</Icon>Home
                                </Item>
                            </Link>
                            <Link to='/view/music' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">music</Icon>Music
                                </Item>
                            </Link>

                            <Link to='/view/gaming' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">controller</Icon>Gaming
                                </Item>
                            </Link>
                            <Link to='/view/news' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">bookmark</Icon>News
                                </Item>
                            </Link>
                            <Link to='/view/subscription' className={styles.styleNone}>
                                <Item className={styles.item}>
                                    <Icon size="tiny">playspeed</Icon>Subscriptions
                                </Item>
                            </Link>
                        </div>
                        <div>
                            <Link to='/view/setting' className={styles.styleNone}>
                                <Item className={styles.item}><Icon size="tiny">gear</Icon>Setting</Item>
                            </Link>
                        </div>
                    </div>
                </Column>
            </Row>
        </>
    )
}

export default SideBar