import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Switch, Tooltip } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';

const attendanceColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <span className=''>{text}</span>,


    },

    {
        title: 'actions',
        dataIndex: 'actions',
        render: (actions) => (
            <div className='d-flex align-items-center'>
                {actions.map((item, index) => {
                    let className = 'badge';
                    let tooltip = '';
                    let placement = "";
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = "left"
                    } else if (item.type === DeleteOutlined) {
                        className += ' bg-delete';
                        tooltip = 'Delete';
                        placement = "right"
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} style={{ marginRight: '8px' }} title={item} />
                    );
                })}
            </div>
        ),
        width: 150,
    },

];
const attendanceData = [
    {
        key: '1',
        name: 'KG II',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '2',
        name: 'KG II',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '3',
        name: 'KG II',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '4',
        name: 'KG II',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '5',
        name: 'KG II',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
];
const AddDateSheet = () => {
    const [open, setOpen] = useState(false);



    const openDateSheetDrawer = () => {

        setOpen(true);
    };


    const onClose = () => {
        setOpen(false);

    };



    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const onChange = checked => {
        console.log(`switch to ${checked}`);
    }
    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="examination" />}>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    

                    <div className="main-box">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-3">
                                <BaseInput type="select" placeholder="Select cLass" label="Class" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <BaseInput type="select" placeholder="Section" label="Section " />
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <BaseInput type="select" placeholder="Select exam type" label="Exam Type" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <div className='position-relative'>
                                    <BaseInput type="select" placeholder="Select Session" label="Session" />
                                    <div className='setting-icon' onClick={openDateSheetDrawer}>
                                        <Tooltip title="Session">
                                            <SettingOutlined />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="main-box">
                        <div className="row ">
                            <div className="col-12 col-md-3">
                                <div className="row">
                                    <div className="col-6">
                                        <BaseInput type="dateppiker" placeholder="Select date" label="Date" />
                                    </div>
                                    <div className="col-6">
                                        <BaseInput type="" placeholder="" label="Day " />
                                    </div>

                                </div>
                            </div>
                            <div className="col-12 col-md-9">
                                <div className="row ">
                                    <div className="col-3">
                                        <BaseInput type="select" placeholder="Select subject" label="Subject " />
                                    </div>
                                    <div className="col-8">
                                        <div className='position-relative'>
                                            <BaseInput type="textarea" rows={3} placeholder="" label="Syllabus" />
                                            <div className='setting-icon'>
                                                <Switch defaultChecked onChange={onChange} />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="col-12 col-md-1">
                                        <div>
                                            <IconButton icon="+" className="plus-btn me-1" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save"  />
                        </div>
                    </div>

                </Form>
            </InnerLayout>
            <Drawer title="Manage Sessions" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    <div className="row align-items-center ">
                        <div className="col-10">
                            <BaseInput type="" placeholder="Enter session name" label="Session" />
                        </div>
                        <div className="col-2">
                            <div className="green-icon cam-icon mt-2 ">
                                <FlatButton
                                    title={<PlusOutlined />}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />
                        </div>
                    </div>

                </Form>
            </Drawer>
        </>
    )
}

export default AddDateSheet
