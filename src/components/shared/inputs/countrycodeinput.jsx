import React from "react";
import { Form, Input } from "antd";
import PhoneInput from 'react-phone-input-2'; // ✅ This was missing!
import 'react-phone-input-2/lib/style.css';

const CountryCodeInput = ({
    name,
    rules,
    icon,
    defaultValue,
    placeholder,
    className,
    disabled,
    label,
    type,
    suffix,
    onChange,
    isPhoneInput = false,
    value,
    country = "us", // default country
}) => {
    return (
        <Form.Item
            label={label}
            name={name}
            rules={rules}
            validateTrigger="onBlur"
        >
            {isPhoneInput ? (
                <PhoneInput
                    country={country}
                    value={value}
                    onChange={onChange}
                    inputClass={className}
                    disabled={disabled}
                    placeholder={placeholder}
                    inputProps={{
                        name,
                        required: true,
                    }}
                />
            ) : (
                <Input
                    prefix={icon}
                    suffix={suffix}
                    size="large"
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    className={className}
                    disabled={disabled}
                    type={type}
                    onChange={onChange}
                />
            )}
        </Form.Item>
    );
};

export default CountryCodeInput;
