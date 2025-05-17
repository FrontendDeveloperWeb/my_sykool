import React, { memo } from "react";
import { Form, Select, Tag } from "antd";

const SelectInput = ({
  name,
  rules,
  placeholder,
  onChange,
  options = [],
  style,
  loading,
  label,
  defaultValue,
  mode,
  allowCustom = false,
  ...restProps
}) => {
  return (
    <Form.Item name={name} rules={rules} label={label} validateTrigger="onBlur">
      <Select
        size="large"
        mode={mode}
        placeholder={placeholder}
        onChange={onChange}
        style={style}
        loading={loading}
        options={options}
        allowClear
        showSearch={allowCustom}
        onSearch={
          allowCustom
            ? (value) => {
                // Prevent duplicates
                if (value && !options.some((opt) => opt.value === value)) {
                  options.push({ value, label: value });
                }
              }
            : undefined
        }
        tagRender={
          mode === "multiple"
            ? (props) => (
                <Tag closable={props.closable} onClose={props.onClose}>
                  {props.label}
                </Tag>
              )
            : undefined
        }
        {...restProps}
      />
    </Form.Item>
  );
};

export default memo(SelectInput);
