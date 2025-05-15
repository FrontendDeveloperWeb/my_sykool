import { Form } from 'antd'
import React from 'react'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton'

const DocumentsForm = () => {

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
                    <div className="d-flex align-items-center mb-5 justify-content-between">
                        <h4>Additional Docs</h4>

                        <IconButton title="Upload More" className="add-btn btn" />

                    </div>


                </div>

            </div>
            <div className='row justify-content-center mt-2 mb-5'>
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">

                    <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                </div>
            </div>

        </Form>
    )
}

export default DocumentsForm
