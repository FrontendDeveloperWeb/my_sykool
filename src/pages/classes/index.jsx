import React, { memo, useState } from "react";
import CustomTable from "@/components/shared/table/customtable";
import Drawer from "@/components/shared/drawer/mydrawer";
import { EditOutlined, LoginOutlined } from "@ant-design/icons";
import FlatButton from "@/components/shared/button/flatbutton";
import { usePaginatedQuery } from "../../hooks/reactQuery";
import AddClass from "./add";
import { Tooltip } from "antd";

const attendanceColumns = (handlers) => [
  {
    title: "CLASS",
    dataIndex: "class",
    render: (text) => <span className="badge bg-badge">{text}</span>,
    width: 150,
  },
  {
    title: "Section",
    dataIndex: "section",
    render: (section) => (
      <div className="d-flex">
        {(section || []).map((item, index) => (
          <span
            key={index}
            className="badge bg-badge"
            style={{ marginRight: "8px" }}
          >
            {item}
          </span>
        ))}
      </div>
    ),
    width: 150,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (_, record) => (
      <div className="d-flex align-items-center">
        <Tooltip title="Edit" placement="left">
          <FlatButton
            className="badge bg-edit"
            style={{ marginRight: "8px" }}
            icon={<EditOutlined />}
            onClick={() => handlers.handleEdit(record)}
          />
        </Tooltip>
        <Tooltip title="Left Class" placement="right">
          <FlatButton className="badge bg-exit" icon={<LoginOutlined />} />
        </Tooltip>
      </div>
    ),
    width: 150,
  },
];

const ReusableDrawer = ({ title, open, onClose, children }) => (
  <Drawer title={title} onClose={onClose} open={open}>
    {children}
  </Drawer>
);

const Classes = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageSize, setCurrentPageSize] = useState(10);
  const [currentClass, setCurrentClass] = useState(null);

  const { data, isLoading } = usePaginatedQuery("class", {
    params: {
      keyword: searchKeyword,
      page: currentPage,
      limit: currentPageSize,
    },
    initialPage: currentPage,
    initialPageSize: currentPageSize,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const tableData =
    data?.data?.map((item) => ({
      key: item.uid,
      class: item.name,
      section: item.section || [], // Changed from sections to section to match your API response
      originalData: item,
    })) || [];

  const handleEdit = (classData) => {
    setCurrentClass(classData.originalData);
    setIsDrawerVisible(true);
  };

  return (
    <>
      <CustomTable
        className="my-table mt-4"
        columns={attendanceColumns({ handleEdit })}
        data={tableData}
        loading={isLoading}
        // showPagination={true}
        pagination={{
          current: currentPage,
          pageSize: currentPageSize,
          total: data?.total || 0,
          onChange: (page, pageSize) => {
            setCurrentPage(page);
            setCurrentPageSize(pageSize);
          },
        }}
      />

      <ReusableDrawer
        title={"Edit Class"}
        open={isDrawerVisible}
        onClose={() => {
          setIsDrawerVisible(false);
          setCurrentClass(null);
        }}
      >
        <AddClass
          onClose={() => {
            setIsDrawerVisible(false);
            setCurrentClass(null);
          }}
          currentClass={currentClass}
        />
      </ReusableDrawer>
    </>
  );
};

export default memo(Classes);
