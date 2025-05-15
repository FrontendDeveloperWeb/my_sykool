import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomDropdown from '@/components/shared/dropdown'
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { SearchOutlined, EditOutlined, FilterOutlined, UserAddOutlined, UsergroupAddOutlined, MobileOutlined, PrinterOutlined, CloseOutlined, DeleteOutlined, EyeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';


const salaryColumns = (openTimingsDrawer) => [
  {
    title: 'S.No',
    dataIndex: 'no',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 5,
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
          <div className="text-muted mb-1"><p className='badge bg-badge name'>{data.gr}</p><p className='badge bg-badge name ms-1'>{data.rollnum}</p><p className='badge bg-badge name ms-1'>{data.ifid}</p><p className='badge bg-badge name mt-1'>{data.id}</p></div>
        </div>
      </div>
    ),
    width: 260,
  },
  {
    title: 'Father Name',
    dataIndex: 'fathername',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 150,
  },
  {
    title: 'contact',
    dataIndex: 'contact',
    render: text => <span className='badge bg-badge'>{text}</span>,
    width: 150,
  },
  {
    title: 'class',
    dataIndex: 'class',
    render: (text) => text ? <span className="badge bg-badge">{text}</span> : <span className='badge bg-dashed'>-</span>,
    width: 150,
  },
  {
    title: 'fees',
    dataIndex: 'fees',
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
    render: (actions, record) => (
      <div className='d-flex align-items-center'>
        {actions.map((item, index) => {
          let icon = null;
          let tooltip = '';
          let buttonClass = '';
          let placement = 'top';
          let onClick = () => { };

          switch (item.type) {
            case 'view':
              icon = <EyeOutlined style={{ width: '14px', height: '14px' }} />;
              buttonClass = 'bg-edit';
              tooltip = 'view';
              onClick = () => openTimingsDrawer();
              break;
            case 'edit':
              icon = <EditOutlined style={{ width: '14px', height: '14px' }} />;
              buttonClass = 'bg-edit';
              tooltip = 'edit';
              break;
            case 'delete':
              icon = <DeleteOutlined style={{ width: '14px', height: '14px' }} />;
              tooltip = 'delete';
              buttonClass = 'bg-delete';
              break;
            case 'info':
              icon = <InfoCircleOutlined style={{ width: '14px', height: '14px' }} />;
              tooltip = 'info';
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
                onClick={onClick}
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
      gr: "GR - 739",
      rollnum: "F# - 396",
      ifid: "RFID:",
      id: "ID: 257"
    },
    fathername: "NAWAZ ALI",
    contact: '+923113828141',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
  {
    key: '2',
    no: '2',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'ALIYAN HALEEM',
      gr: "GR - 740",
      rollnum: "F# - 497",
      ifid: "RFID:",
      id: "ID: 258"
    },
    fathername: "MUHAMMAD HALEEM MEMON",
    contact: '+923333664158',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
  {
    key: '3',
    no: '3',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'ANSHRA LABAIK YOUNUS',
      gr: "GR - 1701",
      rollnum: "F# - 184",
      ifid: "RFID:",
      id: "ID: 259"
    },
    fathername: "NAWAZ ALI",
    contact: '+923113828141',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
  {
    key: '4',
    no: '4',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'ASWA',
      gr: "GR - 742",
      rollnum: "F# - 341",
      ifid: "RFID:",
      id: "ID: 261"
    },
    fathername: "GHULAM MUSTAFA",
    contact: '+923113828141',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
  {
    key: '5',
    no: '5',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'BILAL',
      gr: "GR - 1571",
      rollnum: "F# - 497",
      ifid: "RFID:",
      id: "ID: 265"
    },
    fathername: "SHABIR AHMED",
    contact: '+923113828141',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
  {
    key: '6',
    no: '6',
    name: {
      image: 'https://i.pravatar.cc/150?img=3', // kisi bhi image url use kar sakte ho
      username: 'BILAWAL HALEEM',
      gr: "GR - 647",
      rollnum: "F# - 490",
      ifid: "RFID:",
      id: "ID: 267"
    },
    fathername: "MUHAMMAD HALEEM MEMON",
    contact: '+923113828141',
    class: 'X - A',
    fees: '2000',
    status: 'present',
    actions: [
      { type: "view" },
      { type: "edit" },
      { type: 'delete' },
      { type: 'info' },
      { type: 'left' },
    ],
  },
];

const Student = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openTimingsDrawer = () => {
    navigate("/student-detail")
  }

  const columns = salaryColumns(openTimingsDrawer);



  const showAddClassDrawer = () => {
    setOpen(true);
  };

  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className='d-flex align-items-center  mt-3 '>
                <div>
                  <IconButton icon={<UserAddOutlined />} title="Registration" className="add-btn  btn me-3" onClick={() => navigate("/add-student")} />
                </div>
                <div>
                  <IconButton icon="+" title="Admission" className="add-btn save-btn btn ms-2" onClick={() => navigate("/add-student")} />
                </div>

                <div className='w-100 search-group'>
                  <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                </div>
                <div className='filter-icon-btn spacing me-1 ms-4'>
                  <IconButton icon={<FilterOutlined />} title="Filter" tootlip="Filter" />
                </div>
                <div className='w-50 search-group'>
                  <BaseInput type="select" placeholder="Inquiry" className="search-input" />
                </div>


              </div>
              <div className="d-flex align-items-center justify-content-end mt-2">
                <div className='filter-icon-btn  student-filter-btn me-1 ms-4'>
                  <IconButton icon={<PrinterOutlined style={{ width: '16px', height: '16px' }} />} title="Print" tootlip="Print" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>

                  <FlatButton title={<MobileOutlined />} tootlip="Sync App Account" />
                </div>
                <div className='suffle-icon cam-icon ms-2'>
                  <FlatButton title={<UsergroupAddOutlined />} onClick={showAddClassDrawer} tootlip="Generate Family Code" />
                </div>
              </div>
              <div className="student-table">
                <CustomTable className="my-table mt-3" columns={columns} data={salaryData} enableRowSelection={false}/>
              </div>
            </div>
          </div>

        </div>
      </InnerLayout>

    </>
  )
}

export default Student
