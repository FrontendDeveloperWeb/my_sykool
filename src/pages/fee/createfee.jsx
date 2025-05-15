import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';
import {  SettingOutlined, PrinterOutlined, MailOutlined } from '@ant-design/icons'
import { Checkbox, Form, Tooltip } from 'antd';



const CreateFee = () => {
    const [open, setOpen] = useState(false);
    const [selectedMonths, setSelectedMonths] = useState([]);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const feetype =[" Tuition Fees ", " Arrears ", " Late Fees "," Exam Fee "," Admission Fees "," Admission Form "," Lab Charges Fees "," Stationary Fees "]

    const toggleMonth = (month) => {
        if (selectedMonths.includes(month)) {
            // agar pehle se selected hai, to remove karo
            setSelectedMonths(selectedMonths.filter(m => m !== month));
        } else {
            // agar selected nahi hai, to add karo
            setSelectedMonths([...selectedMonths, month]);
        }
    };

 const  options=[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'tom',
          label: 'Tom',
        },
      ]

    const showAddClassDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
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
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3">
                                <div>
                                    <h5>Create Fee</h5>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <FlatButton title="Hold" className="btn save-btn me-2" />
                                    <FlatButton title="UnHold" className="btn save-btn me-2" />
                                    <div onClick={showAddClassDrawer}>
                                        <Tooltip title="setting">
                                            <SettingOutlined />
                                        </Tooltip>
                                    </div>

                                </div>
                            </div>
                            <div className="month-box mt-3">
                                <p className='mb-2'>Select Months</p>
                                <div className="select-month d-flex">
                                    {months.map((month) => (
                                        <div
                                            key={month}
                                            className={`month ${selectedMonths.includes(month) ? "month-active" : ""}`}
                                            onClick={() => toggleMonth(month)}
                                        >
                                            <p>{month}</p>
                                        </div>
                                    ))}
                                </div>


                            </div>
                            <div className="month-box mt-3">
                                <p className='mb-2'>Select Fee Type</p>
                                <div className="select-month d-flex">
                                    {feetype.map((feetype) => (
                                        <div
                                            key={feetype}
                                            className={`month ${selectedMonths.includes(feetype) ? "month-active" : ""}`}
                                            onClick={() => toggleMonth(feetype)}
                                        >
                                            <p>{feetype}</p>
                                        </div>
                                    ))}
                                </div>


                            </div>
                            <div className="row mt-3">
                                <div className="col-12 col-md-3">
                                    <BaseInput type="select" mode="multiple" label="Select Class" options={options} />   
                                </div>
                                <div className="col-12 col-md-3">
                                <BaseInput type="select" mode="multiple" label="Select Section" options={options} />   

                                </div>
                                <div className="col-12 col-md-3">
                                <BaseInput type="select"  label="Select Year" options={options} />   

                                </div>
                            </div>
                            <div className="fee-btns d-flex align-items-center justify-content-end mt-2">
                                <FlatButton title="Create Fee" className="btn save-btn me-2" />
                                <FlatButton title="Remove Fee" className="btn save-btn bg-danger me-2" />
                                <IconButton icon={<PrinterOutlined />} title=" Print Challan " className="btn back-btn me-2" />
                                <IconButton icon={<MailOutlined />} title="WhatsApp" className="btn green-btn me-2" />

                            </div>
                        </div>
                     </Form>
                    </div>

                </div>
            </InnerLayout>
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
                    <div className='d-flex align-items-center mb-3'>
                        <Checkbox onChange={onChange} className='color-light font-600 font-16'>Print Slip</Checkbox>
                        <Checkbox onChange={onChange} className='color-light font-600 ms-3 font-16'>Send SMS</Checkbox>
                    </div>
                    <BaseInput type="select" placeholder="Enter Fee Title " label="Print by" />
                    <BaseInput type="datepiker" placeholder="0" label="Issue Date " />
                    <BaseInput type="datepiker" placeholder="0" label="Due Date " />
                    <BaseInput type="datepiker" placeholder="0" label="Expiry Date " />
                    <BaseInput type="number" placeholder="0" label="Late fee " />
                    <BaseInput type="number" placeholder="0" label="Timely Discount" />
                    <BaseInput type="" placeholder="ALLIED BANK" label="Bank Name" />
                    <BaseInput type="" placeholder="TALHA RAFIQUE" label="Title of account" />
                    <BaseInput type="number" placeholder="13500010097630990012" label="Account Number" />
                    <BaseInput type="textarea" rows={10} placeholder="1. Fees must be paid between 1st to 10th of every month. 2. 10th will be considered as the last date for submission of fee. 3. Late fee Rs. 50/- after 10th of every month will be charged. 4. Fee vouchers are provided to students by their respective class teachers. However if the fee voucher is not delivered by the student, it will be responsibilty of parents to collect the same from school immedietly. 5. Rs. 20/- will be charged for issuance of duplicate voucher." label="Fee Challan Instructions" />

                <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save"  />

                </Form>
            </Drawer>

        </>
    )
}

export default CreateFee
