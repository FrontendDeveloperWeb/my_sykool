import React, { useState, memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import CustomDropdown from "@/components/shared/dropdown";
import FlatButton from "@/components/shared/button/flatbutton";
import IconButton from "@/components/shared/button/iconbutton";
import BaseInput from "@/components/shared/inputs";
import CustomTable from "@/components/shared/table/customtable";
import {
  DownOutlined,
  SearchOutlined,
  ShrinkOutlined,
  EditOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import Drawer from "@/components/shared/drawer/mydrawer";
import AddClass from "./add";
import Adddeparment from "./adddeparment";
import { useMutation, useQuery } from "../../hooks/reactQuery";
import useSweetAlert from "@/hooks/useSweetAlert";
// Constants
const attendanceColumns = [
  {
    title: "CLASS",
    dataIndex: "class",
    render: (text) => <a className="badge bg-badge">{text}</a>,
    width: 150,
  },
  {
    title: "Section",
    dataIndex: "section",
    render: (section) => (
      <>
        {(section || []).flat().map((item, index) => (
          <a
            key={index}
            className="badge bg-badge"
            style={{ marginRight: "8px" }}
          >
            {item}
          </a>
        ))}
      </>
    ),
    width: 150,
  },
  {
    title: "actions",
    dataIndex: "actions",
    render: (actions) => (
      <div className="d-flex align-items-center">
        {actions.map((item, index) => {
          let className = "ba dge";
          let tooltip = "";
          let placement = "";
          if (item.type === EditOutlined) {
            className += " bg-edit";
            tooltip = "Edit";
            placement = "left";
          } else if (item.type === LoginOutlined) {
            className += " bg-exit";
            tooltip = "Left Class";
            placement = "right";
          }

          return (
            <FlatButton
              tootlip={tooltip}
              placement={placement}
              key={index}
              className={className}
              style={{ marginRight: "8px" }}
              title={item}
            />
          );
        })}
      </div>
    ),
    width: 20,
  },
];

const attendanceData = [
  {
    key: "1",
    class: "Mont",
    section: ["A"],
    actions: [<EditOutlined />, <LoginOutlined />],
  },
  {
    key: "2",
    class: "Mont",
    section: ["A", "B"],
    actions: [<EditOutlined />, <LoginOutlined />],
  },
  {
    key: "3",
    class: "Mont",
    section: ["A", "B"],
    actions: [<EditOutlined />, <LoginOutlined />],
  },
  {
    key: "4",
    class: "Mont",
    section: ["A", "B"],
    actions: [<EditOutlined />, <LoginOutlined />],
  },
];

// Reusable Drawer Component
const ReusableDrawer = ({ title, open, onClose, children }) => (
  <Drawer title={title} onClose={onClose} open={open}>
    {children}
  </Drawer>
);

const ManageClasses = () => {
  const { showAlert } = useSweetAlert();

  const [drawers, setDrawers] = useState({
    class: false,
    department: false,
  });

  const { data: departmentData } = useQuery("departments", {
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const { mutate: deleteDepartment } = useMutation("delete_department", {
    showSuccessNotification: true,
    invalidateQueries: ["departments"],
  });

  const toggleDrawer = (drawerName) => () => {
    setDrawers((prev) => ({ ...prev, [drawerName]: !prev[drawerName] }));
  };
  const departmentItems =
    departmentData?.data?.flatMap((department) => [
      {
        key: `edit-${department.uid}`,
        label: <p onClick={toggleDrawer("department")}>Edit</p>,
      },
      {
        key: `delete-${department.uid}`,
        label: (
          <p onClick={() => handleDeleteDepartment(department.uid)}>Delete</p>
        ),
      },
    ]) || [];
  const handleDeleteDepartment = async (departmentId) => {
    const result = await showAlert({
      text: "Are you sure you want to delete this department?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      deleteDepartment({ data: "", slug: departmentId });
    }
  };
  return (
    <>
      <InnerLayout headerButtons={<HeaderButtons group="dashboard" />}>
        <div className="row">
          <div className="col-12">
            <div className="main-box">
              <div className="d-flex align-items-center justify-content-end">
                <div className="me-2">
                  {departmentData?.data?.length > 0 ? (
                    <CustomDropdown
                      items={departmentItems}
                      type="edit"
                      title={departmentData?.data[0]?.name}
                      icon={<DownOutlined />}
                    />
                  ) : (
                    <div
                      style={{
                        padding: "8px 15px",
                        border: "1px solid #d9d9d9",
                        borderRadius: "2px",
                      }}
                    >
                      No departments available
                    </div>
                  )}
                </div>
                <div>
                  <IconButton
                    icon="+"
                    className="plus-btn"
                    onClick={toggleDrawer("department")}
                  />
                </div>
              </div>

              {/* Search and Add Class Row */}
              <div className="d-flex align-items-center mt-3">
                <IconButton
                  icon="+"
                  title="Add Class"
                  className="add-btn btn"
                  onClick={toggleDrawer("class")}
                />
                <div className="w-100 search-group">
                  <BaseInput
                    icon={<SearchOutlined />}
                    placeholder="Search....."
                    className="search-input"
                  />
                </div>
                <div className="suffle-icon cam-icon ms-2">
                  <ShrinkOutlined />
                </div>
              </div>

              {/* Table */}
              <CustomTable
                className="my-table mt-4"
                columns={attendanceColumns}
                data={attendanceData}
              />
            </div>
          </div>
        </div>
      </InnerLayout>

      {/* Drawers */}
      <ReusableDrawer
        title="Add Class"
        open={drawers.class}
        onClose={toggleDrawer("class")}
      >
        <AddClass />
      </ReusableDrawer>

      <ReusableDrawer
        title="Add Department"
        open={drawers.department}
        onClose={toggleDrawer("department")}
      >
        <Adddeparment onClose={toggleDrawer("department")} />
      </ReusableDrawer>
    </>
  );
};

export default memo(ManageClasses);
