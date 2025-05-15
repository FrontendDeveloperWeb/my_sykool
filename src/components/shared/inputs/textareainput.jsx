import React from "react";
import { Input, Form } from "antd";
const { TextArea } = Input;

const TextAreaInput = ({ placeholder, rows, label, name, rules }) => {
  return (
    <Form.Item label={label} name={name} rules={rules} validateTrigger="onBlur">
      <TextArea rows={rows} placeholder={placeholder} />
    </Form.Item>
  );
};

export default TextAreaInput;
