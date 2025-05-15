import React from 'react'
import FlatButton from '@/components/shared/button/flatbutton'

const TaskAttributesCard = ({children ,attributes_img ,title ,id ,plan_type ,btn_title}) => {
  return (
    <div className="task-attributes">
        <div className="attributes-header">
            <p>{title}Task Attributes</p>
        </div>
        <div className="attributes-body">
            <div className='attributes-img'>
                <img src={attributes_img} alt="" />
            </div>
            <p className='font-16 color-black text-center'>{id}A-02-01</p>
            <p className='font-16 color-light text-center'>{plan_type}Building Floor Plan</p>
            {children}
            <div className='text-center'>
             <FlatButton title={btn_title} className="attributes-btn"/>
            </div>
        </div>
        </div>
   
  )
}

export default TaskAttributesCard