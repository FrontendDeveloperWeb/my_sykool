import { Form } from 'antd'
import React from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton'
import { AlignCenterOutlined, CloseOutlined, PlusOutlined } from '@ant-design/icons';

const CustomFees = () => {

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
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                            <div className="">
                                <h4>Custom Fees</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <BaseInput label="Admission Test Date *" type="datepiker" placeholder="Enter student name" />
                            </div>
                            <div className="col-2 mb-3">
                                <BaseInput
                                    label="Base Fee *"
                                    type="phone"
                                    disabled={true}
                                    defaultValue="0"
                                    placeholder="0"
                                />

                            </div>
                            <div className="col-2 mb-3">
                                <BaseInput label="Discount % *" type="phone" placeholder="0" />
                            </div>
                            <div className="col-2 mb-3">
                                <BaseInput label="Amount*" type="phone" placeholder="0" />
                            </div>
                            <div className="col-12  mb-3">
                                <div className="d-flex justify-content-center gap-2">
                                    <IconButton
                                        icon={<PlusOutlined />}
                                        className="add-btn rounded-5 circle-btn"
                                    />

                                    <IconButton
                                        icon={<CloseOutlined />}
                                        className="danger-outline-btn border-1 circle-btn red-border-btn border-danger bg-transparent color-btn-danger"
                                    />


                                </div>
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

export default CustomFees
