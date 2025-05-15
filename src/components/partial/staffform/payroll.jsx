import { Checkbox, Form, Switch } from 'antd'
import React, { useState } from 'react'
import BaseInput from "@/components/shared/inputs";
import FlatButton from '@/components/shared/button/flatbutton';
import Drawer from '@/components/shared/drawer/mydrawer';
import CustomTable from '@/components/shared/table/customtable';
import { SettingOutlined, EditOutlined, PlusOutlined, ArrowsAltOutlined, BarChartOutlined } from '@ant-design/icons';
import IconButton from '@/components/shared/button/iconbutton';
import { Space, Table, Tag } from 'antd';

const columns = [
    {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'actions',
        dataIndex: 'actions',
        align: 'end',
        render: (actions) => (
            <div className='d-flex align-items-center justify-content-end'>
                {actions.map((item, index) => {
                    let className = 'badge';
                    let tooltip = '';
                    let placement = "";
                    let onClick = () => { };
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = 'left';
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} onClick={onClick} style={{ marginRight: '8px' }} title={item} />

                    );
                })}
            </div>
        ),

    },

];
const data = [
    {
        key: 'title',
        title: 'John Brown',
        actions: [<EditOutlined />],
    },


];
const PayRoll = () => {

    const [open, setOpen] = useState(false);
    const [discountOpen, discountSetOpen] = useState(false);
    const [policy, policySet] = useState(false);
    const [payRoll, payRollSet] = useState(false);

    const onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const showAddClassDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
        discountSetOpen(false);
        policySet(false);
        payRollSet(false);
    };
    const discountDrawer = () => {
        discountSetOpen(true);
    };
    const switchonChange = checked => {
        console.log(`switch to ${checked}`);
    };
    return (
        <>

            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=''
            >
                <div className="row d-flex justify-content-center ">
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex gap-3 align-items-center border-bottom pb-3 mb-4 ">
                                <h4>Allowances </h4>
                                <div onClick={showAddClassDrawer} className="pointer-event" >
                                    <EditOutlined />
                                </div>
                            </div>
                            <div className="row align-items-center">

                                <div className="col-12 col-md-7">
                                    <BaseInput label="Allowance *" type="select" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput label="Amount *" placeholder="0" />
                                </div>
                                <div className="col-12 col-md-1">
                                    <div>
                                        <IconButton icon="+" className="plus-btn me-1" />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex gap-3 align-items-center border-bottom pb-3 mb-4 ">
                                <h4>Salary Deduction</h4>
                                <div onClick={discountDrawer} className="pointer-event" >
                                    <EditOutlined />
                                </div>
                            </div>
                            <div className="row align-items-center">

                                <div className="col-12 col-md-7">
                                    <BaseInput label="Allowance *" type="select" />
                                </div>
                                <div className="col-12 col-md-3">
                                    <BaseInput label="Amount *" placeholder="0" />
                                </div>
                                <div className="col-12 col-md-1">
                                    <div>
                                        <IconButton icon="+" className="plus-btn me-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4" >
                                <div className="">
                                    <h4>
                                        Salary Information
                                    </h4>
                                </div>
                                <div className="" onClick={policySet} >
                                    <SettingOutlined />
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-12 col-md-4">
                                    <BaseInput label="Total Salary*" type="number" placeholder="0" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <BaseInput label="Basic Salary *" placeholder="Enter Basic Salary" />
                                </div>

                                <div className="col-12 col-md-4">
                                    <BaseInput label="Leaves allowed from" placeholder="Select Date " type="datepiker" />
                                </div>

                                <div className="col-12 col-md-6">
                                    <BaseInput label="Pay Mode *" placeholder="Select Pay Mode" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Account Title" placeholder="Enter account title" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Monthly fees *" placeholder="Rs 0" />
                                </div>
                                <div className="col-12 col-md-6">
                                    <BaseInput label="Account #" placeholder="Enter A/C No" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-7 d-flex flex-column">
                        <div className="main-box  flex-fill">
                            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-4" >
                                <div className="">
                                    <h4>
                                        Custom Payroll Policy
                                    </h4>
                                </div>
                                <div className="" onClick={payRollSet} >
                                    <SettingOutlined />
                                </div>

                            </div>
                            <div className="row">


                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Allow Leaves</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Late Coming Deduction</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Late Coming Deduction (minutes)</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Short Leave Deduction</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Early Departure</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>

                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>100% Attendance Allowance</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>
                                <div className="col-12 ">
                                    <div className="d-flex align-items-center justify-content-between mb-3 ">
                                        <h5>Leave Encashment</h5>
                                        <Switch defaultChecked onChange={switchonChange} />

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>



                <div className='row justify-content-center mb-5'>
                    <div className="col-12 col-md-10 col-lg-8 col-xl-6">

                        <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save" />
                    </div>
                </div>

            </Form>

            <Drawer title="Manage  Allowances " onClose={onClose} open={open} >
                <div className="row align-items-center">
                    <div className="col-12 col-md-5">
                        <BaseInput label="Title #" type="select" placeholder="Enter A/C No" />
                    </div>
                    <div className="col-12 col-md-5">
                        <BaseInput label="Account #" type="number" placeholder="0" />
                    </div>
                    <div className="col-12 col-md-2">
                        <div className='suffle-icon icon-green-btn  cam-icon  ms-2 mt-3'>
                            <FlatButton title={<PlusOutlined />} tootlip="" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <CustomTable columns={columns} data={data} />
                    </div>
                </div>


            </Drawer>

            <Drawer title="Manage Deductions" onClose={onClose} open={discountOpen} >
                <div className="row align-items-center">
                    <div className="col-12 col-md-5">
                        <BaseInput label="Title #" type="select" placeholder="Enter A/C No" />
                    </div>
                    <div className="col-12 col-md-5">
                        <BaseInput label="Account #" type="number" placeholder="0" />
                    </div>
                    <div className="col-12 col-md-2">
                        <IconButton htmlType="submit" className="btn d-flex align-items-center justify-content-center w-100 mt-3 save-btn" icon={<PlusOutlined />} />
                    </div>
                    <div className="col-md-12">
                        <CustomTable columns={columns} data={data} />
                    </div>
                </div>
            </Drawer>

            <Drawer title="Breakup Policy" onClose={onClose} open={policy} width="500" >
                <div className="row align-items-end">
                    <div className="col-12 col-md-6">
                        <BaseInput type="select" placeholder="Enter A/C No" />
                    </div>
                    <div className="col-12 col-md-4">
                        <BaseInput label="Account #" type="number" placeholder="0" />
                    </div>
                    <div className="col-12 col-md-2 self-center d-flex align-items-center justify-content-cnter ">
                        <div>
                            <IconButton icon="+" className="plus-btn me-" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <IconButton htmlType="submit" className="btn d-flex align-items-center justify-content-center w-100 mt-3 save-btn" title="Save" />
                    </div>

                </div>
            </Drawer>
            <Drawer title="Payroll Setting" onClose={onClose} open={payRoll} >
                <div className="row">

                    <div className="col-12 ">
                        <div className="d-flex align-items-center justify-content-between mb-3 ">
                            <h5>Payroll Share Policy</h5>
                            <Switch defaultChecked onChange={switchonChange} />

                        </div>
                    </div>
                    <div className="col-12">



                        <IconButton htmlType="submit" className="btn d-flex align-items-center justify-content-center w-100 mt-3 save-btn" title="Save" />
                    </div>
                </div>
            </Drawer >

        </>
    )
}
export default PayRoll