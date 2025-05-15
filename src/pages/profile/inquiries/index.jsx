import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import CustomModal from '@/components/shared/modal';

import { ReloadOutlined, UploadOutlined, SearchOutlined, EditOutlined, LoginOutlined, FilterOutlined, ScanOutlined, UserAddOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';

const attendanceColumns = [
  {
    title: 'S.No',
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
    title: 'Purpose',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'tag',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'Date',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'Next Followup',
    dataIndex: 'class',
    render: text => <a className='badge bg-badge'>{text}</a>,


  },
  {
    title: 'Status',
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

const ManageInquiries = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className='d-flex align-items-center mt-3 '>
                <div>
                  <IconButton icon="+" title="Inquiry" className="add-btn btn me-3" onClick={() => navigate("/add-inquiries")} />
                </div>
                <div>
                  <IconButton icon={<UserAddOutlined />} title="Visitor" className="add-btn btn ms-2" onClick={() => navigate("/add-inquiries")} />
                </div>
                <div className='suffle-icon cam-icon me-3 ms-4'>
                  <FlatButton title={<FilterOutlined />} tootlip="Filter" onClick={showModal} />
                </div>
                <div className='w-100 search-group'>
                  <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                </div>
                <div className='w-50 search-group'>
                  <BaseInput type="select" placeholder="Inquiry" className="search-input" />
                </div>

                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<ReloadOutlined />} tootlip="Refresh" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<UploadOutlined />} tootlip="Export" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<ScanOutlined />} tootlip="Generate QR Code" />
                </div>
              </div>

              <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />

            </div>
          </div>

        </div>
      </InnerLayout>
      <CustomModal title="Filters" open={isModalOpen} onOk={handleCancel} onCancel={handleCancel} footer={false}>
        <Form
          name="result"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >

          <BaseInput type="select" placeholder="Select Class" label="Class" />
          <BaseInput type="select" placeholder="Select Tag" label="Tag" />
          <BaseInput type="datepiker" placeholder="Select Date" label="Inquiry Date" />
          <BaseInput type="datepiker" placeholder="Select Date" label="Follow up Date" />

          <div className='d-flex align-items-center justify-content-end'>
            <FlatButton htmlType="submit" className="btn save-btn bg-purple mt-3" title="Show data" />

          </div>
        </Form>
      </CustomModal>
    </>
  )
}

export default ManageInquiries
