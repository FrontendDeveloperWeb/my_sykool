import React from 'react'
import { Button } from 'antd'

const IconButton = ({ icon, iconPosition, title, className, onClick, suffix }) => {
  return (
    <Button type="primary" icon={icon} iconPosition={iconPosition} suffix={suffix} onClick={onClick} className={className} >
      {title}
    </Button>
  )
}

export default IconButton