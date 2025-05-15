import React, { useState } from "react";
import { Dropdown, Space, Button, Menu, Empty } from "antd";
import { DownOutlined } from "@ant-design/icons";

const CustomDropdown = ({
  items = [],
  title = "Submit",
  type = "button", // 'simple', 'edit', or default 'button'
  className = "",
  loading = false,
  icon,
  overlayClassName = "profile-drop",
}) => {
  const [selectedTitle, setSelectedTitle] = useState(title);

  const handleMenuClick = ({ key }) => {
    const selectedItem = items.find((item) => item.key === key);

    if (selectedItem) {
      // Run custom onClick if provided
      if (typeof selectedItem.onClick === "function") {
        selectedItem.onClick();
      }

      // Only update title when not in 'edit' mode
      if (type !== "edit") {
        const label =
          typeof selectedItem.label === "string"
            ? selectedItem.label
            : selectedItem.label?.props?.children || title;

        setSelectedTitle(label);
      }
    }
  };

  const menuItems =
    items.length > 0
      ? { items, onClick: handleMenuClick }
      : {
          items: [
            {
              key: "no-data",
              label: (
                <div style={{ padding: "8px 12px" }}>
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="No data"
                  />
                </div>
              ),
              disabled: true,
            },
          ],
        };

  if (type === "simple") {
    return (
      <Dropdown
        menu={menuItems}
        trigger={["click"]}
        className={className}
        overlayClassName={overlayClassName}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {selectedTitle}
            {icon && <DownOutlined />}
          </Space>
        </a>
      </Dropdown>
    );
  }

  if (type === "edit") {
    return (
      <Dropdown.Button
        trigger={["click"]}
        className={className}
        icon={icon || <DownOutlined />}
        loading={loading}
        menu={{ items, onClick: handleMenuClick }}
        onClick={(e) => e.preventDefault()}
      >
        {title} {/* always show original title in edit mode */}
      </Dropdown.Button>
    );
  }

  return (
    <Dropdown.Button
      trigger={["click"]}
      className={className}
      icon={icon || <DownOutlined />}
      loading={loading}
      menu={menuItems}
      onClick={(e) => e.preventDefault()}
    >
      {selectedTitle}
    </Dropdown.Button>
  );
};

export default CustomDropdown;
