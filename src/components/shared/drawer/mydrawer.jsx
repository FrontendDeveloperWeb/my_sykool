import React from 'react'
import {  Drawer } from 'antd';

const MyDrawer = ({title, onClose , open ,children , width= "400"}) => {
  return (
    <Drawer title={title} onClose={onClose} open={open} position="right" width={width}>
    {children}
  </Drawer>
  )
}

export default MyDrawer
