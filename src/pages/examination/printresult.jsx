import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';
import { Form, Switch, Tooltip } from 'antd';
import { ArrowUpOutlined, DollarOutlined, ExportOutlined, FilterOutlined, GlobalOutlined, ImportOutlined, LockOutlined, MailOutlined, MobileOutlined, PrinterOutlined, SettingOutlined, UnlockOutlined, UsergroupAddOutlined } from '@ant-design/icons';

const PrintResult = () => {
    const [open, setOpen] = useState(false);
    const [openReward, setRewardOpen] = useState(false);
    const [openSetting, setSettingOpen] = useState(false);
    const [openAverageMark, setAverageMarkOpen] = useState(false);




    const openPublishDrawer = () => {
        setOpen(true);
    };
    const openRewardDrawer = () => {
        setRewardOpen(true);
    };
    const openSettingDrawer = () => {
        setSettingOpen(true);
    };
    const openAverageMarkDrawer = () => {
        setAverageMarkOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        setRewardOpen(false);
        setSettingOpen(false);
        setAverageMarkOpen(false);

    };
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [isLocked, setIsLocked] = useState(false);

    const handleToggleLock = () => {
        setIsLocked(!isLocked);
    };
    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="examination" />}>
                <Form
                    name="exam"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >


                    <div className="main-box">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6 col-md-2">
                                <BaseInput type="select" placeholder="Select cLass" label="Class" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <BaseInput type="select" placeholder="Section" label="Section " />
                            </div>
                            <div className="col-12 col-sm-6 col-md-3">
                                <BaseInput type="select" placeholder="Select exam type" label="Exam Type" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-2">
                                <BaseInput type="select" placeholder="Select Session" label="Session" />
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="d-flex align-items-center flex-wrap  mt-2">
                                    <div className='mt-2'>
                                        <FlatButton title="Show" className="btn save-btn green-bg " />
                                    </div>
                                    <div className='filter-icon-btn filter-grey-btn ms-2 me-1 mt-2 '>
                                        <IconButton icon={<PrinterOutlined />} title="Print" tootlip="Filter" className="py-0" />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon filter-grey-btn  ms-2 mt-2'>

                                        <FlatButton title={<GlobalOutlined />} tootlip="Publish" onClick={openPublishDrawer} />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton
                                            title={isLocked ? <LockOutlined /> : <UnlockOutlined />}
                                            tootlip={isLocked ? "Unlock Result" : "Lock Result"}
                                            onClick={handleToggleLock}
                                        />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton title={<MailOutlined />} tootlip="Send WhatsApp" />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton title={<DollarOutlined />} tootlip="Fee Reward" onClick={openRewardDrawer}  />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton title={<SettingOutlined />} tootlip="Settings" onClick={openSettingDrawer} />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton title={<ArrowUpOutlined />} tootlip="Export" />
                                    </div>
                                    <div className='filter-icon-grey-btn cam-icon ms-2 mt-2'>
                                        <FlatButton title={<ExportOutlined />} tootlip="Average /Grace Marks" onClick={openAverageMarkDrawer} />
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </Form>

            </InnerLayout>
            <Drawer title="Publish Result" onClose={onClose} open={open} >
                <Form
                    name="result"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    
                   <BaseInput type="datepiker" placeholder="Select Date" label="Publish From" />
                   <BaseInput type="datepiker" placeholder="Select Date" label="Publish Till" />
                   <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Publish" />
                   
                </Form>
            </Drawer>
            <Drawer title="Fee Reward" onClose={onClose} open={openReward} >
                <Form
                    name="reward"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    
                   <BaseInput type="select" placeholder="Mont" label="Class " />
                   <BaseInput type="select" placeholder="A" label="Section" />
                   <BaseInput type="" placeholder="Enter Statndaed Fee" label="Class Statndard Fee" />
                   <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Apply Discount" />
                   
                </Form>
            </Drawer>
            <Drawer title="Result Settings" onClose={onClose} open={openSetting} >
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    
                   <BaseInput type="datepiker" placeholder="Select Date" label="Date" />
                   <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
                   
                </Form>
            </Drawer>
            <Drawer title="Average / Grace Marks" onClose={onClose} open={openAverageMark} >
                <Form
                    name="marks"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                    className=''
                >
                    
                   <BaseInput type="select" placeholder="Select class" label="Class" />
                   <BaseInput type="select" placeholder="Select section" label="Section" />
                   <BaseInput type="select" placeholder="Select session" label="Session" />
                   <BaseInput type="select" placeholder="Select exam type to update" label="Update Marks For" />
                   <BaseInput type="select" placeholder="Select exam type" label="Based On" />
                   <BaseInput type="select" placeholder="Select " label="Type" />
                   <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
                   
                </Form>
            </Drawer>
        </>
    )
}

export default PrintResult
