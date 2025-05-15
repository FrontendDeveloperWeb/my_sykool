import React, { useState, useEffect, useRef } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import DashCard from '@/components/shared/card/dashcard'
import CustomTable from '@/components/shared/table/customtable';
import HeaderButtons from '@/components/shared/headerbuttons';
import { DatePicker } from 'antd';
import { ArrowUpOutlined, CalendarOutlined, FileTextOutlined, UserOutlined ,UserSwitchOutlined ,QuestionCircleOutlined, ExclamationCircleOutlined ,UsergroupAddOutlined, LineChartOutlined } from '@ant-design/icons';


const cardData = [
  { id: 1, title: "Today's Collection" , dashIconClass : "icon-bg-1" , icon: <ArrowUpOutlined /> },
  { id: 2, title: "No. of Receip", dashIconClass : "icon-bg-2",icon: <FileTextOutlined /> },
  { id: 3, title: "Students", dashIconClass : "icon-bg-3",icon: <UserOutlined /> },
  { id: 4, title: "Staff" , dashIconClass : "icon-bg-4",icon: <UserSwitchOutlined />},
  { id: 5, title: "Inquiries " ,dashIconClass : "icon-bg-2" ,icon: <QuestionCircleOutlined />},
  { id: 6, title: "Dues" , dashIconClass : "icon-bg-5" ,icon: <ExclamationCircleOutlined />},
  { id: 7, title: "Families" , dashIconClass : "icon-bg-3",icon: <UsergroupAddOutlined />},
  { id: 8, title: "Monthly Estimation ", dashIconClass : "icon-bg-1",icon: <LineChartOutlined /> },
];
const columns = [
  {
    title: 'FEETYPE',
    dataIndex: 'feetype',
    render: text => <a className='badge bg-badge'>{text}</a>,

  },
  {
    title: 'STUDENT',
    dataIndex: 'student',
    render: text => <a className='badge bg-badge'>{text}</a>,

  },
  {
    title: 'AMOUNT',
    dataIndex: 'amount',
    render: text => <a className='badge bg-badge'>{text}</a>,
  },
];
const data = [
  {
    key: '1',
    feetype: 'John Brown',
    student: 32,
   amount: '12000',
  },
  {
    key: '2',
    feetype: 'John Brown',
    student: 32,
   amount: '12000',
  },
  {
    key: '3',
    feetype: 'John Brown',
    student: 32,
   amount: '12000',
  },
];

const attendanceColumns = [
  {
    title: 'CLASS',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,

  },
  {
    title: 'STUDENT',
    dataIndex: 'student',
    render: text => <a className='badge bg-badge'>{text}</a>,

  },
  {
    title: 'present',
    dataIndex: 'present',
    render: text => <a className='badge bg-green'>{text}</a>,
  },
  {
    title: 'absent',
    dataIndex: 'absent',
    render: text => <a className='badge bg-red'>{text}</a>,
  },
  {
    title: 'leave',
    dataIndex: 'leave',
    render: text => <a className='badge bg-aqua'>{text}</a>,
  },
  {
    title: 'late',
    dataIndex: 'late',
    render: text => <a className='badge bg-orange'>{text}</a>,
  },
];
const attendanceData = [
  {
    key: '1',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '2',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '3',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '4',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '5',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '6',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '7',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '8',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
  {
    key: '9',
    class: 'JX 2024-2025-A',
    student: "2",
    present: '0',
    absent: '0 ',
    leave: "2",
    late: '0',
  },
];


const Dashboard = () => { ``
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <InnerLayout headerButtons={<HeaderButtons group="dashboard" />}>
      <div className="row">
        {cardData.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-4" key={item.id}>
            <DashCard title={item.title} dashIconClass={item.dashIconClass} icon={item.icon} />
          </div>
        ))}
      </div>
      <div className="row match-height">
        <div className="col-12 col-sm-6 col-md-7">
          <div className="dues-box h-400">
            <p className='font-20 pt-4 pb-4 px-3'>Outstanding Dues</p>
            <CustomTable className="my-table" columns={columns}  data={data}   scroll={{ y: 55 * 5 }} />
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-5">
          <div className="dues-box h-400">
            <p className='font-20 pt-4 '>Outstanding Dues</p>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-12">
          <div className="dues-box">
            <div className='d-flex align-items-center justify-content-between px-2'>
              <div><p className='font-19 pt-4 pb-4 '>Student Attendance</p></div>
              <div>
                <DatePicker onChange={onChange} prefix={<CalendarOutlined />} placeholder={"15 Apr, 2025"} 	 />
              </div>
            </div>
            <div className='d-flex align-items-center px-3 mb-4'>
              <div className='me-3'><span>Total :</span> <span className='badge bg-badge'>1039</span></div>
              <div className='me-3'><span>P :</span> <span className='badge bg-badge'>0</span></div>
              <div className='me-3'><span>A :</span> <span className='badge bg-badge'>1039</span></div>
              <div className='me-3'><span>L :</span> <span className='badge bg-badge'>0</span></div>
              <div className='me-3'><span>Late :</span> <span className='badge bg-badge'>0</span></div>
            </div>
            <CustomTable className="my-table" columns={attendanceColumns}  data={attendanceData}   scroll={{ y: 55 * 5 }} />
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-5">
        <div className="col-12 col-md-6">
          <div className="dues-box h-400 p-2">
          <p className='font-20 pt-3'>Weekly Collection</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="dues-box h-400 p-2">
          <p className='font-20 pt-3 '>Yearly Summary</p>
        </div>
        </div>

      </div>
    </InnerLayout>
  )
}

export default Dashboard
