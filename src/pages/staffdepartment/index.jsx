import React, { useState, memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import FlatButton from "@/components/shared/button/flatbutton";
import IconButton from "@/components/shared/button/iconbutton";
import BaseInput from "@/components/shared/inputs";
import CustomTable from "@/components/shared/table/customtable";
import Drawer from "@/components/shared/drawer/mydrawer";
import AddStaffDepartment from "./add";
import { Switch } from "antd";
import { usePaginatedQuery } from "@/hooks/reactQuery";
import {
  SearchOutlined,
  EditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddSTeacherTime from "./teachertime";
import Timing from "./timing";
import useSweetAlert from "@/hooks/useSweetAlert";
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
            onClick = () => {
              handlers.setCurrentEditDepartment(item);
              handlers.openDepartment();
            };
          } else if (item.type === DeleteOutlined) {
            className += " bg-delete";
            tooltip = "Delete";
            placement = "right";
            onClick = () =>
              handlers.handleDelete("cf98a0ed-3e5b-42d5-a09d-4e6ce2e499c5");
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
    actions: [
      <CalendarOutlined />,
      <ClockCircleOutlined />,
      <EditOutlined />,
      <DeleteOutlined />,
    ],
  }));

const StaffDepartment = () => {
  const { showAlert } = useSweetAlert();
  const [drawers, setDrawers] = useState({
    add: false,
    timings: false,
    grace: false,
  });
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [currentEditDepartment, setCurrentEditDepartment] = useState(null);

  const { data: staffDepartmentData, isLoading } = usePaginatedQuery(
    "staff_department",
    {
      params: {
        keyword: searchKeyword,
        page: currentPage,
        limit: currentPageSize,
      },
      initialPage: currentPage,
      initialPageSize: currentPageSize,
      // Enable caching for better performance
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    }
  );
  const toggleDrawer = (name) => () => {
    setDrawers((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const handleAddClick = () => {
    setCurrentEditDepartment(null); // Ensure edit data is cleared
    toggleDrawer("add")();
  };
  const handleDelete = async (uid) => {
    const result = await showAlert({
      text: "Are you sure you want to delete this department?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      console.log("working");
    }
  };
  const columns = getAttendanceColumns({
    openTimingsDrawer: toggleDrawer("timings"),
    openGraceTimeDrawer: toggleDrawer("grace"),
    openDepartment: toggleDrawer("add"),
    setCurrentEditDepartment: setCurrentEditDepartment,
    handleDelete: handleDelete,
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
                  title="Add"
                  className="add-btn btn"
                  onClick={handleAddClick}
                />
                <div className="w-100 search-group">
                  <BaseInput
                    icon={<SearchOutlined />}
                    placeholder="Search..."
                    className="search-input"
                  />
                </div>
              </div>

              <CustomTable
                className="my-table mt-4"
                columns={columns}
                data={attendanceData}
              />
            </div>
          </div>
        </div>
      </InnerLayout>

      <ReusableDrawer
        title={
          currentEditDepartment
            ? "Edit Staff Department"
            : "Add Staff Department"
        }
        open={drawers.add}
        onClose={() => {
          setCurrentEditDepartment(null);
          toggleDrawer("add")();
        }}
      >
        <AddStaffDepartment
          onClose={() => {
            setCurrentEditDepartment(null);
            toggleDrawer("add")();
          }}
          editData={currentEditDepartment}
        />
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

      <ReusableDrawer
        title="Teaching Grace Time"
        open={drawers.grace}
        onClose={toggleDrawer("grace")}
        width={800}
      >
        <AddSTeacherTime />
      </ReusableDrawer>
    </>
  );
};

export default memo(StaffDepartment);
