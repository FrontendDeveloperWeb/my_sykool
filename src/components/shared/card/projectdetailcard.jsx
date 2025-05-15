import { Avatar } from 'antd'
import React from 'react'

const ProjectDetailCard = () => {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail mb-2">
            <h2 className='color-black font-16'>Project Name</h2>
            <p className='color-black font-16'>General Hospital</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-8">
          <div className="body-detail mb-2">
            <h2 className='color-black font-16'>Location</h2>
            <p className='color-dark-blue font-16'>579</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail mb-2">
            <h2 className='color-black font-16'>Assignee Members</h2>
            <div className='d-flex align-items-center'>
              <Avatar.Group>
                <Avatar className='avatar-img'>
                  <img src="../admin/assets/img/avatar-img.png" alt="" />
                </Avatar>
                <Avatar className='avatar-img'>
                  <img src="../admin/assets/img/avatar-img.png" alt="" />
                </Avatar>
                <Avatar className='avatar-img'>
                  <img src="../admin/assets/img/avatar-img.png" alt="" />
                </Avatar>
              </Avatar.Group>
              <div>
                <p>+ more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail">
            <h2 className='color-black font-16'>Date</h2>
            <p className='color-dark-blue font-16'>22 July, 2024</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail">
            <h2 className='color-black font-16'>Time</h2>
            <p className='color-dark-blue font-16'>07:30 PM</p>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail">
            <h2 className='color-black font-16'>Status</h2>
            <p className='color-dark-blue font-16'>In Process</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail">
            <h2 className='color-black font-16'>Type</h2>
            <p className='color-dark-blue font-16'>Mechanical</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="body-detail">
            <h2 className='color-black font-16'>Completion Date</h2>
            <p className='color-dark-blue font-16'>26 July, 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailCard
