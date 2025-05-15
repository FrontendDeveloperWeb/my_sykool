import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';
import {  SettingOutlined, PrinterOutlined, MailOutlined } from '@ant-design/icons'
import { Checkbox, Form } from 'antd';

const Report = () => {
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
        <InnerLayout headerButtons={<HeaderButtons group="report" />}>
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
                            <div className="row mt-3 align-items-center">
                                <div className="col-12 col-md-2">
                                    <BaseInput type="select"  label="Report type" placeholder="Collection Report" options={options} />
                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput type="select"  label="Report format" placeholder="Slip wise" options={options} />

                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput type="select" label="Collection Account" placeholder="All" options={options} />
                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput type="datepiker" label="Select Date" placeholder="Select Date"  />
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
                            <div className="row mt-3 align-items-center">
                                <div className="col-12 col-md-3">
                                    <BaseInput type="select" mode="multiple" label="Select Class" options={options} />
                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput type="select" mode="multiple" label="Select Section" options={options} />

                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput type="select" label="Select Year" options={options} />
                                </div>
                                <div className="col-12 col-md-3 mt-2">
                                    <FlatButton title="Show " className="btn save-btn px-5  bg-purple me-2" />
                                    <FlatButton title="Export" className="btn save-btn px-5 bg-purple me-2" />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>

            </div>
        </InnerLayout>
    )
}

export default Report
