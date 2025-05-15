import { Checkbox, Form, Switch } from 'antd'
import React, { useState } from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import Drawer from '@/components/shared/drawer/mydrawer';
import UploadProfile from "@/components/shared/inputs/uploadprofile"
import { SettingOutlined } from '@ant-design/icons';

const StudentForm = () => {

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
    const discountDrawer = () => {
        discountSetOpen(true);
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
                <div className="row d-flex ">
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="text-end" onClick={showAddClassDrawer}>
                                <SettingOutlined />

                            </div>
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
                                    <BaseInput label="Gender *" type="select" placeholder="Select Gender " />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Date of birth" placeholder="Slect Date of birth" type="datepiker" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <BaseInput label="Surname" placeholder="Enter Surname" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput type="select" label="Religion" placeholder="Select religion" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Last Institute" placeholder="Enter Last Institute" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Date of birth in words." placeholder="Enter Date of birth in words." />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Place of birth *" placeholder="Enter Place of birth" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput type="select" label="Mother Tongue" placeholder="Enter Mother Tongue" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-6">
                                    <BaseInput label="Nationality *" placeholder="Enter Nationality" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput type="select" label="Area " placeholder="Enter Area" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Current Address " placeholder="Enter Current Address" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Permanent Address " placeholder="Enter Permanent Address" />
                                </div>
                                <div className="col-12 col-md-12">
                                    <BaseInput label="Physical Handicap " placeholder="Enter Physical Handicap" />
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                                <div className="">
                                    <h4>
                                        Registration Information
                                    </h4>
                                </div>
                                <div className="" onClick={discountDrawer} >
                                    <SettingOutlined />

                                </div>

                            </div>
                            <div className="row">

                                <div className="col-12">
                                    <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                        {/* <UploadProfile /> */}

                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Family code *" placeholder="Enter Family Code" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Reg number *" placeholder="Enter student father name" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <BaseInput label="Date of registration" placeholder="Select Date of Registration" type="number" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <BaseInput label="Date of Admission *" placeholder="Select Date of Admission" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="B-Form" placeholder="B-Form" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Monthly fees *" placeholder="Rs 0" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput type="datepiker" label="Challan due date" placeholder="Select Challan due date" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Timely discount" placeholder="Emter Timely discount" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput type="select" label="Class (admitted) * *" placeholder="Select Class admitted " />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput type="select" label="Section (admitted) *" placeholder="Select Section admitted" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput type="select" label="Class (current) *" placeholder="Select Current Class" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput type="select" label="Section (current) " placeholder="Select Current Section" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="Roll No" placeholder="Enter Roll No" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="House " placeholder="Enter House" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="Re-admission date" placeholder="Select date of Admission " />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="Last class " placeholder="Enter Last class" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="Last Session" placeholder="Enter Last Session" />
                                </div>
                                <div className="col-12 col-md-4 col-lg-6">
                                    <BaseInput label="Last Result " placeholder="Enter Last Result" />
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

            </Form>

            <Drawer title="Settings" onClose={onClose} open={open} >
                <Checkbox className='mb-2' onChange={onChange}>Date of admission same as date of registration</Checkbox>
                <Checkbox className='mb-2' onChange={onChange}>Current class same as class admitted</Checkbox>
                <Checkbox className='mb-2' onChange={onChange}>Current section same as section admitted</Checkbox>
                <FlatButton htmlType="submit" className="btn w-100 mt-4 save-btn" title="Save" />


            </Drawer>
            <Drawer title="Discount Setting" onClose={onClose} open={discountOpen} >
                <div className="d-flex align-items-center justify-content-between ">
                    <h4>Discount</h4>
                    <Switch defaultChecked onChange={switchonChange} />

                </div>
                <FlatButton htmlType="submit" className="btn w-100 mt-4 save-btn" title="Save" />


            </Drawer>

        </>
    )
}
export default StudentForm