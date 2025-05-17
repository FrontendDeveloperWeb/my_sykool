import React from "react";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const TimePikerInput = ({
  name,
  label,
  placeholder,
  rules,
  onChange,
  style,
  defaultValue,
  ...restProps
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules} validateTrigger="onBlur">
      <TimePicker
        onChange={onChange}
        defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
        placeholder={placeholder}
        style={{ width: "100%", ...style }}
        format="HH:mm:ss"
        defaultValue={
          defaultValue ? dayjs(defaultValue, "HH:mm:ss") : undefined
        }
        {...restProps}
      />
    </Form.Item>
  );
};

export default TimePikerInput;
