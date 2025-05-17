import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import {  SearchOutlined,  EditOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons'
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Tooltip } from 'antd';

const attendanceColumns = [
    {
        title: 'account',
        dataIndex: 'class',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 150,

    },

    {
        title: 'Date',
        dataIndex: 'date',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 150,

    },
    {
        title: 'total',
        dataIndex: 'total',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 150,

    },
    {
        title: 'actions',
        dataIndex: 'actions',
        render: (actions) => (
            <div className='d-flex align-items-center'>
                {actions.map((item, index) => {
                    let className = 'ba dge';
                    let tooltip = '';
                    let placement = "";
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = "left"
                    } else if (item.type === LoginOutlined) {
                        className += ' bg-exit';
                        tooltip = 'Left Class';
                        placement = "right"
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} style={{ marginRight: '8px' }} title={item} />
                    );
                })}
            </div>
        ),
        width: 20,
    },

];
const attendanceData = [];
const accountColumns = [    
    {
        title: 'name',
        dataIndex: 'name',
        width: "69%",

    },
    {
        title: 'actions',
        dataIndex: 'actions',
        render: (actions) => (
            <div className='d-flex align-items-center'>
                {actions.map((item, index) => {
                    let className = 'ba dge';
                    let tooltip = '';
                    let placement = "";
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = "left"
                    } else if (item.type === LoginOutlined) {
                        className += ' bg-exit';
                        tooltip = 'Left Class';
                        placement = "right"
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} style={{ marginRight: '8px' }} title={item} />
                    );
                })}
            </div>
        ),
        
    },

];
const accountData = [
    {
        key: '1',
        name: 'Cash',
        actions: [<EditOutlined />]

    },
    {
        key: '2',
        name: 'Cash',
        actions: [<EditOutlined />]

    },
    {
        key: '3',
        name: 'Cash',
        actions: [<EditOutlined />]

    },
    {
        key: '4',
        name: 'Cash',
        actions: [<EditOutlined />]

    },

];
const Income = () => {
    const [open, setOpen] = useState(false);
    const [OpenBallance, setBallanceOpen] = useState(false);
    const [openCollection, setCollectionBallanceOpen] = useState(false);
    

    const showAccountDrawer = () => {
        setOpen(true);

    }
    const onClose = () => {
        setOpen(false);
        setBallanceOpen(false);
    };
    const showBalancedDrawer = () => {
        setBallanceOpen(true);
    };
    const showCollectionDrawer = () => {
        setCollectionBallanceOpen(true);
    };
    const onCloseCollection = () => {
        setCollectionBallanceOpen(false);
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="account" />}>
                <div className="row">
                    <div className="col-12">
                        <div className="main-box">

                            <div className='d-flex align-items-center mt-3 '>
                                <div>
                                    <IconButton icon="+" title="Expense" className="add-btn btn" onClick={showAccountDrawer} />
                                </div>
                                <div>
                                    <FlatButton title="Report" className="btn save-btn bg-purple px-5 ms-3" onClick={showBalancedDrawer} />
                                </div>
                                <div className='w-100 search-group'>
                                    <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                </div>
                            </div>

                            <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />

                        </div>
                    </div>

                </div>
            </InnerLayout>
            <Drawer title="Add Income" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <div className='position-relative'>
                        <BaseInput type="select" placeholder="Spend From name" label="Income For" />
                        <div className='setting-icon' onClick={showCollectionDrawer}>
                            <Tooltip title="Setting">
                                <SettingOutlined />
                            </Tooltip>
                        </div>
                    </div>
                    <BaseInput type="select" placeholder="Select Account" label="Account" />
                    <BaseInput type="datepiker" placeholder="22 Apr, 2025" label="Date" />
                    <div className="row align-items-center ">
                        <div className="col-6">
                            <BaseInput type="" placeholder="0" label="Description" />
                        </div>
                        <div className="col-4">
                            <BaseInput type="" placeholder="0" label="Amount" />
                        </div>
                        <div className="col-2">
                            <div className='mt-3'>
                                <IconButton icon="+" className="plus-btn " />
                            </div>
                        </div>
                    </div>

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

                </Form>
            </Drawer>
            <Drawer title="Income Report" onClose={onClose} open={OpenBallance} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="select" placeholder="Enter Balance here" label="Account" />
                    <BaseInput type="datepiker" placeholder="Select Date" label="Date" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Show" />

                </Form>
            </Drawer>
            <Drawer title="Collection Account" onClose={onCloseCollection} open={openCollection} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <div className="row align-items-center">
                        <div className="col-10">
                            <BaseInput type="datepike" placeholder="Enter collection account name" label="Account Name" />
                        </div>
                        <div className="col-2">
                            <div>
                                <IconButton icon="+" className="plus-btn me-1" />
                            </div>
                        </div>
                    </div>
                    <CustomTable className="my-table mt-4" columns={accountColumns} data={accountData} />


                </Form>
            </Drawer>
        </>
    )
}

export default Income
