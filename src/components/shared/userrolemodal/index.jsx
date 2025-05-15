import React, { memo } from "react";
import CustomModal from "@/components/shared/modal";
import Addusertypeform from "@/components/partial/modalforms/addusertypeform";
const UserRoleModal = memo(
  ({ isModalOpen, onClose, editData, refreshDataTable }) => (
    <CustomModal
      title={editData ? "Edit User Type" : "Add New User Type"} // Dynamically change title
      width={500}
      open={isModalOpen}
      onCancel={onClose}
      className="custom-modal"
      footer={false}
    >
      <Addusertypeform
        onCancel={onClose}
        refreshDataTable={refreshDataTable}
        editData={editData} // Pass the data to the form for editing
      />
    </CustomModal>
  )
);

export default UserRoleModal;
