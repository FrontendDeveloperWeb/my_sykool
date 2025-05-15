import React from 'react';
import { Avatar } from "antd";

const ChatHeader = () => {
  return (
    <div className="chat-header">
    <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
    <div className="header-user-details">
      <div className="header-name">ABDUL JABBAR</div>
      <div className="header-grn">GRN - 167 | X 2024-2025 - A</div>
    </div>
  </div>
  );
};

export default ChatHeader;