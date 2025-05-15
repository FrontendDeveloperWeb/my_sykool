import React from 'react'
import FlatButton from '@/components/shared/button/flatbutton';


const RoleCard = ({ data }) => {
    return (
      
            <div className="row align-items-stretch">
                {data.map((item, index) => {
                    const isLast = index === data.length - 1;
                    return (
                        <div className="col-12 col-md-3 mb-4" key={item.id}>
                            <div className="dash-card manage-card py-4">
                                {isLast ? (
                                    <>
                                        <p className={"dashboard-icons " + item.dashIconClass}>
                                            {item.icon}
                                        </p>
                                        <div className='text-end'>
                                            <FlatButton className="btn save-btn bg-purple" style={{ marginRight: '8px' }} title="Add Role" />
                                            <p className='color-purple mt-2'>{item.edittitle}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <h4 className='font-20 font-600'>{item.title}</h4>
                                            <p className='color-purple'>{item.edittitle}</p>
                                        </div>
                                        <p className={"dashboard-icons " + item.dashIconClass}>
                                            {item.icon}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

        
    );
}

export default RoleCard
