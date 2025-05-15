import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const subjectcolumns = [
    {
        title: 'Subject',
        dataIndex: 'subject',
        render: text => <span>{text}</span>,
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
                    if (item.type === EditOutlined) {
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
        width: 20,
    },

];
const subjectData = [
    {
        key: '1',
        subject: 'Attendance',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '2',
        subject: 'Biology ',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '3',
        subject: 'Chemistry ',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '4',
        subject: 'Computer Science ',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },

];
const Subject = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    const showAddClassDrawer = () => {
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

    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="examination" />}>
                <div className="row">
                    <div className="col-12">
                        <div className="main-box">

                            <div className='d-flex align-items-center mt-3 '>
                                <div>
                                    <IconButton icon="+" title="Add Subject" className="add-btn btn" onClick={showAddClassDrawer} />
                                </div>
                                <div>
                                    <IconButton icon="+" title="Groups" className="add-btn btn ms-3" onClick={()=> navigate("/add-subject")} />
                                </div>
                                <div className='w-100 search-group'>
                                    <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                </div>

                            </div>

                            <CustomTable className="my-table mt-4" columns={subjectcolumns} data={subjectData} />

                        </div>
                    </div>

                </div>
            </InnerLayout>
            <Drawer title="Add Subject" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="textarea" rows={6} placeholder="Enter subjects seperated by comma" label="Subject *" />
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                        <div className='w-50'>
                            <FlatButton  title="Mandatory" className="add-btn w-100 py-2 btn"  />
                        </div>
                        <div className='w-50 filter-icon-btn'>
                            <FlatButton  title="Optional" className="add-btn w-100 py-2 btn ms-2"  />
                        </div>
                    </div>
                    <BaseInput type="select"  placeholder="Select classes" label="Classes"  />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" ss />

                </Form>
            </Drawer>
        </>
    )
}

export default Subject
