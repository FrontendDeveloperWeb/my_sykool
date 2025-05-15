import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined ,PrinterOutlined, GlobalOutlined, ArrowUpOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const  getAttendanceColumns = (openDateSheetDrawer) => [
    {
        title: 'Class',
        dataIndex: 'class',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 100,

    },
    {
        title: 'section',
        dataIndex: 'section',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 100,

    },
    {
        title: 'exam',
        dataIndex: 'exam',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 100,

    },
    {
        title: 'session',
        dataIndex: 'session',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 100,

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

                    if (item.type === GlobalOutlined) {
                        className += ' bg-exit';
                        tooltip = 'App Setting';
                        placement = 'right';
                        onClick = () => openDateSheetDrawer();

                    } else if (item.type === PrinterOutlined) {
                        className += '  bg-exit';
                        tooltip = 'Print';
                        placement = 'left';

                    } else if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = 'left';
                    }
                    else if (item.type === DeleteOutlined) {
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
        class: 'KG II',
        section: 'A',
        exam: 'HALF YEARLY',
        session: '2024-2025',
        actions: [<EditOutlined />, <PrinterOutlined /> , <GlobalOutlined />,  <DeleteOutlined /> ]

    },
    {
        key: '2',
        class: 'KG II',
        section: 'A',
        exam: 'HALF YEARLY',
        session: '2024-2025',
        actions: [<EditOutlined />, <PrinterOutlined /> , <GlobalOutlined />,  <DeleteOutlined /> ]

    },

];

const DateSheet = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();


    const openDateSheetDrawer = () => {
       
        setOpen(true);
      };
    const subjectcolumns = getAttendanceColumns(openDateSheetDrawer);

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
                                    <IconButton icon="+" title="Exam Category" className="add-btn btn" onClick={()=> navigate("/add-datesheet")} />
                                </div>
                                <div className='w-100 search-group'>
                                    <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                </div>
                                  <div className='suffle-icon cam-icon ms-2'>
                                    <FlatButton title={<ArrowUpOutlined />} tootlip="Export" />
                                </div>

                            </div>

                            <CustomTable className="my-table mt-4" columns={subjectcolumns} data={subjectData} />

                        </div>
                    </div>

                </div>
            </InnerLayout>
            <Drawer title="Publish Datesheet" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    <BaseInput type="datepiker" placeholder="Select Date" label="Publish From" />
                    <BaseInput type="datepiker" placeholder="Select Date" label="Publish Till" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

                </Form>
            </Drawer>
        </>
    )
}

export default DateSheet
