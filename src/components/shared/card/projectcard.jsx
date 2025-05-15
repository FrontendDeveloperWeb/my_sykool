import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@/components/shared/button/iconbutton'

const ProjectCard = ({title , detail ,dates ,time ,folder ,employees ,totaldrawings ,status ,type ,completiondate}) => {
    return (
        <Link to="/projects-detail">
            <div className="project-card">
                <div className="project-header">
                    <div className='project-header-img'>
                        <img src="../admin/assets/img/card-img.png" alt="" />
                        <div className="project-header-detail">
                            <p className='color-fff font-20 mb-1'>{title}</p>
                            <p className='color-light-white'>{detail}</p>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <p className='color-light-white'>{dates}</p>
                                    <p className='color-light-white dot'></p>
                                    <p className='color-light-white'>{time}</p>
                                </div>
                                <div>
                                    <IconButton title="Edit" icon={<img src="../admin/assets/img/btnedit-icon.png" />} className="edit-btn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="project-body">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail mb-2">
                                <p className='color-light font-12'>Drawings</p>
                                <p className='color-dark-blue font-16'>{folder}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail mb-2">
                                <p className='color-light font-12'>Employees:</p>
                                <p className='color-dark-blue font-16'>{employees}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail mb-2">
                                <p className='color-light font-12'>Total Drawings:</p>
                                <p className='color-dark-blue font-16'>{totaldrawings}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail">
                                <p className='color-light font-12'>Status</p>
                                <p className='color-dark-blue color-yellow font-16'>{status}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail">
                                <p className='color-light font-12'>Type:</p>
                                <p className='color-dark-blue font-16'>{type}</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="body-detail">
                                <p className='color-light font-12'>Completion Date:</p>
                                <p className='color-dark-blue font-16'>{completiondate}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard
