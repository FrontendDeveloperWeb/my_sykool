import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import CustomDropdown from '@/components/shared/dropdown'
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Switch, Tooltip } from 'antd';
import { ArrowUpOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined, DownOutlined, EditFilled, EditOutlined, FileOutlined, MessageOutlined, PlusOutlined, SettingOutlined } from '@ant-design/icons';

const getMarkseColumns = () => [
    {
        title: 'subject',
        dataIndex: 'subject',
        render: text => <span >{text}</span>,
        width: "20%",

    },
    {
        title: 'date',
        dataIndex: 'date',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "20%",

    },
    {
        title: 'Exam',
        dataIndex: 'exam',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "20%",

    },

    {
        title: 'actions',
        dataIndex: 'actions',
        align: "center",
        render: (actions) => (
            <div className='d-flex align-items-center justify-content-center'>
                {actions.map((item, index) => {
                    let className = 'badge';
                    let tooltip = '';
                    let placement = "";
                    let onClick = () => { };
                     if (item.type === EditFilled || item.type === MessageOutlined || item.type === ArrowUpOutlined || item.type === FileOutlined) {
                        className += '  bg-exit';
                        tooltip = 'Grace Time';
                        placement = 'left';
                        onClick = () => openGraceTimeDrawer();
                    } else if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = 'left';
                    } else if (item.type === DeleteOutlined) {
                        className += ' bg-delete';
                        tooltip = 'Delete';
                        placement = 'right';
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} onClick={onClick} style={{ marginRight: '8px' }} title={item} />

                    );
                })}
            </div>
        ),
        width: "40%",
        
    },

];
const marksData = [
    {
        key: '1',
        subject: 'English Paper',
        date: '7 Mar 2025',
        exam: 'HALF YEARLY',
        actions: [<EditOutlined />, <EditFilled />,  <DeleteOutlined />, <MessageOutlined />,<ArrowUpOutlined />, <FileOutlined /> ]

    },
    {
        key: '2',
        subject: 'English Paper',
        date: '7 Mar 2025',
        exam: 'HALF YEARLY',
        actions: [<EditOutlined />, <EditFilled />,  <DeleteOutlined />, <MessageOutlined />,<ArrowUpOutlined />, <FileOutlined /> ]

    },
    {
        key: '3',
        subject: 'English Paper',
        date: '7 Mar 2025',
        exam: 'HALF YEARLY',
        actions: [<EditOutlined />, <EditFilled />,  <DeleteOutlined />, <MessageOutlined />,<ArrowUpOutlined />, <FileOutlined /> ]

    },
    {
        key: '4',
        subject: 'English Paper',
        date: '7 Mar 2025',
        exam: 'HALF YEARLY',
        actions: [<EditOutlined />, <EditFilled />,  <DeleteOutlined />, <MessageOutlined />,<ArrowUpOutlined />, <FileOutlined /> ]

    },

];
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
const buttons = [
    { title: "English Reading", outline: "outline-purple" },
    { title: "English Paper", outline: "outline-danger" },
    { title: "English Dictation", outline: "outline-green" },
    { title: "Urdu Paper", outline: "outline-orange" },
    { title: "Urdu Reading", outline: "outline-aqua" },
    { title: "Urdu Dictation", outline: "outline-grey" },
    { title: "Drawing", outline: "outline-purple" },
    { title: " General knowledge  ", outline: "outline-danger" },
    { title: " Maths paper ", outline: "outline-green" },
    { title: " Maths Reading  ", outline: "outline-orange" },
    { title: " Maths Dictation  ", outline: "outline-aqua" },
    { title: " Vac. Work & Practical ", outline: "outline-grey" },

];
const Mark = () => {
    const [open, setOpen] = useState(false);



    const openDateSheetDrawer = () => {

        setOpen(true);
    };


    const onClose = () => {
        setOpen(false);

    };

    const columns = getMarkseColumns();

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
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6 col-md-2">
                                <BaseInput type="select" placeholder="Select cLass" label="Class" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <BaseInput type="select" placeholder="Section" label="Section " />
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <BaseInput type="select" placeholder="Select exam type" label="Exam Type" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <div className='position-relative'>
                                    <BaseInput type="select" placeholder="Select Session" label="Session" />
                                    <div className='setting-icon' onClick={openDateSheetDrawer}>
                                        <Tooltip title="Session">
                                            <SettingOutlined />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <CustomDropdown
                                    className="green-dropdown me-3 mt-2"
                                    items={""}
                                    title="DataSheet"
                                    icon={<DownOutlined />}
                                />
                            </div>

                        </div>
                    </div>
                </Form>
                <div className="main-box">
                    <div className="row">
                        <div className="col-11">
                            <div className="d-flex flex-wrap">
                                {buttons.map((btn, index) => (
                                    <FlatButton
                                        key={index}
                                        title={btn.title}
                                        className={`exam-btn ${btn.outline} py-2 btn ms-2`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-12">
                            <CustomTable className="my-table mt-2" columns={columns} data={marksData} />
                        </div>
                    </div>
                </div>
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

export default Mark
