import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Switch } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined, UserOutlined, RedoOutlined, SettingOutlined } from '@ant-design/icons'
import RoleCard from '@/components/shared/card/rolecard'
import UploadProfile from "@/components/shared/inputs/uploadprofile"


const subjectcolumns = [
    {
        title: 'User',
        dataIndex: 'user',
        render: (user) => {
            if (!user) return null;
            return (
                <div className='mt-2 mb-2 d-flex align-items-center'>
                    <div className=''>
                        <img
                            src={user.image}
                            alt='Profile'
                            style={{ width: 45, height: 45, borderRadius: '50%', marginRight: 10 }}
                        />
                    </div>
                    <div>
                        <div className='fw-bold color-purple'>{user.name}</div>
                        <div className='text-light' style={{ fontSize: 12 }}>{user.subtitle}</div>
                    </div>
                </div>
            );
        },
        width: '25%',

    },
    {
        title: 'username',
        dataIndex: 'username',
        render: text => <span>{text}</span>,
        width: "15%",

    },
    {
        title: 'role',
        dataIndex: 'role',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: "15%",

    },
    {
        title: 'actions',
        dataIndex: 'actions',
        align: "center",
        render: (actions) => (
            <div className='d-flex align-items-center justify-content-center'>
                {actions.map((item, index) => {
                    let className = 'badge';
                    let tooltip = '';
                    let placement = "";
                    let onClick = () => { };
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = 'left';
                    } else if (item.type === DeleteOutlined) {
                        className += ' bg-delete';
                        tooltip = 'Delete';
                        placement = 'right';
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} onClick={onClick} style={{ marginRight: '8px' }} title={item} />

                    );
                })}
            </div>
        ),
        width: "20%",
    },

];
const subjectData = [
    {
        key: '1',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: 'Ali Raza',
            subtitle: 'Frontend Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        username: 'talha02121',
        role: 'Administator',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '2',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: 'Ali Raza',
            subtitle: 'Frontend Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        username: 'talha02121',
        role: 'Administator',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '3',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: 'Ali Raza',
            subtitle: 'Frontend Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        username: 'talha02121',
        role: 'Administator',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '4',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user: {
            name: 'Ali Raza',
            subtitle: 'Frontend Developer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        username: 'talha02121',
        role: 'Administator',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },

];
const cardData = [
    { id: 1, title: "Today's Collection", dashIconClass: "icon-bg-3", edittitle: "Edit Role", icon: <UserOutlined /> },
    { id: 2, title: "No. of Receip", dashIconClass: "icon-bg-3", edittitle: "Edit Role", icon: <UserOutlined /> },
    { id: 3, title: "Students", dashIconClass: "icon-bg-3", edittitle: "Edit Role", icon: <UserOutlined /> },
    { id: 4, title: "Staff", dashIconClass: "icon-bg-3", edittitle: "Edit Role If it doesn't exit", icon: <UserOutlined /> },
];
const UserManagement = () => {
    const [open, setOpen] = useState(false);
    const [openAddUser, setOpenAddUser] = useState(false);

    const [barcodeItems, setBarcodeItems] = useState([
        { id: 1, label: 'Teacher App', enabled: true },
        { id: 2, label: 'Father App', enabled: true },
        { id: 3, label: 'Mother App', enabled: true },
        { id: 4, label: 'Student App', enabled: true },
    ]);
    const handleSwitchChange = (id, checked) => {
        const updatedItems = barcodeItems.map((item) =>
            item.id === id ? { ...item, enabled: checked } : item
        );
        setBarcodeItems(updatedItems);
    };

    const showAddClassDrawer = () => {
        setOpen(true);
    };
    const showAddUserDrawer = () => {
        setOpenAddUser(true)
    }
    const onClose = () => {
        setOpen(false);
        setOpenAddUser(false)

    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="usermanagement" />}>

                <RoleCard data={cardData} />

                <div className="row">
                    <div className="col-12">
                        <div className="main-box">

                            <div className='d-flex align-items-center  mt-3 '>
                                <div>
                                    <FlatButton className="btn save-btn bg-purple" style={{ marginRight: '8px' }} title="Add User" onClick={showAddUserDrawer} />

                                </div>
                                <div className='w-100 search-group'>
                                    <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                </div>
                                <div className='ms-2'>
                                    <FlatButton tootlip="Setting" placement="top" className="badge bg-edit" onClick={showAddClassDrawer} style={{ marginRight: '8px' }} title={<SettingOutlined />} />
                                </div>
                            </div>

                            <CustomTable className="my-table mt-4" columns={subjectcolumns} data={subjectData} />

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
            <Drawer title="Add User" onClose={onClose} open={openAddUser} >
                <Form
                    name="adduser"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    <div className='text-center mb-4'>
                    <UploadProfile />
                    </div>

                    <BaseInput type="" label="Name" placeholder="Name" />
                    <BaseInput type="" label="Username Year" placeholder="User Name" />
                    <BaseInput type="password" label="Password" placeholder="Password" />
                    <BaseInput type="select" label="Select role" placeholder="Select Role" />

                    <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

                </Form>
            </Drawer>
        </>
    )
}

export default UserManagement
