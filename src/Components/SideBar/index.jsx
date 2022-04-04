import React from 'react'
import {Item} from '@enact/sandstone/Item'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Icon from '@enact/sandstone/Icon';


function SideBar() {
  return (<>

    {/* <div>SideBar</div>
    <Icon>search</Icon>
    <Icon>home</Icon>
    <Icon>music</Icon>
    <Icon>controller</Icon>
    <Icon>bookmark</Icon>
    <Icon>playspeed</Icon>
    <Icon>bookmark</Icon> */}


    <Row style={{ height: '100%', padding: 0, margin: 0 }}>
      <Column style={{ width: 300 }}>
      <Cell size="25%" style={{ borderRight: 'solid 1px #73706a', paddingRight: 10, height: "100vh" }}>
                  <h3>Sign in</h3>
                </Cell>
                <Cell size="25%" style={{ borderRight: 'solid 1px #73706a', paddingRight: 10, height: "100vh" }}>
                    <Item style={{ fontSize:22,height: 60, padding: 0}}><Icon size="tiny">search</Icon>Search</Item>
                    <Item style={{ fontSize:22, height: 60, padding: 0}}><Icon size="tiny">home</Icon>Home</Item>
                    <Item style={{ fontSize:22,height: 60, padding: 0}}><Icon size="tiny">music</Icon>Music</Item>
                    
                    <Item style={{ fontSize:22,height: 60, padding: 0}}><Icon size="tiny">controller</Icon>Gaming</Item>
                    <Item style={{ fontSize:22,height: 60, padding: 0}}><Icon size="tiny">bookmark</Icon>News</Item>
                    <Item style={{ fontSize:22,height: 60, padding: 0}}><Icon size="tiny">playspeed</Icon>Subscriptions</Item>
                </Cell>
      </Column>
                

            <Cell>
                <h1>This is RowList</h1>
            </Cell>
        </Row>
    </>
  )
}

export default SideBar