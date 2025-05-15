import React from 'react'
import FlatButton from '../button/flatbutton'
import { FilterOutlined, MobileOutlined, RightOutlined } from '@ant-design/icons'

const TabButton = ({ icon, title }) => {
    return (
        <div className='d-flex align-items-center tab-button'>
            <div className='tab-icon cam-icon ms-2'>
                <FlatButton title={icon} />
            </div>
            <p className='ms-3 me-3'>{title}</p>
            <RightOutlined />
        </div>
    )
}

export default TabButton
