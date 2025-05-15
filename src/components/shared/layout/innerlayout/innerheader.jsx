  import React, { useState } from "react";
  import { Layout, Avatar, theme, Tooltip ,Button } from "antd";
  import CustomDropdown from "@/components/shared/dropdown";
  import { useNavigate } from "react-router-dom";
  import { CheckSquareOutlined, DownOutlined, LockOutlined, LogoutOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";
  import useSweetAlert from "@/hooks/useSweetAlert";
  import { logout } from "@/utils/auth";

  const { Header } = Layout;

  const campusItems = [
    {
      label: <p>Employees</p>,
      key: "2",
    },
  ];

  const InnerHeader = ({ headerButtons , onDrawerOpen, isMobile }) => {

    const navigate = useNavigate();
    const { showAlert } = useSweetAlert();

    const handleLogoutConfirmation = async () => {
      const result = await showAlert({
        text: "Are you sure you want to logout?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel"
      });

      if (result.isConfirmed) {
        logout();
        navigate('/');
      }
    };

    const companyItems = [
      {
        label: <div className="d-flex align-items-center">
          <div className="drop-img-profile">
            <img src="https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className="ms-3">
            <p className="font-20">QASIM RAFIQUE</p>
            <p className="font-14">qasim@sss</p>
          </div>
        </div>,
        key: "2",
      },
      {
        type: "divider",
      },
      {
        label: <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div>
              <img src="/assets/img/whatsapp-icon.svg" alt="" />
            </div>
            <div className="ms-2">
              <p className="">WhatsApp</p>
            </div>
          </div>
          <div className="check-color-box">
            <Tooltip title="Connect WhatsApp">
              <CheckSquareOutlined />
            </Tooltip>
          </div>
        </div>,
        key: "3",
      },
      {
        label: (
          <div className="d-flex align-items-center" onClick={() => navigate("/change-password")}>
            <div className="change-pass">
              <LockOutlined />
            </div>
            <div className="ms-3">
              <p className="">Change Password</p>
            </div>
          </div>
        ),
        key: "4",
      },
      {
        label: (
          <div className="d-flex align-items-center">
            <div className="change-pass">
              <LogoutOutlined />
            </div>
            <div className="ms-3">
              <p className="" onClick={handleLogoutConfirmation}>Logout</p>
            </div>
          </div>
        ),
        key: "5",
      },
    ];

    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
      <>
        <div className="header-navbar-shadow"></div>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="d-flex align-items-center justify-content-between px-3">
            <div className="gap-10 header-buttons">
              {isMobile && (
                <Button
                  icon={<MenuOutlined />}
                  type="text"
                  onClick={onDrawerOpen}
                />
              )}
              {headerButtons}
          
          </div>

          <div className="d-flex align-=items-center gap-10">
            <div className="me-3">
              <CustomDropdown
                className=""
                items={campusItems}
                title="Memon Goth"
                icon={<DownOutlined />}
                type="user"
              />
            </div>
            <div className="me-3">
              <img src="/assets/img/whatsapp-icon.svg" alt="" className="img-fluid" />
            </div>
            <CustomDropdown
              className="profile-dropdown"
              items={companyItems}
              title={<Avatar size={40} icon={<UserOutlined />} className="responsive-avatar" />}
              type="simple"
            />
          </div>
        </div>
      </Header >
        
      </>
    );
  };

  export default InnerHeader;
