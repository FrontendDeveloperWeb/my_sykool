import React from "react";
import { DatePicker } from "antd";

const DatePickerInput = ({ onChange, placeholder, label }) => {
  return (
    <div className="form-items">
      <label>{label}</label>
      <DatePicker placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default DatePickerInput;
