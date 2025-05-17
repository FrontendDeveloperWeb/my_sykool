import React, { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import { createStyles } from "antd-style";

const useStyle = createStyles(({ css, token }) => {
  return {
    customTable: css`
      .ant-table-container {
        .ant-table-body,
        .ant-table-content {
          scrollbar-width: thin;
          scrollbar-color: #eaeaea transparent;
          scrollbar-gutter: stable;

          &::-webkit-scrollbar {
            height: 6px;
            width: 6px;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #c1c1c1;
            border-radius: 4px;
          }

          &::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      }
    `,
  };
});

const CustomTable = ({
  columns,
  data,
  handleClick,
  loading,
  rowKey,
  showPagination,
  pagination,
  onChange,
  className,
  scroll,
  enableRowSelection = false,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
  };
  const { styles } = useStyle();

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        loading={loading}
        rowKey={rowKey}
        scroll={{ x: "max-content" }}
        {...(enableRowSelection ? { rowSelection } : {})}
        className={`${styles.customTable} ${className || ""}`}
      />
      {showPagination && (
        <div className="custom-pagination d-flex justify-content-end mt-4">
          <Pagination
            current={pagination?.currentPage}
            total={pagination?.pageCount}
            pageSize={pagination?.perPage}
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
};

export default CustomTable;
