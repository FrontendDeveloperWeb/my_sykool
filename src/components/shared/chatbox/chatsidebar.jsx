import React, { useState } from 'react';
import Drawer from '@/components/shared/drawer/mydrawer';
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import { Avatar, Input, Tooltip, Form, Switch } from "antd";
import { EditOutlined, MailOutlined, ReloadOutlined, SearchOutlined, SettingOutlined, UsergroupAddOutlined, UserOutlined } from "@ant-design/icons";

const users = [
    { name: "ABDUL JABBAR", grn: "GRN - 167 | X 2024-2025 - A", date: "Apr 11" },
    { name: "FIZA", grn: "GRN - 2066 | IX - A", date: "Mar 24" },
    { name: "GOHAR ALI", grn: "GRN - 2012 | IX - A", date: "Mar 24" },
    { name: "ZAIB-UN-NISA", grn: "GRN - 1999 | IX - A", date: "Mar 24" },
    { name: "GUL NAZ", grn: "GRN - 1981 | IX - A", date: "Mar 24" },
    { name: "AISHA", grn: "GRN - 1974 | IX - A", date: "Mar 24" },
    { name: "MEHER SIMRAN", grn: "GRN - 1959 | IX - A", date: "Mar 24" },
    { name: "AMNA", grn: "GRN - 1951 | IX - A", date: "Mar 24" },
    { name: "KOMAL NAZ", grn: "GRN - 1846 | IX - A", date: "Mar 24" },
];

const ChatSidebar = () => {
    const [open, setOpen] = useState(false);
    const [openSetting, setOpenSetting] = useState(false);


     const [barcodeItems, setBarcodeItems] = useState([
        { id: 1, label: 'App Notifications', enabled: true },
        { id: 2, label: 'WhatsApp', enabled: true },
        { id: 3, label: 'Send to Father', enabled: true },
        { id: 4, label: 'Send to Mother', enabled: true },
        { id: 5, label: 'Send to Student', enabled: true },
        { id: 6, label: 'Family Wise SMS', enabled: false },

        
      ]);
      const handleSwitchChange = (id, checked) => {
        const updatedItems = barcodeItems.map((item) =>
          item.id === id ? { ...item, enabled: checked } : item
        );
        setBarcodeItems(updatedItems);
      };

    const showNotificationDrawer = () => {
        setOpen(true);
    };
    const showSettingDrawer = () => {
        setOpenSetting(true);
    };
    const onClose = () => {
        setOpen(false);
        setOpenSetting(false);


    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>

            <div className="sidebar">
                <div className='chat-fixed-search'>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <div className='chat-searh'>
                            <Input placeholder="Search..." prefix={<SearchOutlined />} className="search-input" />
                        </div>
                        <div className='chat-icon' >
                            <Tooltip title="Manage Groups">
                                <UserOutlined />
                            </Tooltip>
                        </div>
                        <div className='chat-icon' onClick={showNotificationDrawer}>
                            <Tooltip title="New Message">
                                <EditOutlined />
                            </Tooltip>

                        </div>
                        <div className='chat-icon'>
                            <Tooltip title="Outbox">
                                <MailOutlined />
                            </Tooltip>

                        </div>
                        <div className='chat-icon' onClick={showSettingDrawer}>
                            <Tooltip title="Settings">
                                <SettingOutlined />
                            </Tooltip>

                        </div>
                    </div>

                </div>
                <div className="chat-list">
                    <h4>Chats</h4>
                    {users.map((user, index) => (
                        <div key={index} className="chat-user">
                            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" size={45} />
                            <div className="user-details">
                                <div className="user-name">{user.name}</div>
                                <div className="user-grn">{user.grn}</div>
                            </div>
                            <div className="chat-date">{user.date}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Drawer title="Add Template" onClose={onClose} open={open} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >

                    <BaseInput type="" placeholder="Enter Title" label="Select Status" />
                    <div className="row align-items-center">
                        <div className="col-12 col-md-10">
                            <BaseInput type="" mode="multiple" placeholder="All classes" label="Select Class" />
                        </div>
                        <div className="col-12 col-md-2">
                            <div className='suffle-icon cam-icon ms-2 mt-2'>
                                <FlatButton title={<UsergroupAddOutlined />} tootlip="Show Recipients" />
                            </div>
                        </div>
                    </div>
                    <BaseInput type="select" placeholder="Select template" label="Select template" />
                    <BaseInput type="textarea" rows={10} placeholder="your message" label="Message" />

                    <FlatButton htmlType="submit" className="save-btn login-btn bg-purple mt-2 mb-3" title="Send" />
                    <FlatButton htmlType="submit" className="save-btn login-btn bg-orangane mt-2 mb-3" title="Send as draft" />
                    <FlatButton htmlType="submit" className="save-btn login-btn bg-danger  mt-2" title="Clear Outbox" />


                </Form>
            </Drawer>
            <Drawer title="Setting" onClose={onClose} open={openSetting} >
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
        </>
    );
};

export default ChatSidebar;