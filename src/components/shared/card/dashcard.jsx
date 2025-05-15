import React, { useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const DashCard = ({title ,icon ,dashIconClass}) => {
      const [showElement, setShowElement] = useState(false)
    return (
        <div className="dash-card">

            <div>
                <div className="d-flex">
                    {showElement ? <p>123.</p> : <p>***.</p>}
                    <p className='ms-3 eye-icon' onClick={() => setShowElement(!showElement)}>
                        {showElement ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                    </p>
                </div>

                <p className='font-16 font-600'>{title}  </p>
            </div>
            <div>
                <p className={'dashboard-icons '+ dashIconClass}>
                    {icon}
                </p>
            </div>
        </div>
    )
}

export default DashCard
