import React from 'react'
import { Item } from '@enact/sandstone/Item'
import { Row, Cell, Column } from '@enact/ui/Layout'
import Icon from '@enact/sandstone/Icon';



function SideBar(props) {
  return (
    <>
      <Row style={{ height: '100%', padding: 0, margin: 0, borderRight: 'solid 1px #73706a',width: props.sideBarWidth }}>
        <Column style={{width:"100%" }}>
          <div size="25%" style={{ paddingRight: 10, height: "100vh",display:"flex",flexDirection:"column",justifyContent:"space-around" }}>
            <div>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">profile</Icon>Sign in</Item>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">search</Icon>Search</Item>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">home</Icon>Home</Item>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">music</Icon>Music</Item>

              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">controller</Icon>Gaming</Item>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">bookmark</Icon>News</Item>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">playspeed</Icon>Subscriptions</Item>
            </div>
            <div>
              <Item style={{ fontSize: 22, height: 60, padding: 0,margin:0 }}><Icon size="tiny">gear</Icon>Setting</Item>
            </div>
          </div>
          
        </Column>
      </Row>
    </>
  )
}

export default SideBar