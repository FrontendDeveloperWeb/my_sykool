import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';

import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import AttendanceReportCard from '../../../components/shared/card/attendancereportcard';
import Drawer from '@/components/shared/drawer/mydrawer';
import { ArrowLeftOutlined, BarChartOutlined, CheckCircleOutlined, ClockCircleOutlined, CloudOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, LeftOutlined, PlusCircleOutlined, SearchOutlined, SettingOutlined, UserAddOutlined } from '@ant-design/icons';
import { Form, Switch } from 'antd';

const cardData = [
    { id: 1, title: "Present", number: "79", dashIconClass: "icon-bg-1", icon: <UserAddOutlined /> },
    { id: 2, title: "Absent", number: "79", dashIconClass: "icon-bg-5", icon: <UserAddOutlined /> },
    { id: 3, title: "Leave", number: "79", dashIconClass: "icon-bg-2", icon: <PlusCircleOutlined /> },
    { id: 4, title: "Late ", number: "79", dashIconClass: "icon-bg-4", icon: <ClockCircleOutlined /> },
    { id: 5, title: "Holidays", number: "79", dashIconClass: "icon-bg-3", icon: <CloudOutlined /> },
    { id: 6, title: "Suspended", number: "79", dashIconClass: "icon-bg-5", icon: <ExclamationCircleOutlined /> },


];
const attendanceColumns = [
    {
        title: 'S.NO',
        dataIndex: 'no',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "5%",

    },
    {
        title: 'ID',
        dataIndex: 'id',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "5%",

    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "20%",

    },
    {
        title: 'Father Name',
        dataIndex: 'fathername',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: "20%",

    },

    {
        title: 'actions',
        dataIndex: 'actions',
        render: (actions) => (
            <div className='d-flex align-items-center'>
                {actions.map((item, index) => {
                    let className = 'bg-table-para';

                    if (item == "P") {
                        className += ' green-para';

                    } else if (item === "A") {
                        className += ' red-para';

                    }
                    else if (item === "L" || item === "SL" || item === "H") {
                        className += ' aqua-para';

                    } else if (item === "Late") {
                        className += ' orange-para';

                    } else if (item === "Off") {
                        className += ' gray-para';

                    } else if (item === "Extra Day") {
                        className += ' purple-para';

                    }

                    return (
                        <p key={index} className={className} style={{ marginRight: '8px' }} >{item}</p>
                    );
                })}
            </div>
        ),
        width: "50%",
    },

];
const attendanceData = [
    {
        key: '1',
        no: '1',
        id: ' 14',
        name: " ABDULLAH HAROON ",
        fathername: " HAROON AHMED ",
        actions: ["P", "A", "L", "SL", "Late", "H", "Off", "Extra Day"]

    },
    {
        key: '2',
        no: '1',
        id: ' 14',
        name: " ABDULLAH HAROON ",
        fathername: " HAROON AHMED ",
        actions: ["P", "A", "L", "SL", "Late", "H", "Off", "Extra Day"]

    },
    {
        key: '3',
        no: '1',
        id: ' 14',
        name: " ABDULLAH HAROON ",
        fathername: " HAROON AHMED ",
        actions: ["P", "A", "L", "SL", "Late", "H", "Off", "Extra Day"]


    },
    {
        key: '4',
        no: '1',
        id: ' 14',
        name: " ABDULLAH HAROON ",
        fathername: " HAROON AHMED ",
        actions: ["P", "A", "L", "SL", "Late", "H", "Off", "Extra Day"]

    },

];
const options = [];
for (let i = 10; i < 36; i++) {
    options.push({
        value: i.toString(36) + i,
        label: i.toString(36) + i,
    });
}
const AttendanceDetail = () => {
    const [barcodeItems, setBarcodeItems] = useState([
        { id: 1, label: 'Biometric', enabled: false },
        { id: 2, label: 'Notify Teacher', enabled: false },
        { id: 3, label: 'Notify Manager', enabled: false },
        { id: 4, label: 'Double Absent', enabled: false },

    ]);
    const [open, setOpen] = useState(false);
    const [openReport, setReportOpen] = useState(false);

    const showSettingDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);

        setReportOpen(false);


    };

    const showReportDrawer = () => {
        setReportOpen(true);
    };

    const handleSwitchChange = (id, checked) => {
        const updatedItems = barcodeItems.map((item) =>
            item.id === id ? { ...item, enabled: checked } : item
        );
        setBarcodeItems(updatedItems);
    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>

            <div className="row mt-4">

                {cardData.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2" key={item.id}>

                        <AttendanceReportCard {...item} />
                    </div>
                ))}
               <div className="col-12">
                 <IconButton
                    icon={<ArrowLeftOutlined />}
                    className="btn back-btn mb-3"
                    title="Back"
                    onClick={() => navigate(-1)}
                />
               </div>
                <div className="col-12">
                    <div className="main-box ">

                        <Form
                            name="feeSetting"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            layout="vertical"
                            className=''
                        >

                            <div className='row'>
                                <div className="col-12 col-md-6 col-lg-2 col-xl-2">
                                    <BaseInput options={options} type="select" mode="multiple" placeholder="Enter GR No. " label="Select Class" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-2 col-xl-2">
                                    <BaseInput type="select" mode="multiple" placeholder="Enter GR No. " label="Select Section" />
                                </div>
                                <div className="col-12 col-md-6 col-lg-2 col-xl-2">
                                    <BaseInput type="datepiker" placeholder="21 Apr , 2025" label="Date " />
                                </div>

                                <div className="col-12 col-md-6 col-lg-4 col-xl-6">
                                    <div className='fee-input-style d-flex align-items-center flex-wrap ga-10'>



                                        <FlatButton title="Show" className="btn save-btn bg-purple me-2 ms-3 mt-3" />

                                        <FlatButton title="Save" className="btn save-btn  me-2  px-3 mt-3" />
                                        <FlatButton title="Mark Holiday" className="btn save-btn  me-2  px-3 mt-3" />
                                        <div className='suffle-icon icon-red cam-icon ms-2 mt-3'>
                                            <FlatButton title={<DeleteOutlined />} tootlip="Delete" />
                                        </div>
                                        <div className='suffle-icon cam-icon  ms-2 mt-3'>
                                            <FlatButton title={<CheckCircleOutlined />} tootlip="Smart Attandance" onClick={showReportDrawer} />
                                        </div>
                                        <div className='suffle-icon cam-icon  ms-2 mt-3'>
                                            <FlatButton title={<BarChartOutlined />} tootlip="Reports" onClick={showReportDrawer} />
                                        </div>
                                        <div className='suffle-icon cam-icon  ms-2 mt-3'>
                                            <FlatButton title={<SettingOutlined />} tootlip="Messages" onClick={showSettingDrawer} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Form>

                        <div className='w-100 mt-3 '>
                            <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                        </div>


                        <CustomTable className="my-table mt-3" columns={attendanceColumns} data={attendanceData} />
                    </div>
                </div>
            </div>

            <Drawer title="Settings" onClose={onClose} open={open} >
                <Form
                    name="feeSetting"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    {barcodeItems.map((item) => (
                        <div
                            key={item.id}
                            className="d-flex align-items-center justify-content-between mb-4"
                        >
                            <div>
                                <h6 className="font-18 color-gray">{item.label}</h6>
                            </div>
                            <div>
                                <Switch
                                    checked={item.enabled}
                                    onChange={(checked) => handleSwitchChange(item.id, checked)}
                                />
                            </div>
                        </div>
                    ))}


                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

                </Form>
            </Drawer>
            <Drawer title="Reports" onClose={onClose} open={openReport} >
                <Form
                    name="feeSetting"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="" mode="multiple" placeholder="Select Department" label="Department" />
                    <BaseInput type="datepiker" placeholder="21 Apr , 2025" label="Date " />
                    <FlatButton htmlType="submit" className="save-btn login-btn mt-3" title="Show" />

                    <FlatButton htmlType="submit" className="save-btn login-btn bg-orangane  mt-3" title="Export" />


                </Form>
            </Drawer>
        </>
    )
}

export default AttendanceDetail
