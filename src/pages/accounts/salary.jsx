import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import {  SearchOutlined,  SettingOutlined, MessageOutlined, PlusOutlined, EyeOutlined, CalendarOutlined } from '@ant-design/icons'
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Switch, Tooltip } from 'antd';
import AttendaceCard from '../../components/shared/card/attendacecard';
import DepositCard from '../../components/shared/card/depositcard';
import UserCard from '../../components/shared/card/usercard';
import CustomModal from '@/components/shared/modal';




const loanColumns = [
  {
    title: 'Month',
    dataIndex: 'month',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 100,
  },
  {
    title: 'Ammount',
    dataIndex: 'ammount',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 100,
  },
]
const loanData = [];
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

const salaryData = [
  {
    key: '1',
    no: '01',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N Wali Rustom',
    },
    designation: 'PRINCIPAL',
    appointed: '01 Jan 2022',
    actions: [
      { type: 'plus' },
      { type: 'eye' },
      { type: 'calendar' },
      { type: 'button', label: 'Security Deposit' },
      { type: 'button', label: 'Advance / Loan' },
    ],
  },
  {
    key: '2',
    no: '02',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N Wali Rustom',
    },
    designation: 'PRINCIPAL',
    appointed: '01 Jan 2022',
    actions: [
      { type: 'plus' },
      { type: 'eye' },
      { type: 'calendar' },
      { type: 'button', label: 'Security Deposit' },
      { type: 'button', label: 'Advance / Loan' },
    ],
  },
  {
    key: '3',
    no: '03',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N Wali Rustom',
    },
    designation: 'PRINCIPAL',
    appointed: '01 Jan 2022',
    actions: [
      { type: 'plus' },
      { type: 'eye' },
      { type: 'calendar' },
      { type: 'button', label: 'Security Deposit' },
      { type: 'button', label: 'Advance / Loan' },
    ],
  },
  {
    key: '4',
    no: '04',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N Wali Rustom',
    },
    designation: 'PRINCIPAL',
    appointed: '01 Jan 2022',
    actions: [
      { type: 'plus' },
      { type: 'eye' },
      { type: 'calendar' },
      { type: 'button', label: 'Security Deposit' },
      { type: 'button', label: 'Advance / Loan' },
    ],
  },
  {
    key: '5',
    no: '05',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N Wali Rustom',
    },
    designation: 'PRINCIPAL',
    appointed: '01 Jan 2022',
    actions: [
      { type: 'plus' },
      { type: 'eye' },
      { type: 'calendar' },
      { type: 'button', label: 'Security Deposit' },
      { type: 'button', label: 'Advance / Loan' },
    ],
  },
];

const attendanceData = [
  { title: 'Present', dates: '12', className: 'att-green' },
  { title: 'Absent', dates: '3', className: 'att-red' },
  { title: 'Leave', dates: '2', className: 'att-aqua' },
  { title: 'Late', dates: '1', className: 'att-orange' },
];
const depositData = [
  { title: 'Salary', deposit: '5000', },
  { title: 'Deposited so far', deposit: '7000', },
  { title: 'Remaining Deposits', deposit: '2000', },
  { title: 'Returned Deposits', deposit: '1500', },
];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


const Salary = () => {
  const [open, setOpen] = useState(false);
  const [OpenDeposit, setDepositOpen] = useState(false);
  const [OpenLoan, setLoanOpen] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState([]);

  const [barcodeItems, setBarcodeItems] = useState([
    { id: 1, label: ' Allow Leaves', enabled: false },
    { id: 2, label: 'Late Coming Deduction', enabled: false },
    { id: 3, label: 'Late Coming Deduction (minutes)', enabled: false },
    { id: 4, label: 'Short Leave Deduction', enabled: false },
    { id: 5, label: 'Early Departure', enabled: false },
    { id: 6, label: '100% Attendance Allowance', enabled: false },
    { id: 7, label: 'Leave Encashment', enabled: false },
    { id: 8, label: 'Sandwich Policy', enabled: false },


  ]);
 const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
 

  const showDepositDrawer = () => {
    setDepositOpen(true);

  }
  const showLoanDrawer = () => {
    setLoanOpen(true);

  }

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

  const toggleMonth = (month) => {
    if (selectedMonths.includes(month)) {
      // agar pehle se selected hai, to remove karo
      setSelectedMonths(selectedMonths.filter(m => m !== month));
    } else {
      // agar selected nahi hai, to add karo
      setSelectedMonths([...selectedMonths, month]);
    }
  };
  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="account" />}>
        <div className="main-box">
          <div className="row align-items-center">
            <div className="col-5">
              <div className='mt-2'>
                <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
              </div>
            </div>
            <div className="col-7">

              <div className='d-flex align-items-center  '>
                <div className='w-100 mt-2'>
                  <BaseInput type="select" placeholder="All Deparments" />
                </div>
                <div>
                  <FlatButton title="History" className="btn save-btn bg-purple px-5 ms-3" />
                </div>
                <div>
                  <FlatButton title="Payroll Report" className="btn save-btn bg-purple px-5 ms-3"  onClick={showModal} />
                </div>
                <div className='suffle-icon cam-icon ms-2' onClick={showSettingDrawer}>
                  <Tooltip title="Setting" >
                    <SettingOutlined />
                  </Tooltip>
                </div>
                <div className='suffle-icon cam-icon ms-2' >
                  <Tooltip title="Set Opening Balance" >
                    <MessageOutlined />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <UserCard name="QASIM RAFIQUE - Management & Admin" role="PRINCIPAL" />
            <div className="select-month border-none d-flex">
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
          <div className="row">

            {attendanceData.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <AttendaceCard {...item} />
              </div>
            ))}

          </div>
          <div className="row mt-2">
            <UserCard name="QASIM RAFIQUE - Management & Admin" role="PRINCIPAL" />
            {depositData.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <DepositCard {...item} />
              </div>
            ))}
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                <IconButton icon="+" title="Security Deposit" className="add-btn btn" onClick={showDepositDrawer} />
              </div>
              <div>

                <FlatButton title="undeposited" className="btn save-btn bg-purple me-2 ms-3 mt-3" />

              </div>
            </div>
          </div>
          <div className="row mt-2">
            <UserCard name="QASIM RAFIQUE - Management & Admin" role="PRINCIPAL" />
            <div className='mt-3'>
              <IconButton icon="+" title="Advance / Loan" className="add-btn btn" onClick={showLoanDrawer} />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <CustomTable className="my-table mt-4" columns={salaryColumns} data={salaryData} />
            </div>
          </div>
        </div>
      </InnerLayout>
      <Drawer title="Setting" onClose={onClose} open={open} width="600" >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >

          {barcodeItems.map((item) => (
            <div
              key={item.id}
              className="d-flex align-items-center justify-content-between mb-4"
            >
              <div>
                <h6 className="font-18 color-gray">{item.label}</h6>
              </div>
              <div>
                <Switch
                  checked={item.enabled}
                  onChange={(checked) => handleSwitchChange(item.id, checked)}
                />
              </div>
            </div>
          ))}

          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

        </Form>
      </Drawer>
      <Drawer title="Add Deposit" onClose={onClose} open={OpenDeposit} >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >


          <div className="row">
            <div className="col-12">
              <BaseInput type="" placeholder="0" label="Deposit Amount" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="" placeholder="12" label="Deposit Months" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="" placeholder="0" label="Amount" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="select" placeholder="April" label="Deduct From" />
            </div>
            <div className="col-12 col-md-6 mt-4">
              <BaseInput type="select" placeholder="2025" label="" />
            </div>
            <div className="col-12">
              <p>Skip Month</p>
              <div className="select-month border-none d-flex flex-wrap p-0">
                {months.map((month) => (
                  <div
                    key={month}
                    className={`month ${selectedMonths.includes(month) ? "bg-red mb-2" : "month-active mb-2"}`}
                    onClick={() => toggleMonth(month)}
                  >
                    <p>{month}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

        </Form>
      </Drawer>
      <Drawer title="Advance / Loan" onClose={onClose} open={OpenLoan} >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >


          <div className="row">
            <div className="col-12">
              <BaseInput type="" placeholder="Enter Amount" label="Amount" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="" placeholder="Enter no of months" label="Return in months" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="" placeholder="Ammount to return per month" label="Amount" />
            </div>
            <div className="col-12 col-md-6">
              <BaseInput type="select" placeholder="April" label="Deduct From" />
            </div>
            <div className="col-12 col-md-6 mt-4">
              <BaseInput type="select" placeholder="2025" label="" />
            </div>
            <div className="col-12">
              <CustomTable className="my-table mt-4" columns={loanColumns} data={loanData} />
            </div>
          </div>

          <FlatButton htmlType="submit" className="save-btn login-btn mt-4" title="Save" />

        </Form>
      </Drawer>
      <CustomModal title="Payroll Report" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel} footer={false}>
              <Form
                name="result"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=''
              >
      
                <BaseInput type="select" placeholder="Payroll" label="Report" />
                <BaseInput type="select" placeholder="All Departments" label="Departments" />
                <BaseInput type="select" placeholder="January" label="Salary Month" />
                <BaseInput type="select" placeholder="2021" label="Year" />
      
                <div className='d-flex align-items-center justify-content-end'>
                  <FlatButton htmlType="submit" className="btn save-btn bg-purple mt-3" title="Show" />
                  <FlatButton htmlType="submit" className="btn save-btn bg-purple mt-3 ms-3" title="Export" />
      
                </div>
              </Form>
            </CustomModal>
     
    </>
  )
}

export default Salary
