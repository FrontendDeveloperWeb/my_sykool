

import React, { useState } from 'react'
import FlatButton from '@/components/shared/button/flatbutton';
import { PlusOutlined, SettingOutlined } from '@ant-design/icons';
import IconButton from '../../shared/button/iconbutton';
import CustomTable from '@/components/shared/table/customtable';
import DepositCard from '@/components/shared/card/depositcard';
import UserCard from '@/components/shared/card/usercard';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';



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
const depositData = [
    { title: 'Salary', deposit: '5000', },
    { title: 'Deposited so far', deposit: '7000', },
    { title: 'Remaining Deposits', deposit: '2000', },
    { title: 'Returned Deposits', deposit: '1500', },
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



const SecurityDeposit = () => {
    const [OpenDeposit, setDepositOpen] = useState(false);
    const [selectedMonths, setSelectedMonths] = useState([]);
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };



    const showDepositDrawer = () => {
        setDepositOpen(true);
    }
    const onClose = () => {
        setDepositOpen(false);

    };
    return (
        <>
            <div className="row">
                {depositData.map((item, index) => (
                    <div className="col-12 col-sm-6 col-md-3" key={index}>
                        <DepositCard {...item} />
                    </div>
                ))}
            </div>

            <div className="row justify-content-center ">

                <div className="col-12 d-flex flex-column">
                    <div className="main-box flex-fill mt-4">
                        <div className="row mt-2">


                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <IconButton icon="+" title="Security Deposit" className="add-btn btn" onClick={showDepositDrawer} />
                                </div>
                                <div>

                                    <FlatButton title="undeposited" className="btn save-btn bg-purple me-2 ms-3 mt-3" />

                                </div>
                            </div>
                        </div>
                        <div className="row">
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


            <Drawer title="Add Deposit" onClose={onClose} open={OpenDeposit} >
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
                        <div className="col-12">
                            <BaseInput type="" placeholder="0" label="Deposit Amount" />
                        </div>
                        <div className="col-12 col-md-6">
                            <BaseInput type="" placeholder="12" label="Deposit Months" />
                        </div>
                        <div className="col-12 col-md-6">
                            <BaseInput type="" placeholder="0" label="Amount" />
                        </div>
                        <div className="col-12 col-md-6">
                            <BaseInput type="select" placeholder="April" label="Deduct From" />
                        </div>
                        <div className="col-12 col-md-6 mt-4">
                            <BaseInput type="select" placeholder="2025" label="" />
                        </div>
                        <div className="col-12">
                            <p>Skip Month</p>
                            <div className="select-month border-none d-flex flex-wrap p-0">
                                {months.map((month) => (
                                    <div
                                        key={month}
                                        className={`month ${selectedMonths.includes(month) ? "bg-red mb-2" : "month-active mb-2"}`}
                                        onClick={() => toggleMonth(month)}
                                    >
                                        <p>{month}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

                </Form>
            </Drawer>

        </>
    )
}

export default SecurityDeposit
