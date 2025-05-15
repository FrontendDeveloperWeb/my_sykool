import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { ArrowDownOutlined, FileTextOutlined,  MailOutlined, PrinterOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Checkbox, Form, Switch, Tooltip } from 'antd';


const attendanceColumns = [
  {
    title: 'gr',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'name',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'CLASS',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'fee type',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'details',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'late fee',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'balance',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


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
    width: 150,
  },

];
const attendanceData = [];
const searchColums = [
  {
    title: 'Student',
    dataIndex: 'student',
    render: text => <a className='badge bg-badge '>{text}</a>,


  },
]
const FeeCollection = () => {
  const [open, setOpen] = useState(false);
  const [openSearch, setSearchOpen] = useState(false);



  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTable = () => {
    setIsExpanded(!isExpanded);
  };

  const showAddClassDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    setSearchOpen(false);
  };

  const showsearchDrawer = () => {
    setSearchOpen(true);
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
          <div className="col-12 col-md-8 col-lg-9">
            <div className="main-box py-4">
              <Form
                name="feeSetting"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=''
              >

                <div className='fee-input-style d-flex align-items-center flex-wrap ga-10'>
                  <BaseInput type="" placeholder="Enter GR No. " label="GR #" />
                  <BaseInput type="" placeholder="Enter Family code" label="Family code " />
                  <BaseInput type="" placeholder="Enter Challan no " label="Challan No " />
                  <Switch defaultChecked onChange={onChange} className='me-3' />
                  <FlatButton title="Show" className="btn save-btn bg-purple me-2 mt-3" />
                  <div className='suffle-icon cam-icon me-3 ms-2 mt-3'>
                    <FlatButton title={<SearchOutlined />} onClick={showsearchDrawer} />
                  </div>
                  <FlatButton title="Create Fee" className="btn save-btn  bg-purple me-2 spacing px-5 mt-3" />
                </div>
              </Form>
              <div className='d-flex align-items-center justify-content-end mt-3'>
                <div className='filter-icon-btn '>
                  <IconButton title="Print Report" tootlip="" />
                </div>
                <div className='filter-icon-btn   ms-2'>
                  <IconButton title="Upload" tootlip="" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<FileTextOutlined />} tootlip="Print Slip" />
                </div>
              </div>
              <div className='mt-1'>
                <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />
              </div>
            </div>
            <div className="main-box">
              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <h4 className='me-3'>Fee History</h4><PrinterOutlined />
                </div>
                <div onClick={toggleTable} style={{ cursor: 'pointer' }}    >
                  <ArrowDownOutlined />
                </div>

              </div>
              <div className={`table-collapse-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <div className="main-box">
              <div className="text-end" onClick={showAddClassDrawer}>
                <Tooltip placement='left' title="Setting">
                  <SettingOutlined />
                </Tooltip>
              </div>
              <div className='d-flex align-items-center justify-content-center border-bottom pb-3' >
                <div className='user-img'>
                  <img src="/assets/img/user-img.png" alt="" />
                </div>
              </div>
              <div className='d-flex align-items-center mt-3'>
                <div>
                  <div className='filter-icon-btn spacing '>
                    <IconButton icon={<PrinterOutlined />} title="Print" />
                  </div>
                </div>
                <div>
                  <div className='suffle-icon cam-icon ms-2'>
                    <FlatButton title={<MailOutlined />} tootlip="" />
                  </div>
                </div>
              </div>
              <Form
                name="feeSetting"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className='mt-3'
              >
                <BaseInput type="" placeholder="Total dues " label="Total dues" />
                <BaseInput type="" placeholder="Receiving amount " label="Receiving amount" />
                <BaseInput type="" placeholder="Balance " label="Balance" />
                <BaseInput type="select" placeholder="Cash" label="Collection Account" />
                <BaseInput type="datepiker" placeholder="Enter Fee Title " label="Receiving Date" />
                <BaseInput type="textarea" rows={5} placeholder="Enter note " label="Note" />
                <FlatButton htmlType="submit" className="save-btn bg-purple login-btn mt-2" title="Receive" />

              </Form>
            </div>
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

          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

        </Form>
      </Drawer>
      <Drawer title="Search" onClose={onClose} open={openSearch} >
        <Form
          name="search"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >

          <BaseInput type="select" placeholder="Enter Fee Title " label="Status" />
          <div className='w-100 '>
            <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
          </div>
          <div className='w-100 '>
            <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
          </div>
          <CustomTable className="my-table mt-4" columns={searchColums} data={attendanceData} />

        </Form>
      </Drawer>
    </>
  )
}

export default FeeCollection
