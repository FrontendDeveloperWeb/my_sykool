import React, { useState, memo } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import CustomDropdown from "@/components/shared/dropdown";
import IconButton from "@/components/shared/button/iconbutton";
import BaseInput from "@/components/shared/inputs";
import {
  DownOutlined,
  SearchOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";
import Drawer from "@/components/shared/drawer/mydrawer";
import AddDepartment from "./adddeparment";
import { useMutation, useQuery } from "../../hooks/reactQuery";
import useSweetAlert from "@/hooks/useSweetAlert";
import Classes from "../classes";
import AddClass from "../classes/add";

// Reusable Drawer Component
const ReusableDrawer = ({ title, open, onClose, children }) => (
  <Drawer title={title} onClose={onClose} open={open}>
    {children}
  </Drawer>
);

const ManageClasses = () => {
  const { showAlert } = useSweetAlert();
  const [currentEditDepartment, setCurrentEditDepartment] = useState(null);
  const [drawers, setDrawers] = useState({
    class: false,
    department: false,
  });

  const { data: departmentData } = useQuery("department", {
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
  const handleAddClick = () => {
    setCurrentEditDepartment(null); // Ensure edit data is cleared
    toggleDrawer("department")();
  };
  const handleEditClick = (department) => {
    setCurrentEditDepartment(department);
    toggleDrawer("department")();
  };
  const departmentItems =
    departmentData?.data?.flatMap((department, index) =>
      index === 0
        ? [
            {
              key: `edit-${department.uid}`,
              label: (
                <p
                  onClick={() => {
                    handleEditClick(department);
                  }}
                >
                  Edit
                </p>
              ),
            },
            {
              key: `delete-${department.uid}`,
              label: (
                <p onClick={() => handleDeleteDepartment(department.uid)}>
                  Delete
                </p>
              ),
            },
          ]
        : []
    ) || [];
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
                    onClick={handleAddClick}
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

              <Classes />
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
        <AddClass onClose={toggleDrawer("class")} />
      </ReusableDrawer>

      <ReusableDrawer
        title={currentEditDepartment ? "Edit Department" : "Add Department"}
        open={drawers.department}
        onClose={() => {
          setCurrentEditDepartment(null);
          toggleDrawer("department")();
        }}
      >
        <AddDepartment
          onClose={() => {
            setCurrentEditDepartment(null);
            toggleDrawer("department")();
          }}
          editData={currentEditDepartment}
        />
      </ReusableDrawer>
    </>
  );
};

export default memo(ManageClasses);
