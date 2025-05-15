import React, { memo } from "react";
import CustomTable from "@/components/shared/table/customtable";
const UserRoleTable = memo((props) => (
  <CustomTable
    {...props} // Spread all props into the CustomTable component
    rowKey={"_id"}
    scroll={{ x: 1000 }}
  />
));

export default UserRoleTable;
