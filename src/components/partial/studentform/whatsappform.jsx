import { Form } from 'antd'
import React, { useState } from "react";
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import TextAreaInput from '../../shared/inputs/textareainput';
import IconButton from '@/components/shared/button/iconbutton'
import CountryCodeInput from '../../shared/inputs/countrycodeinput';

const WhatsappForm = () => {

    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [phoneValue, setPhoneValue] = useState("");
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
                            <h4>Application Credentials</h4>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                                    {/* <UploadProfile /> */}
                                </div>
                            </div>
                            <div className="col-7 mb-3">
                                <CountryCodeInput className='w-100'
                                    name="phone"
                                    label="Father's Contact"
                                    isPhoneInput={true}
                                    value={phoneValue}
                                    onChange={(value) => setPhoneValue(value)}
                                    placeholder="cnter Contact number"
                                    country="pk"
                                />

                            </div>
                            <div className="col-7 mb-3">
                                <CountryCodeInput className='w-100'
                                    name="phone"
                                    label="Mother's Contact"
                                    isPhoneInput={true}
                                    value={phoneValue}
                                    onChange={(value) => setPhoneValue(value)}
                                    placeholder="cnter Contact number"
                                    country="pk"
                                />

                            </div>
                            <div className="col-7 mb-3">
                                <CountryCodeInput className='w-100'
                                    name="phone"
                                    label="Student's Contact"
                                    isPhoneInput={true}
                                    value={phoneValue}
                                    onChange={(value) => setPhoneValue(value)}
                                    placeholder="cnter Contact number"
                                    country="pk"
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

        </Form>
    )
}

export default WhatsappForm
