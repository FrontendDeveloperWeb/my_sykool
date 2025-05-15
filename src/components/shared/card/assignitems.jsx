import React from "react";

const AssignItems = ({
  img,
  id,
  taskname,
  className = "assign-user-avatar",
}) => {
  return (
    <div className="assign-item d-flex align-items-center">
      <div className={className}>
        <p>{img}</p>
      </div>
      <div>
        <p className="font-12 color-light">{id}</p>
        <p className="font-16 color-black">{taskname}</p>
      </div>
    </div>
  );
};

export default AssignItems;
