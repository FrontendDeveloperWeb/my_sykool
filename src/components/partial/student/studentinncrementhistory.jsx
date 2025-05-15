import React, { useState } from 'react'
import { Form } from 'antd';
import FlatButton from '@/components/shared/button/flatbutton';
import { PlusOutlined } from '@ant-design/icons';
import IconButton from '@/components/shared/button/iconbutton';
import CustomTable from '@/components/shared/table/customtable';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';

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
const data = [
    {
        date: "15 Apr 2025",
        status: "A",
        time: "12:00 AM"
    },
];

const IncreamentHistoryForm = ({ showHeaderButton, isComplaint, isSideBtns, isHeaderBtn = true, studentDetailsData, studentTableInnerDetails, enableRowSelection, buttonTitle = "Increament History" }) => {
    const [OpenDeposit, setDepositOpen] = useState(false);

    const dataToShow = studentDetailsData || columns;
    const dataInnerDtails = studentTableInnerDetails || data;

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
            <div className="row justify-content-center ">
                <div className="col-12 d-flex flex-column">
                    <div className="main-box  flex-fill">
                        <div className="row">
                            {isHeaderBtn ? (
                                <div className="col-md-12">
                                    {showHeaderButton ? (
                                        <div className='d-flex align-items-center gap-3 mb-1'>
                                            <FlatButton className="px-4 color-purple border-purple" title="This Week" />
                                            <FlatButton className="px-4 color-purple border-purple" title="This Month" />
                                            <FlatButton className="px-4 color-purple border-purple" title="This Year" />
                                            <FlatButton className="px-4 color-purple border-purple" title="Last Year" />
                                        </div>
                                    ) : (
                                        <div className='d-flex align-items-center justify-content-between'>
                                            <div>
                                                <IconButton className="add-btn px-4" onClick={showDepositDrawer} icon={<PlusOutlined />} title={buttonTitle} />
                                            </div>
                                            {isSideBtns ? null :
                                                <div className='d-flex align-items-center gap-2'>
                                                    <IconButton className="add-btn py-2 px-4" title="By School" />
                                                    <FlatButton className="px-4 color-purple border-purple" title="By Parents" />
                                                </div>}
                                        </div>
                                    )}
                                </div>
                            ) : null}
                            <div className="col-md-12">
                                <CustomTable columns={dataToShow} data={dataInnerDtails} enableRowSelection={enableRowSelection} className="mt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showHeaderButton || isComplaint ? null : (
                <div className='row justify-content-center mb-5'>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                    </div>
                </div>
            )}

            {/* Drawer Start */}
            <Drawer title="Add Complaint" onClose={onClose} open={OpenDeposit} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''>
                    <div className="row">
                        <div className="col-12">
                            <BaseInput type="" placeholder="Enter Complaint" label="Complaint" />
                        </div>
                        <div className="col-12">
                            <BaseInput type="datepiker" placeholder="Select Date" label="Date" />
                        </div>
                    </div>

                    <span className='mt-1 d-block uploadDocTxt'>Upload Documents</span>
                    <FlatButton htmlType="submit" className="bg-purple login-btn mt-2 py-3" title="Upload" />
                    <FlatButton htmlType="submit" className="save-btn login-btn mt-4 py-3" title="Save" />

                </Form>
            </Drawer>
            {/* Drawer End */}
        </>
    )
}

export default IncreamentHistoryForm
