import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomDropdown from '@/components/shared/dropdown'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import { DownOutlined, SearchOutlined, EditOutlined, LoginOutlined, RedoOutlined, ArrowUpOutlined } from '@ant-design/icons'
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form } from 'antd';

const campusItems = [
    {
        label: <p>Employees</p>,
        key: "2",
    },

]
const attendanceColumns = [
    {
        title: 'CLASS',
        dataIndex: 'class',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 150,

    },
    {
        title: 'feeType',
        dataIndex: 'feetype',
        render: text => <a className='badge bg-badge'>{text}</a>,
        width: 150,

    },
    {
        title: 'amount',
        dataIndex: 'amount',
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
const attendanceData = [
    {
        key: '1',
        class: 'Mont',
        feetype: ' Tuition Fees ',
        amount: "1600",
        actions: [<EditOutlined />]

    },
    {
        key: '2',
        class: 'Mont',
        feetype: ' Tuition Fees ',
        amount: "1600",
        actions: [<EditOutlined />]

    },
    {
        key: '3',
        class: 'Mont',
        feetype: ' Tuition Fees ',
        amount: "1600",
        actions: [<EditOutlined />]

    },
    {
        key: '4',
        class: 'Mont',
        feetype: ' Tuition Fees ',
        amount: "1600",
        actions: [<EditOutlined />]

    },

];
const Fee = () => {
    const [open, setOpen] = useState(false);
   

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
            <InnerLayout headerButtons={<HeaderButtons group="fee" />}>
                <div className="row">
                    <div className="col-12">
                        <div className="main-box">
                            <div className='d-flex  justify-content-end '>
                                <div className='d-flex align-items-center justify-content-end flex-wrap'>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Tuition Fees"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Arrears"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Late Fees"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Exam Fee"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Admission Fees"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Admission Form"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Lab Charges Fees"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Stationary Fees"
                                            icon={<DownOutlined />}
                                        />
                                    </div>
                                    <div className='mb-2'>
                                        <CustomDropdown
                                            className=" me-3"
                                            items={campusItems}
                                            title="Duplicate Receipt Fee"
                                            icon={<DownOutlined />}
                                        />
                                    </div>

                                </div>
                                <div className='d-flex  justify-content-end'>
                                    <div>
                                        <IconButton icon="+" className="plus-btn me-1" onClick={showAddClassDrawer} />
                                    </div>
                                    <div>
                                        <IconButton icon={<RedoOutlined />} className="plus-btn me-1" />
                                    </div>
                                    <div>
                                        <IconButton icon={<ArrowUpOutlined />} className="plus-btn" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className='w-100 '>
                                    <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                </div>
                            </div>

                            <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />

                        </div>
                    </div>

                </div>
            </InnerLayout>
            <Drawer title="Add Fee" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    <BaseInput type="" placeholder="Enter Fee Title " label="Fee title *" />
                    <BaseInput type="number" placeholder="0" label="Fee amount " />
                    <BaseInput type="select" placeholder="Add recurrence" label="Recurrence *" />
                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

                </Form>
            </Drawer>

        </>
    )
}

export default Fee
