import React from 'react'

const AttendanceReportCard = ({title,number ,icon ,dashIconClass}) => {
  return (
    <div className='main-box  d-flex align-items-center'>
    <div>
        <p className={'dashboard-icons '+ dashIconClass}>{icon}</p>
        
        </div>
    <div className='ms-2'><h5 className='font-500 font-18'>{title}</h5><p>{number}</p></div>
  </div>
  )
}

export default AttendanceReportCard