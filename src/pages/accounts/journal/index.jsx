import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import {  SearchOutlined,   PlusOutlined, EyeOutlined, CalendarOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const salaryColumns = [
    {
        title: 'S.No',
        dataIndex: 'no',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 100,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        render: (data) => (
            <div className="d-flex align-items-center">
                <img
                    src={data.image}
                    alt={data.username}
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        marginRight: 10,
                    }}
                />
                <div>
                    <div className="mb-1"><p className='badge bg-badge'>{data.username}</p></div>
                    <div className="text-muted font-12"><p className='badge bg-badge'>{data.detail}</p></div>
                </div>
            </div>
        ),
        width: 220,
    },
    {
        title: 'Designation',
        dataIndex: 'designation',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 150,
    },
    {
        title: 'Appointed On',
        dataIndex: 'appointed',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: 150,
    },
    {
        title: 'Actions',
        dataIndex: 'actions',
        render: (actions) => (
            <div className='d-flex align-items-center'>
                {actions.map((item, index) => {
                    let icon = null;
                    let tooltip = '';
                    let placement = 'top';

                    switch (item.type) {
                        case 'plus':
                            icon = <PlusOutlined />;
                            tooltip = 'Add';
                            break;
                        case 'eye':
                            icon = <EyeOutlined />;
                            tooltip = 'View';
                            break;
                        case 'calendar':
                            icon = <CalendarOutlined />;
                            tooltip = 'Schedule';
                            break;
                    }

                    if (icon) {
                        return (
                            <FlatButton
                                key={index}
                                tootlip={tooltip}
                                placement={placement}
                                className="badge bg-edit"
                                style={{ marginRight: '8px' }}
                                title={icon}
                            />
                        );
                    }

                    // If no icon and it's just a button with text
                    if (item.type === 'button' && item.label) {
                        return (
                            <div className='filter-icon-btn '>
                                <FlatButton
                                    key={index}
                                    title={item.label}
                                    className="btn text-only-btn"
                                    style={{ marginLeft: '8px' }}
                                />
                            </div>
                        );
                    }

                    return null;
                })}
            </div>
        ),
        width: 200,
    },
];

const salaryData = [];

const Journal = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const showSettingDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
        setDepositOpen(false);
        setLoanOpen(false);
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
                <div className="main-box">
                    <div className="row align-items-center">
                        <div className="col-5">
                           <div className="d-flex align-items-center">
                           <div>
                                <IconButton icon="+" title="Journal" className="add-btn btn me-3 " onClick={()=> navigate("/add-journal") }  />

                            </div>
                            <div className='mt-2 w-100'>
                                <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                            </div>
                           </div>
                        </div>
                        <div className="col-7">

                            <div className='d-flex align-items-center  '>
                                <div className='w-100 mt-2'>
                                    <BaseInput type="select" placeholder="All Deparments" />
                                </div>
                                <div className='w-100 mt-2 ms-3'>
                                <BaseInput type="datepiker" placeholder="Filter by date" />
                                </div>
                                <div>
                                    <FlatButton title="Payroll Report" className="btn save-btn bg-purple px-5 ms-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <CustomTable className="my-table mt-4" columns={salaryColumns} data={salaryData} />
                        </div>
                    </div>
                </div>
            </InnerLayout>
            {/* <Drawer title="Settings" onClose={onClose} open={OpenBallance} >
           <Form
             name="basic"
             initialValues={{ remember: true }}
             onFinish={onFinish}
             onFinishFailed={onFinishFailed}
             autoComplete="off"
             layout="vertical"
             className=''
           >
   
             <BaseInput type="" placeholder="Enter Balance here" label="Opening Balance" />
             <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
   
           </Form>
         </Drawer> */}
        </>
    )
}

export default Journal
