import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomDropdown from '@/components/shared/dropdown'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { ReloadOutlined, UploadOutlined, SearchOutlined, ShrinkOutlined, EditOutlined, LoginOutlined, FilterOutlined, ScanOutlined, UserAddOutlined, UsergroupAddOutlined, MobileOutlined, ImportOutlined, ExportOutlined, ArrowDownOutlined, ArrowUpOutlined, PrinterOutlined, PlusOutlined, CalendarOutlined, EyeOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

// Clipboard Icon
const ClipboardIcon = () => (
  <svg data-v-ef92cbd8="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard"><path data-v-ef92cbd8="" d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect data-v-ef92cbd8="" x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
);


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
          <div className="text-muted font-12 mb-1"><p className='badge bg-badge'>{data.detail}</p></div>
          <div className="text-muted font-12 mb-1"><p className='badge bg-badge'>{data.id}</p><p className='badge bg-badge ms-2'>{data.ifid}</p></div>
          <div className="text-muted font-12"><p className='badge bg-badge'>{data.date}</p></div>
        </div>
      </div>
    ),
    width: 220,
  },
  {
    title: 'contact',
    dataIndex: 'contact',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 150,
  },
  {
    title: 'department',
    dataIndex: 'department',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 150,
  },
  {
    title: 'qualification',
    dataIndex: 'qualification',
    render: (text) => text ? <span className="badge bg-badge">{text}</span> : <span className='badge bg-dashed'>-</span>,
    width: 150,
  },
  {
    title: 'designation',
    dataIndex: 'designation',
    render: (text) => text ? <span className="badge bg-badge">{text}</span> : <span className='badge bg-dashed'>-</span>,
    width: 150,
  },
  {
    title: 'status',
    dataIndex: 'status',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 150,
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    align: 'center',
    render: (actions) => (
      <div className='d-flex align-items-center'>
        {actions.map((item, index) => {
          let icon = null;
          let tooltip = '';
          let buttonClass = '';
          let placement = 'top';

          switch (item.type) {
            case 'edit':
              icon = <EditOutlined style={{ width: '14px', height: '14px' }} />;
              buttonClass = 'bg-edit';
              tooltip = 'edit';
              break;
            case 'timetable':
              icon = <ClipboardIcon style={{ width: '14px', height: '14px' }} />;
              buttonClass = 'bg-edit';
              tooltip = 'timetable';
              break;
            case 'delete':
              icon = <DeleteOutlined style={{ width: '14px', height: '14px' }} />;
              tooltip = 'delete';
              buttonClass = 'bg-delete';
              break;
            case 'left':
              icon = <CloseOutlined style={{ width: '14px', height: '14px' }} />;
              tooltip = 'left';
              buttonClass = 'bg-delete';
              break;
          }

          if (icon) {
            return (
              <FlatButton
                key={index}
                tootlip={tooltip}
                placement={placement}
                className={`badge ${buttonClass}`}
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
    no: '1',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N: Aein ',
      id: "ID: 1",
      ifid: "RFID: 1",
      date: "4 Feb 2016"
    },
    contact: '+923113828141',
    department: 'Management & Admin',
    qualification: 'MBA',
    designation: 'PRINCIPAL',
    status: 'present',
    appointed: '01 Jan 2022',
    actions: [
      { type: "timetable" },
      { type: "edit" },
      { type: 'left' },
      { type: 'delete' },
    ],
  },
  {
    key: '2',
    no: '2',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N: Wali Rustom',
      id: "ID: 2",
      ifid: "RFID: 2",
      date: "4 Feb 2016"
    },
    contact: '+923113828141',
    department: 'Management & Admin',
    qualification: '',
    designation: '',
    status: 'present',
    appointed: '01 Jan 2022',
    actions: [
      { type: "timetable" },
      { type: "edit" },
      { type: 'left' },
      { type: 'delete' },
    ],
  },
  {
    key: '3',
    no: '3',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N: Wali Rustom',
      id: "ID: 2",
      ifid: "RFID: 2",
      date: "4 Feb 2016"
    },
    contact: '+923113828141',
    department: 'Management & Admin',
    qualification: '',
    designation: 'Incharge',
    status: 'present',
    appointed: '01 Jan 2022',
    actions: [
      { type: "timetable" },
      { type: "edit" },
      { type: 'left' },
      { type: 'delete' },
    ],
  },
  {
    key: '4',
    no: '4',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N: Wali Rustom',
      id: "ID: 2",
      ifid: "RFID: 2",
      date: "4 Feb 2016"
    },
    contact: '+923113828141',
    department: 'Management & Admin',
    qualification: '',
    designation: 'ADMINISTRATOR',
    status: 'present',
    appointed: '01 Jan 2022',
    actions: [
      { type: "timetable" },
      { type: "edit" },
      { type: 'left' },
      { type: 'delete' },
    ],
  },
  {
    key: '4',
    no: '5',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'Rustum',
      detail: 'F/N: Wali Rustom',
      id: "ID: 2",
      ifid: "RFID: 2",
      date: "4 Feb 2016"
    },
    contact: '+923113828141',
    department: 'Teaching',
    qualification: '',
    designation: '',
    status: 'present',
    appointed: '01 Jan 2022',
    actions: [
      { type: "timetable" },
      { type: "edit" },
      { type: 'left' },
      { type: 'delete' },
    ],
  },
];

const Staff = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className='d-flex align-items-center flex-wrap mt-3 '>
                <div>
                  <IconButton icon="+" title="Add Staff" className="add-btn  btn me-3" onClick={() => navigate("/add-staff")} />
                </div>
                <div className='w-100 search-group'>
                  <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                </div>
                <div className='filter-icon-btn spacing me-1 ms-3'>
                  <IconButton icon={<FilterOutlined />} title="Filter" tootlip="Filter" />
                </div>
                <div className='w-20 mt-2 ms-2'>
                  <BaseInput type="select" placeholder="Working" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<ArrowDownOutlined />} tootlip="Import" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<ArrowUpOutlined />} tootlip="Export" />
                </div>

              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <div className='filter-icon-btn  me-1 ms-3'>
                  <IconButton icon={<PrinterOutlined />} title="Print Id Card" tootlip="Filter" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>

                  <FlatButton title={<MobileOutlined />} tootlip="Sync App Account" />
                </div>

              </div>
              <div className="staff-table">
                <CustomTable className="my-table mt-3" columns={salaryColumns} data={salaryData} />
              </div>

            </div>
          </div>

        </div>
      </InnerLayout>
    </>
  )
}

export default Staff
