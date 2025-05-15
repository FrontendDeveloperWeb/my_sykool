import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomDropdown from '@/components/shared/dropdown'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import { DownOutlined, SearchOutlined, ShrinkOutlined, EditOutlined, LoginOutlined, SettingOutlined } from '@ant-design/icons'
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Tooltip } from 'antd';


const attendanceColumns = [
  {
    title: 'account',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,
    width: 150,

  },
  {
    title: 'parent',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,
    width: 150,

  },
  {
    title: 'opening balance',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,
    width: 150,

  },
  {
    title: 'code',
    dataIndex: 'class',
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
const attendanceData = [];
const ChartAccount = () => {
  const [open, setOpen] = useState(false);
  const [OpenBallance, setBallanceOpen] = useState(false);

  const showAccountDrawer = () => {
    setOpen(true);

  }
  const onClose = () => {
    setOpen(false);
    setBallanceOpen(false);
  };
  const showBalancedDrawer = () => {
    setBallanceOpen(true);
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
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              
              <div className='d-flex align-items-center mt-3 '>
                <div>
                  <IconButton icon="+" title="Add Account" className="add-btn btn" onClick={showAccountDrawer} />
                </div>
                <div className='w-100 search-group'>
                  <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                </div>
                <div className='suffle-icon cam-icon ms-2' onClick={showBalancedDrawer}>
                  <Tooltip title="Set Opening Balance" placement='left'>
                    <SettingOutlined />
                  </Tooltip>
                </div>
              </div>

              <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />

            </div>
          </div>

        </div>
      </InnerLayout>
      <Drawer title="Add Account" onClose={onClose} open={open} >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >

          <BaseInput type="select" placeholder="Department name" label="Parent Head" />
          <BaseInput type="" placeholder="Enter Code here" label="Code" />
          <BaseInput type="" placeholder="Enter Account here" label="Account" />
          <BaseInput type="select" placeholder="Select Nature" label="Nature" />
          <BaseInput type="select" placeholder="None" label="Category" />
          <BaseInput type="" placeholder="0" label="Opening Balance" />

          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

        </Form>
      </Drawer>
      <Drawer title="Settings" onClose={onClose} open={OpenBallance} >
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
      </Drawer>
    </>
  )
}

export default ChartAccount
