import React from 'react'

const AttendaceCard = ({className , title, dates}) => {
    return (
        <div className={className + " attend-box att-green mt-3"}>
            <h6 className='font-18 mt-2 font-600'>{title}</h6>
            <div className='text-end'>
                <h1 className='font-40'>{dates}</h1>
            </div>
        </div>
    )
}

export default AttendaceCard
