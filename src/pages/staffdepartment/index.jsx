import React, { useState, memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import FlatButton from "@/components/shared/button/flatbutton";
import IconButton from "@/components/shared/button/iconbutton";
import BaseInput from "@/components/shared/inputs";
import CustomTable from "@/components/shared/table/customtable";
import Drawer from "@/components/shared/drawer/mydrawer";
import AddStaffDepartment from "./add";
import { Form, Switch } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddSTeacherTime from "./teachertime";
import Timing from "./timing";

// Reusable Drawer Component
const ReusableDrawer = ({ title, open, onClose, children, width }) => (
  <Drawer title={title} onClose={onClose} open={open} width={width}>
    {children}
  </Drawer>
);

const getAttendanceColumns = (handlers) => [
  {
    title: "Name",
    dataIndex: "name",
    render: (text) => <a className="badge bg-badge">{text}</a>,
    width: 300,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (actions) => (
      <div className="d-flex align-items-center">
        {actions.map((item, index) => {
          let className = "badge";
          let tooltip = "";
          let placement = "";
          let onClick = () => {};

          if (item.type === CalendarOutlined) {
            className += " bg-edit";
            tooltip = "Timings";
            placement = "left";
            onClick = handlers.openTimingsDrawer;
          } else if (item.type === ClockCircleOutlined) {
            className += " bg-exit";
            tooltip = "Grace Time";
            placement = "left";
            onClick = handlers.openGraceTimeDrawer;
          } else if (item.type === EditOutlined) {
            className += " bg-edit";
            tooltip = "Edit";
            placement = "left";
          } else if (item.type === DeleteOutlined) {
            className += " bg-delete";
            tooltip = "Delete";
            placement = "right";
          }

          return (
            <FlatButton
              key={index}
              className={className}
              tootlip={tooltip}
              placement={placement}
              onClick={onClick}
              title={item}
              style={{ marginRight: "8px" }}
            />
          );
        })}
      </div>
    ),
    width: 20,
  },
];

const attendanceData = Array(4)
  .fill(0)
  .map((_, i) => ({
    key: String(i + 1),
    name: "Mont",
    actions: [<CalendarOutlined />, <ClockCircleOutlined />, <EditOutlined />, <DeleteOutlined />],
  }));

const StaffDepartment = () => {
  const [drawers, setDrawers] = useState({
    add: false,
    timings: false,
    grace: false,
  });

  const toggleDrawer = (name) => () => {
    setDrawers((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const columns = getAttendanceColumns({
    openTimingsDrawer: toggleDrawer("timings"),
    openGraceTimeDrawer: toggleDrawer("grace"),
  });

  const switchonChange = (checked) => console.log(`Switch to ${checked}`);

  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="dashboard" />}>
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className="d-flex align-items-center mt-3">
                <IconButton
                  icon="+"
                  title="Add Class"
                  className="add-btn btn"
                  onClick={toggleDrawer("add")}
                />
                <div className="w-100 search-group">
                  <BaseInput icon={<SearchOutlined />} placeholder="Search..." className="search-input" />
                </div>
              </div>

              <CustomTable className="my-table mt-4" columns={columns} data={attendanceData} />
            </div>
          </div>
        </div>
      </InnerLayout>

      {/* Drawers */}
      <ReusableDrawer title="Add Staff Department" open={drawers.add} onClose={toggleDrawer("add")}>
        <AddStaffDepartment />
      </ReusableDrawer>

      <ReusableDrawer
        title={
          <div className="d-flex align-item-center">
            <div>Teaching Timings</div>
            <div className="ms-2">
              <Switch defaultChecked onChange={switchonChange} />
            </div>
          </div>
        }
        open={drawers.timings}
        onClose={toggleDrawer("timings")}
        width="500"
      >
       <Timing />
      </ReusableDrawer>

      <ReusableDrawer title="Teaching Grace Time" open={drawers.grace} onClose={toggleDrawer("grace")}>
        <AddSTeacherTime />
      </ReusableDrawer>
    </>
  );
};

export default memo(StaffDepartment);
