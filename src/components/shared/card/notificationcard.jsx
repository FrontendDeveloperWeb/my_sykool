import { Checkbox } from "antd";
import React from "react";

const NotificationCard = ({ title, time }) => {
  const onChange = (e) => {};
  return (
    <div className="notification-card d-flex align-items-center justify-content-between">
      <div>
        <Checkbox onChange={onChange}>{title}</Checkbox>
      </div>
      <div>
        <p className="font-16 color-light">{time}</p>
      </div>
    </div>
  );
};

export default NotificationCard;
