import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomDropdown from '@/components/shared/dropdown'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';
import UploadProfile from "@/components/shared/inputs/uploadprofile"
import { PrinterOutlined, SettingOutlined, } from '@ant-design/icons'
import { Form, Tooltip } from 'antd';

const AddJounal = () => {
    const [open, setOpen] = useState(false);
    const [vouchereOpen, setVoucherOpen] = useState(false);
    const [rows, setRows] = useState([{}]);

    const addRow = () => {
      setRows([...rows, {}]);
    };
  
    const removeRow = (indexToRemove) => {
      setRows(rows.filter((_, index) => index !== indexToRemove));
    };

    const onClose = () => {
        setOpen(false);
        setDepositOpen(false);
        setLoanOpen(false);
    };
    const showVoucherDrawer = () => {
        setVoucherOpen(true);
    };
    const onCloseVoucher = () => {
        setVoucherOpen(false);
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
                <h5>Journal Entry</h5>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    <div className="main-box mt-3">
                        <div className="row">
                            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                <div className='position-relative'>
                                    <BaseInput type="select" placeholder="Select Type" label="Voucher Type" />
                                    <div className='setting-icon' onClick={showVoucherDrawer}>
                                        <Tooltip title="Setting">
                                            <SettingOutlined />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                                <BaseInput type="datepiker" placeholder="25 Apr , 2025" label="Date" />
                            </div>
                            <div className="col-12 col-sm-4 col-md-3 col-lg-3">
                                <BaseInput type="" placeholder="Enter cheque title " label="Cheque title" />
                            </div>
                        </div>



                    </div>
                    <div className="main-box mt-3 mb-0">
                        {rows.map((row, index) => (
                            <div className="row align-items-center mb-2" key={index}>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                                    <BaseInput type="select" placeholder="Select account" label="Account" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                                    <BaseInput type="text" placeholder="0" label="Debit" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                                    <BaseInput type="text" placeholder="0" label="Credit" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-2">
                                    <BaseInput type="text" placeholder="Enter cheque no" label="Cheque No" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-3">
                                    <BaseInput type="" placeholder="Enter note" label="Note" />
                                </div>
                                <div className="col-12 col-sm-4 col-md-2 col-lg-1">
                                    
                                    {index === rows.length - 1 && (
                                        <IconButton icon="+" className="plus-btn me-1" onClick={addRow} />
                                    )}
                                    
                                    {rows.length > 1 && (
                                        <IconButton icon="×" className="plus-btn bg-danger" onClick={() => removeRow(index)} />
                                    )}
                                </div>
                            </div>
                        ))}



                    </div>
                    <div className="row mt-3">
                        <div className="col-12 col-md-2 offset-md-2">
                            <h5 className="font-600 font-16">Rs. 0</h5>
                        </div>
                        <div className="col-12 col-md-2">
                            <h5 className="font-600 font-16">Rs. 0</h5>

                        </div>
                    </div>
                    <h5>Attachments</h5>
                    <div className="main-box mt-3">
                        <UploadProfile />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-4">
                            <FlatButton htmlType="submit" className="save-btn login-btn  mt-3" title="Save" />
                            <IconButton icon={<PrinterOutlined />} htmlType="submit" className="save-btn login-btn mt-3" title="Save & Print" />
                            <FlatButton htmlType="submit" className="save-btn login-btn bg-orangane mt-3" title="Request For Approval" />

                        </div>
                    </div>

                </Form>
            </InnerLayout>
            <Drawer title="Voucher Settings" onClose={onCloseVoucher} open={vouchereOpen} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="select" placeholder="Select account" label="CPV" />
                    <BaseInput type="select" placeholder="Select account" label="BPV" />
                    <BaseInput type="select" placeholder="Select account" label="CRV" />
                    <BaseInput type="select" placeholder="Select account" label="BRV" />
                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
                </Form>
            </Drawer>
        </>
    )
}

export default AddJounal
