import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, CloseOutlined, } from '@ant-design/icons'

const getAttendanceColumns = (openTimingsDrawer, openGraceTimeDrawer) => [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 300,

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
                    let onClick = () => { };
                    if (item.type === CalendarOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Timings';
                        placement = 'left';
                        onClick = () => openTimingsDrawer();
                    } else if (item.type === CloseOutlined) {
                        className += ' bg-delete';
                        tooltip = 'Exclude';
                        placement = 'right';
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} onClick={onClick} style={{ marginRight: '8px' }} title={item} />

                    );
                })}
            </div>
        ),
        width: 20,
    },

];
const attendanceData = [
    {
        key: '1',
        name: 'Mont',
        actions: [, <CloseOutlined />]

    },
    {
        key: '2',
        name: 'Mont',
        actions: [, <CloseOutlined />]

    },
    {
        key: '3',
        name: 'Mont',
        actions: [, <CloseOutlined />]

    },
    {
        key: '4',
        name: 'Mont',
        actions: [, <CloseOutlined />]

    },

];
const Subjects = () => {
    const [open, setOpen] = useState(false);
    const [departmentOpen, departmentSetOpen] = useState(false);
    const [timingsDrawerVisible, setTimingsDrawerVisible] = useState(false);
    const [graceTimeDrawerVisible, setGraceTimeDrawerVisible] = useState(false);


    const showAddClassDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        departmentSetOpen(false);
        setTimingsDrawerVisible(false);
        setGraceTimeDrawerVisible(false);
    };

    const openTimingsDrawer = () => {
        // logic to open drawer
        setTimingsDrawerVisible(true);
    };

    const openGraceTimeDrawer = () => {
        // logic to open another drawer
        setGraceTimeDrawerVisible(true);
    };
    const columns = getAttendanceColumns(openTimingsDrawer, openGraceTimeDrawer);
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-7">
                    <div className="main-box">
                        <div className="d-flex align-items-center justify-content-between border-bottom pb-3"><div className="">
                            <h4>Subjects Enrollment</h4>
                        </div>
                        </div>


                        <CustomTable className="my-table mt-4" columns={columns} data={attendanceData} />

                    </div>
                </div>

            </div>
            <Drawer title="Add Staff Department" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="" placeholder="Enter Department name" label="Department" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

                </Form>
            </Drawer>
            <Drawer title="Add Department" onClose={onClose} open={departmentOpen} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="" placeholder="Department name" label="Enter department name" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

                </Form>
            </Drawer>
            <Drawer title="Teaching Timings" onClose={onClose} open={timingsDrawerVisible} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="" placeholder="Enter Department name" label="Department" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

                </Form>
            </Drawer>
            <Drawer title="Teaching Grace Time" onClose={onClose} open={graceTimeDrawerVisible} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="number" placeholder="0" label="Grace Time (minutes)" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

                </Form>
            </Drawer>
        </>
    )
}

export default Subjects
