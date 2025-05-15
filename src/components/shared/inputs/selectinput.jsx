import React from "react";
import { Form, Select } from "antd";
const SelectInput = ({
  name,
  rules,
  placeholder,
  handlechange,
  options,
  style,
  loading,
  label,
  defaultValue,
  mode
}) => {
  return (
    <Form.Item
      name={name}
      rules={rules}
      label={label}
      validateTrigger="onBlur"
      defaultValue={defaultValue}
    >
      <Select
        size="large"
        mode={mode}
        placeholder={placeholder}
        handlechange={handlechange}
        style={style}
        loading={loading}
        options={options}
      />
    </Form.Item>
  );
};

export default SelectInput;
