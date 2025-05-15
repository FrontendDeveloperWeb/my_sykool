import React from 'react'
import FlatButton from '@/components/shared/button/flatbutton'

const SuscriptionCard = ({title, price ,time ,detail,annually ,text_1 ,btntitle ,text_2, text_3,text_4 ,className ,btn_className}) => {
    return (
        <div className={className}>
            <p className='font-36'>{title}</p>

            <div className='d-flex justify-content-center'>
                <span className='font-36'>$</span>
                <h2 className='font-90'>{price}</h2>
            </div>
            <p>per user / {time}</p>
            <p className='font-italic'>{annually}</p>
            <p className='mt-4'>{detail}</p>
            <FlatButton title={btntitle} className={btn_className} />
            <ul className='mt-3'>
                <li>{text_1}</li>
                <li>{text_2}</li>
                <li>{text_3}</li>
                <li>{text_4}</li>
            </ul>
        </div>
    )
}

export default SuscriptionCard
