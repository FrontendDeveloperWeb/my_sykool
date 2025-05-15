import React from 'react'

const UserCard = ({ name, role}) => {
  return (
    <div className='d-flex align-items-center'>
    <div className="user-img">
      <img src="https://i.pravatar.cc/150?img=3" alt={name} />
    </div>
    <div className='ms-2'>
      <h6>{name}</h6>
      <p>{role}</p>
    </div>
  </div>
  )
}

export default UserCard
