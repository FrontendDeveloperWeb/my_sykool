import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const AssignCard = ({title ,img ,id ,taskname ,children}) => {
    return (
        <div className="assign-box">
            <div className="assign-header">
                <p>{title}</p>
            </div>
            <div className="assign-body">
               <Link to="/assign-task-detail">
                {children}
              </Link>
            </div>
        </div>
    )
}

export default AssignCard
