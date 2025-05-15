import { Form } from 'antd'
import React from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';


const InfoForm = () => {
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
            <div className="row d-flex ">
                <div className="col-12 col-md-6 d-flex flex-column">
                    <div className="main-box flex-fill">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3"><div className="">
                            <h4 className="font-20">Guardian Information</h4>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Name *" placeholder="Enter student name" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Relation *" placeholder="Enter Gurdian Relation " />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Occupation *" placeholder="Enter Gurdian Relation " />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="CNIC no" placeholder="Enter  CNIC no" />
                            </div>

                            <div className="col-12 col-md-6">
                                <BaseInput label="Email" placeholder="Enter email address" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Employer" placeholder="Enter Employer" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Office Contact" placeholder="Enter Office Contact" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Education" placeholder="Enter Education" />
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput label="Office Address *" placeholder="Enter Office Address number" />
                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column">
                    <div className="main-box flex-fill">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                            <div className="">
                                <h4>
                                    Other Information
                                </h4>
                            </div>
                            <div className=""  >

                            </div>

                        </div>
                        <div className="row">

                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}

                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput label="Allergies *" placeholder="Enter Family Code" />
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput type="textarea" label="Note *" rows={6} placeholder="Enter Note" />
                            </div>

                            <div className="col-12 col-md-12">
                                <BaseInput BaseInput label="Leaving Reason *" rows={6} placeholder="Enter Leaving Reason" />
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
    )
}

export default InfoForm
