import React from 'react';
import BaseInput from '@/components/shared/inputs';
import IconButton from '@/components/shared/button/iconbutton';
import FlatButton from '@/components/shared/button/flatbutton';
import { Input, Button } from "antd";
import { SendOutlined, PaperClipOutlined, MailOutlined } from "@ant-design/icons";

const ChatFooter = () => {
  return (
    <div className="chat-footer">
      <div className='position-relative w-100'>
        <Input placeholder="Enter your message" className="message-input" />
        <div className="footer-icons">
          <PaperClipOutlined className="attach-icon" />
        </div>
        <div className="footer-icons footer-icons-second">
          <MailOutlined className="attach-icon" />
        </div>
      </div>
      <FlatButton type="primary" title="Send" className="send-btn" />
        
      
    </div>
  );
};

export default ChatFooter;