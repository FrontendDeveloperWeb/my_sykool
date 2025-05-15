import React from 'react'

const DepositCard = ({ title, deposit }) => {
  return (
    <div className="deposit-box mt-3">
      <h6 className='font-18 mt-2'>{title}</h6>
      <div className='mt-4'>
        <h1 className='font-14'> Rs {deposit}</h1>
      </div>
    </div>
  )
}

export default DepositCard
