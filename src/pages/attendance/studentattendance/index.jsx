import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import Drawer from '@/components/shared/drawer/mydrawer';
import { BarChartOutlined, CheckCircleOutlined, FileTextOutlined, MailOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';
import { Form, Switch } from 'antd';
import AttendanceDetail from './detail';

// Reusable Drawer Component
const ReusableDrawer = ({ title, open, onClose, children, width }) => (
  <Drawer title={title} onClose={onClose} open={open} width={width}>
    {children}
  </Drawer>
);

const StudentAttendance = () => {
  const [drawers, setDrawers] = useState({
    settings: false,
    smart: false,
    report: false,
    message: false,
  });

  const toggleDrawer = (key) => () => {
    setDrawers(prev => ({ ...prev, [key]: !prev[key] }));
  };

    const [showDetail, setShowDetail] = useState(false);

  const handleToggle = () => {
    setShowDetail(true); // jab click kare to detail dikhao
  };

  const onFinish = values => console.log('Success:', values);
  const onFinishFailed = errorInfo => console.log('Failed:', errorInfo);

  const [barcodeItems, setBarcodeItems] = useState([
    { id: 1, label: 'Barcode', enabled: true },
    { id: 2, label: 'Notification on arrival', enabled: true },
    { id: 3, label: 'Notification on departure', enabled: true },
    { id: 4, label: 'Show dues', enabled: true },
    { id: 5, label: 'Show recent attendance', enabled: true },
    { id: 6, label: 'Auto hide', enabled: true },
  ]);

  const handleSwitchChange = (id, checked) => {
    setBarcodeItems(items =>
      items.map(item => (item.id === id ? { ...item, enabled: checked } : item))
    );
  };


  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="attendance" />}>
         {!showDetail && (
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-7 col-xl-5">
            <div className="main-box text-center px-5">
              <div className='d-flex align-items-center justify-content-center pb-3'>
                <div className='user-img'>
                  <img src="/assets/img/user-img.png" alt="" />
                </div>
              </div>
              <p>-</p>
              <p>-</p>
              <p className='font-18'>GR # -</p>
              <p className='font-18'>Dues: -</p>
              <BaseInput type="" placeholder="Scan Here" className="mt-5" />
            </div>
            <FlatButton title="Show Details" className="btn save-btn bg-purple me-2 w-100 px-5 mt-3"  onClick={handleToggle} />
          </div>

          <div className="col-12 col-md-1 col-lg-1 col-xl-1">
            <div className='att-icon cam-icon ms-2 mb-2'>
              <FlatButton title={<SettingOutlined />} tootlip="Settings" placement="right" onClick={toggleDrawer("settings")} />
            </div>
            <div className='att-icon cam-icon ms-2 mb-2'>
              <FlatButton title={<SyncOutlined />} tootlip="Sync Attendance" placement="right" />
            </div>
            <div className='att-icon cam-icon ms-2 mb-2'>
              <FlatButton title={<CheckCircleOutlined />} tootlip="Smart Attendance" placement="right" onClick={toggleDrawer("smart")} />
            </div>
            <div className='att-icon cam-icon ms-2 mb-2'>
              <FlatButton title={<BarChartOutlined />} tootlip="Reports" placement="right" onClick={toggleDrawer("report")} />
            </div>
            <div className='att-icon cam-icon ms-2 mb-2'>
              <FlatButton title={<MailOutlined />} tootlip="Messages" placement="right" onClick={toggleDrawer("message")} />
            </div>
          </div>
        </div>
         )}
        {/* Show detail here if toggled */}
        {showDetail && (
          <div className="col-12 col-md-12">
            <AttendanceDetail />
          </div>
        )}
      </InnerLayout>

      {/* Settings Drawer */}
      <ReusableDrawer title="Settings" open={drawers.settings} onClose={toggleDrawer("settings")}>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          {barcodeItems.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between mb-4">
              <h6 className="font-18 color-gray">{item.label}</h6>
              <Switch checked={item.enabled} onChange={(checked) => handleSwitchChange(item.id, checked)} />
            </div>
          ))}
          <BaseInput type="number" placeholder="5" label="Hide After (seconds)" />
          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
        </Form>
      </ReusableDrawer>

      {/* Smart Attendance Drawer */}
      <ReusableDrawer title="Smart Attendance" open={drawers.smart} onClose={toggleDrawer("smart")}>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <BaseInput type="datepiker" placeholder="21 Apr , 2025" label="Date" />
          <BaseInput type="textarea" rows={5} placeholder="Enter gr numbers separated by space" label="Gr Number" />
          <BaseInput type="select" placeholder="Select status" label="Status" />
          <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
        </Form>
      </ReusableDrawer>

      {/* Reports Drawer */}
      <ReusableDrawer title="Reports" open={drawers.report} onClose={toggleDrawer("report")}>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <BaseInput type="select" mode="multiple" placeholder="Select class" label="Select Class" />
          <BaseInput type="datepiker" placeholder="21 Apr , 2025" label="Date" />
          <BaseInput type="select" mode="multiple" placeholder="Select status" label="Select Status" />
          <FlatButton htmlType="submit" className="save-btn login-btn mt-3" title="Show" />
          <FlatButton htmlType="submit" className="save-btn login-btn mt-3" title="Attendance Sheet" />
          <FlatButton htmlType="submit" className="save-btn login-btn bg-orangane mt-3" title="Export" />
        </Form>
      </ReusableDrawer>

      {/* Message Drawer */}
      <ReusableDrawer title="Send Message" open={drawers.message} onClose={toggleDrawer("message")}>
        <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <BaseInput type="select" mode="multiple" placeholder="Select class" label="Select Class" />
          <BaseInput type="datepiker" placeholder="21 Apr , 2025" label="Date" />
          <BaseInput type="select" mode="multiple" placeholder="Select status" label="Select Status" />
          <FlatButton htmlType="submit" className="save-btn login-btn mt-3" title="Send Message" />
        </Form>
      </ReusableDrawer>
    </>
  );
};

export default StudentAttendance;
