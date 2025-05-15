import { Form } from 'antd'
import React from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton'

const AdmissionForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
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
                <div className="col-7">
                    <div className="main-box">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3"><div className="">
                            <h4>Admission Test</h4>
                        </div>
                        </div>
                        <div classNameName="row">
                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <BaseInput label="Admission Test Date *" type="datepiker" placeholder="Enter student name" />
                            </div>
                            <div className="col-12 mb-3">
                                <div className="d-flex gap-2 ">
                                    <IconButton title="Send Admit Card" className="add-btn btn" />
                                    <IconButton title="print Admit Card" className="add-btn btn" />
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <BaseInput label="Admission Test Status *" type="select" placeholder="Select Status" />
                            </div>
                            <div className="col-12 ">
                                <BaseInput type="textarea" rows={6} label="Admission Test Remarks *" placeholder="Enter Remarks" />
                            </div>

                        </div>

                    </div>
                </div>
                <div className="col-7">
                    <div className="main-box ">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                            <div className="">
                                <h4>
                                    Admission Interview
                                </h4>
                            </div>
                        </div>
                        <div className="row">

                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}

                                </div>
                            </div>
                            <div className="col-12 col-md-12 mb-2">
                                <BaseInput label="Admission Interview Date *" type="datepiker" placeholder="Select Date" />
                            </div>
                            <div className="col-12 col-md-12 mb-2">
                                <BaseInput  type="textarea" label="Admission Interview Remarks *" rows={6} placeholder="Enter Remarks" />
                            </div>

                            <div classNameName="col-12 col-md-12">
                                <BaseInput label="Admission Interview Status *" type="select" placeholder="Select status" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>



            <div classNameName='row justify-content-center mb-5'>
                <div classNameName="col-12 col-md-10 col-lg-8 col-xl-6">

                    <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                </div>
            </div>

        </Form>
    )
}

export default AdmissionForm
