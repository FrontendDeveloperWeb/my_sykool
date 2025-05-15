import { SettingOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import React from 'react'

const FamilyForm = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    }
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
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="main-box">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                            <div className="">
                                <h4>
                                    Father Information
                                </h4>
                            </div>


                        </div>
                        <div className="row">

                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}

                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Occupation *" placeholder="Enter Occupation" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="CNIC no *" placeholder="Enter CNIC no" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Education *" placeholder="Enter Education " />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Monthly income" placeholder="Monthly income" />
                            </div>

                            <div className="col-12 col-md-6">
                                <BaseInput label="Email" type="mail" placeholder="Enter Email" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Employer (Firm)" placeholder="Enter Employer" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Office Contact" type="number" placeholder="Enter Office Contact" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Ofiice Adress" placeholder="Enter Office Adress" />
                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="main-box ">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                            <div className="">
                                <h4>
                                    Mother Information
                                </h4>
                            </div>


                        </div>
                        <div className="row">

                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}

                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Name" placeholder="Enter Name" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Occupation *" placeholder="Enter Occupation" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="CNIC no *" placeholder="Enter CNIC no" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Education *" placeholder="Enter Education " />
                            </div>


                            <div className="col-12 col-md-6">
                                <BaseInput label="Email" type="mail" placeholder="Enter Email" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Employer (Firm)" placeholder="Enter Employer" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Office Contact" type="number" placeholder="Enter Office Contact" />
                            </div>
                            <div className="col-12 col-md-6">
                                <BaseInput label="Ofiice Adress" placeholder="Enter Office Adress" />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="main-box">
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
                            <div className="col-12 col-md-12">
                                <BaseInput label="Name *" placeholder="Enter Name" />
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput label="Relation *" placeholder="Enter Relation " />
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput label="Emergency contact *" placeholder="Enter Emergency contact " />
                            </div>


                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="main-box ">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3" >
                            <div className="">
                                <h4>
                                    Tutor Information
                                </h4>
                            </div>


                        </div>
                        <div className="row">

                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}

                                </div>
                            </div>
                            <div className="col-12 col-md-12">
                                <BaseInput label="contact *" placeholder="Enter contact " />
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

export default FamilyForm
