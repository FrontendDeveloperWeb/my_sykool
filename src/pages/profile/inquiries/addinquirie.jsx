import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import { EditOutlined, LoginOutlined,  PlusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import { Form, Switch } from 'antd';

const attendanceColumns = [
  {
    title: 'title',
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

const AddInquirie = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleChange = (value, index) => {
    const updated = [...inputs];
    updated[index] = value;
    setInputs(updated);
  };

  const showAddClassDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = checked => {
    console.log(`switch to ${checked}`);
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
            <h5 className='mb-2 ps-3'>Inquiry Form</h5>

            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical"
              className=''
            >
              <div className="main-box">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Name *" placeholder="Enter student name" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Father name *" placeholder="Enter student father name" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Class *" type="select" placeholder="Enter branch name" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Age" placeholder="Enter age" type="number" />
                  </div>

                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Contact number *" placeholder="Enter a phone number" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Email" placeholder="xyz@yopmail.com" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput type="datepiker" label="Date" placeholder="19 Apr, 2025" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Purpose" placeholder="Emter purpose here" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput label="Tag *" placeholder="Enter tag here" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-3">
                    <BaseInput type="datepiker" label="Next follow up date" placeholder="9 Apr, 2025" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-6">
                    <BaseInput label="Last School *" placeholder="Enter last school name" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-6">
                    <BaseInput label="Residential Area " placeholder="Enter residential area" />
                  </div>
                  <div className="col-12 col-md-4 col-lg-6">
                    <BaseInput label="How did you hear about us? " placeholder="Select refernce" type="select" />
                  </div>
                  <div className="col-12 col-md-12">
                    <BaseInput label="Note " placeholder="Enter note" type="select" />
                  </div>
                  <div className='d-flex align-items-center justify-content-center mt-3 mb-4'>
                    {/* <UploadProfile /> */}
                  </div>
                </div>

              </div>
              <div className="main-box">
                <div className='text-end check-line' onClick={showAddClassDrawer}>
                  <span><span>+</span> <span>Checklist</span></span>
                </div>
              </div>
              <div className='d-flex align-items-center justify-content-between p-1 mb-3'>
                <div>
                  <h5 className='mb-2 ps-3'>Follow up</h5>
                </div>
                <div>
                  <span>Notifications: </span><Switch defaultChecked onChange={onChange} className='ms-2' />
                </div>
              </div>
              <div className="main-box">
                <div className="row">
                  <div className='row align-items-center'>
                    {inputs.map((value, index) => (
                      <div className="row" key={index}>
                        <div className="col-12 col-md-2">
                          <BaseInput
                            type="datepiker"
                            placeholder="19 ,Apr 2025"
                            label="Date"
                            className="w-100"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                          />
                        </div>
                        <div className="col-12 col-md-7">
                          <BaseInput
                            type=""
                            placeholder="Enter note here"
                            label="Note"
                            className="w-100"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                          />
                        </div>
                        <div className="col-12 col-md-2">
                          <BaseInput
                            type=""
                            placeholder="Select user"
                            label="By"
                            className="w-100"
                            value={value}
                            onChange={(e) => handleChange(e.target.value, index)}
                          />
                        </div>
                        <div className="col-12 col-md-1 mt-4">
                          <div className="purple-icon cam-icon ">
                            <FlatButton
                              title={<PlusOutlined />}
                              onClick={handleAddInput}
                              tootlip="Add more"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='row justify-content-center mb-5'>
                <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                  
              <FlatButton htmlType="submit" className="btn save-btn w-100" title="Save"  />
              </div>                    
              </div>

            </Form>

          </div>

        </div>

      </InnerLayout>
      <Drawer title="Checklist" onClose={onClose} open={open} >
        <Form
          name="ADD"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >

          <div className='row align-items-center'>

            <div className="row">
              <div className="col-12 col-md-11">
                <BaseInput
                  type=""
                  placeholder="Enter title"
                  label="Title"
                  className="w-100"


                />
              </div>
              <div className="col-12 col-md-1 mt-4">
                <div className="green-icon cam-icon ">
                  <FlatButton
                    title={<PlusOutlined />}


                  />
                </div>
              </div>
            </div>

          </div>

          <CustomTable className="my-table mt-4" columns={attendanceColumns} data={attendanceData} />

        </Form>
      </Drawer>
    </>

  )
}

export default AddInquirie
