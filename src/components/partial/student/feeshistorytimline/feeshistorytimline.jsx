import React from 'react'
import { Timeline } from 'antd'
import { PrinterOutlined } from '@ant-design/icons'

const FeesHistory = ({ challans }) => {
    return (
        <div className="challan-history pt-2">
            <Timeline className="custom-timeline">
                {challans.map((item, index) => (
                    <div key={index}>
                        <div className="challan-item">
                            <div>
                                <div className='d-flex align-items-start gap-3'>
                                    <span className='slipNumber'>Slip No# {item.slipNo}</span>
                                    <PrinterOutlined className='mt-1'/>
                                </div>
                                <span className="amount">
                                    Tuition Fees - {item.amount}
                                </span>
                            </div>
                            <div className="date">
                                <span>{item.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Timeline>
        </div>
    )
}

export default FeesHistory