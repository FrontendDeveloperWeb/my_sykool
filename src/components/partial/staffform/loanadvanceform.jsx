import React, { useState } from 'react'
import FlatButton from '@/components/shared/button/flatbutton';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import IconButton from '@/components/shared/button/iconbutton';
import CustomTable from '@/components/shared/table/customtable';
import BaseInput from "@/components/shared/inputs";
import { span } from 'framer-motion/client';
import { Form } from 'antd';
const columns = [
    {
        title: 'date',
        dataIndex: 'date',
        key: 'date',
        render: text => <a>{text}</a>,
    },
    {
        title: 'amount',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: 'note',
        dataIndex: 'note',
        key: 'note',
    },
    {
        title: 'Actions',
        key: 'actions',
        dataIndex: 'actions',
        render: (_, { tags }) => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <span></span>
                    );
                })}
            </>
        ),
    },

];
const data = [];


const LoanAdvance = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
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
                    <div className="col-12 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="row align-items-center ">
                                <div className="col-md-12">
                                    <IconButton className="add-btn mb-3" icon={<PlusOutlined />} title="Loan / Advance" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput label="Amount *" placeholder="Enter Amount" />

                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput label="Installment Amount *" placeholder="Enter Installment Amount" />
                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput label="Deduct From *" type="select" placeholder="April" />

                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput type="select" placeholder="2025" label=" " />
                                </div>
                                <div className="col-12 col-md-2">
                                    <FlatButton htmlType="submit" className="btn save-btn w-100 mt-2" title="Save" />
                                </div>
                                <div className="col-md-12">
                                    <CustomTable columns={columns} dataSource={data} className="mt-3" />
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

        </>
    )
}

export default LoanAdvance
