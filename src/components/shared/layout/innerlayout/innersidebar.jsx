import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer, Button, Tooltip } from "antd";
import { MenuOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const ResponsiveSidebar = ({ visible, onClose }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeKey, setActiveKey] = useState("1");

  const company = [
    {
      key: "1",
      icon: "/assets/img/home-active.svg",
      activeIcon: "@/public/assets/img/home-active.png",
      label: "Home",
      link: "/dashboard",
      arrow: <RightOutlined />
    },
    {
      key: "2",
      icon: "/assets/img/user.svg",
      activeIcon: "../admin/assets/img/userrole-active.png",
      label: "Profiles",
      link: "/manage-inquiries",
      arrow: <RightOutlined />
    },
    {
      key: "3",
      icon: "/assets/img/fee.svg",
      activeIcon: "../admin/assets/img/employees-active.png",
      label: "Fee",
      link: "/manage-fee",
      arrow: <RightOutlined />
    },
    {
      key: "4",
      icon: "/assets/img/user.svg",
      activeIcon: "../admin/assets/img/assigned-active.png",
      label: "Attendance",
      link: "/attendance-sync",
      arrow: <RightOutlined />
    },
    {
      key: "5",
      icon: "/assets/img/account.svg",
      activeIcon: "../admin/assets/img/subscription-active.png",
      label: "Accounts",
      link: "/account",
      arrow: <RightOutlined />
    },
    {
      key: "6",
      icon: "/assets/img/examination.svg",
      activeIcon: "../admin/assets/img/notifications-active.png",
      label: "Examination",
      link: "/manage-subject",
      arrow: <RightOutlined />
    },
    {
      key: "7",
      icon: "/assets/img/report.svg",
      activeIcon: "../admin/assets/img/notifications-active.png",
      label: "Report",
      link: "/report",
      arrow: <RightOutlined />
    },
    {
      key: "8",
      icon: "/assets/img/message.svg",
      activeIcon: "../admin/assets/img/notifications-active.png",
      label: "Messages",
      link: "/templates",
      arrow: <RightOutlined />
    },
    {
      key: "9",
      icon: "/assets/img/user-managment.svg",
      activeIcon: "../admin/assets/img/notifications-active.png",
      label: "User Managment",
      link: "/user-management",
      arrow: <RightOutlined />
    },
    // ... Add all your other items here ...
  ];

  const menuItems = company.map((item) => ({
    key: item.key,
    icon: (
      <Tooltip placement="right" title={item.label}>
        <Link to={item.link}>
          <img src={item.icon} alt={item.label} width={22} />
        </Link>
      </Tooltip>
    ),
    label: windowWidth <= 1199 ? (
      <div className="w-100 d-flex align-items-center justify-content-between">
        <Link to={item.link} style={{ color: 'inherit' }}>
          {item.label}

        </Link>
        <div>
          <p>{item.arrow}</p>
        </div>
      </div>
    ) : null,
    // null so label not shown in sidebar
  }));
  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderSidebarMenu = (
    <Menu
      onClick={({ key }) => setActiveKey(key)}
      selectedKeys={[activeKey]}
      theme="dark"
      mode="inline"
      items={menuItems}
    />
  );

  return (
    <>
      {/* Show sidebar only above 1199px */}
      {windowWidth > 1199 ? (
        <Sider width={80}>
          <div className="logo p-2">
            <img src="/assets/img/inner-logo.png" alt="logo" width="100%" />
          </div>
          {renderSidebarMenu}
        </Sider>
      ) : (
        <>

          {/* Drawer opens on button click */}
          <Drawer
            title={ <img src="/assets/img/inner-logo.png" alt="" className="img-fluid" />}
            placement="left"
            onClose={onClose}
            open={visible}
            className="mobile-view"
            width={300}
          >
            {renderSidebarMenu}
          </Drawer>
        </>
      )}
    </>
  );
};

export default ResponsiveSidebar;
