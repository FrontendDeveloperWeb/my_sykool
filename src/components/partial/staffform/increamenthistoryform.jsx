import React, { useState } from 'react'
import { Form } from 'antd';
import FlatButton from '@/components/shared/button/flatbutton';
import { PlusOutlined } from '@ant-design/icons';
import IconButton from '@/components/shared/button/iconbutton';
import CustomTable from '@/components/shared/table/customtable';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';



const IncreamentHistoryForm = ({buttonTitle = "Increament History" }) => {
    const [OpenDeposit, setDepositOpen] = useState(false);

   

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

                            <div className='d-flex align-items-center justify-content-between'>
                                <div>
                                    <IconButton className="add-btn px-4" onClick={showDepositDrawer} icon={<PlusOutlined />} title={buttonTitle} />
                                </div>
                                <div className='d-flex align-items-center gap-2'>
                                    <IconButton className="add-btn py-2 px-4" title="By School" />
                                    <FlatButton className="px-4 color-purple border-purple" title="By Parents" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <CustomTable  className="mt-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
                <div className='row justify-content-center mb-5'>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                        <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                    </div>
                </div>
         

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
