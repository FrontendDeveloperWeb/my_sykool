import { Checkbox, Form, Switch } from 'antd'
import React, { useState } from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import Drawer from '@/components/shared/drawer/mydrawer';
import UploadProfile from "@/components/shared/inputs/uploadprofile"
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import IconButton from '../../shared/button/iconbutton';

const ProfileForm = () => {
    const [open, setOpen] = useState(false);
    const [discountOpen, discountSetOpen] = useState(false);

    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const showAddClassDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        discountSetOpen(false);
    };

    const switchonChange = checked => {
        console.log(`switch to ${checked}`);
    };

    return (
        <>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=''
            >
                <div className="row justify-content-center ">
                    <div className="col-8 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="row">
                                <div className="col-12">
                                    <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                        <UploadProfile />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Name *" placeholder="Enter student name" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Father name *" placeholder="Enter student father name" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Spouse name*" placeholder="Enter Spouse name" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Select Gender *" type="select" placeholder="Select Gender " />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Date of birth" placeholder="Slect Date of birth" type="datepiker" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Contact" placeholder="Slect Date of birth" type="number" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <BaseInput label="CNIC no" placeholder="Enter CNIC no" type="number" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Qualification." placeholder="Enter Qualification." />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Department *" placeholder="Select Department *" type="Select Department *" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Designation" placeholder="Enter Designation" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Place of birth *" placeholder="Enter Place of birth" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Biometric card no." placeholder="Enter Biometric card no." />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <BaseInput label="Experience *" placeholder="Enter Experience" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Note " placeholder="Enter Note" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Current Address " placeholder="Enter Current Address" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Permanent Address " placeholder="Enter Permanent Address" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <BaseInput label="Appointed on " type="select" placeholder="Select Appointment Date" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <BaseInput label="Leaving Date " type="select" placeholder="Select  Date" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <BaseInput label="Rejoining Date " type="select" placeholder="Select  Date " />
                                </div>
                                <div className="col-12 mt-2 d-flex gap-2 ">
                                    <span>Is Coordinator?</span>
                                    <Switch defaultChecked onChange={switchonChange} />

                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-8  d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                                <div className="">
                                    <h4>
                                        Emergency Information
                                    </h4>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-12">
                                    <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                        {/* <UploadProfile /> */}

                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <BaseInput label="Name *" placeholder="Enter Name" />
                                </div>
                                <div className="col-12 ">
                                    <BaseInput label="Relation *" placeholder="Enter Relation" />
                                </div>

                                <div className="col-12 ">
                                    <BaseInput label="Emergency contact" placeholder="Enter Emergency contact" type="tel" />
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-8  d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                                <div className="d-flex align-items-center w-100  justify-content-between">
                                    <h4>
                                        Timings
                                    </h4>
                                    <div>

                                        <Switch defaultChecked onChange={switchonChange} />
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                        {/* <UploadProfile /> */}

                                    </div>
                                </div>
                                <div className="col-12  col-lg-3 check-main">
                                    <BaseInput
                                        label="Day" placeholder="Select Day" type="select" />
                                    <Switch className='check-child' defaultChecked onChange={switchonChange} />
                                </div>
                                <div className="col-12  col-lg-3">
                                    <BaseInput label="Reporting Time *" placeholder="8:00 Am" type="timepiker" />
                                </div>

                                <div className="col-12  col-lg-3">
                                    <BaseInput label="Joins at " placeholder="8:00 Am" type="timepiker" />
                                </div>
                                <div className="col-12  col-lg-3">
                                    <BaseInput label="Emergency contact " placeholder="8:00 Am" type="timepiker" />
                                </div>
                                <div className="col-12 d-flex align-items-center justify-content-center mt-2">

                                    <IconButton
                                        icon={<PlusOutlined />}
                                        className="add-btn rounded-5 circle-btn"
                                    />
                                </div>


                            </div>

                        </div>
                    </div>
                </div>



                <div className='row justify-content-center mb-5'>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">

                        <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                    </div>
                </div>

            </Form >



        </>
    )
}

export default ProfileForm
