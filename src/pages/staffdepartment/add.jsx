import React, { memo, useEffect } from "react";
import FlatButton from "@/components/shared/button/flatbutton";
import BaseInput from "@/components/shared/inputs";
import { Form } from "antd";
import { useMutation } from "../../hooks/reactQuery";
import { fieldRules } from "../../config/rules";

const AddStaffDepartment = ({ onClose, editData }) => {
  const [form] = Form.useForm();
  const isEditMode = !!editData;

  useEffect(() => {
    if (isEditMode && editData) {
      form.setFieldsValue({
        name: editData.name,
      });
    } else {
      form.resetFields();
    }
  }, [editData, form, isEditMode]);
  const { mutate, isPending: loading } = useMutation("add_staff_department", {
    useFormData: true,
    showSuccessNotification: true,
    invalidateQueries: ["staff_department"],
    onSuccess: (response) => {
      if (response) {
        onClose();
        form.resetFields();
      }
    },
  });
  const onFinish = (values) => {
    const payload = { ...values };
    if (isEditMode) {
      payload._method = "PUT";
      mutate({ data: payload, slug: editData.uid });
    } else {
      mutate(payload);
    }
  };

  return (
    <Form
      name="addstaffdepartment"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      form={form}
      autoComplete="off"
      layout="vertical"
      className=""
    >
      <BaseInput
        type=""
        rules={fieldRules.name}
        placeholder="Enter Department name"
        label="Department"
        name="name"
      />

      <FlatButton
        htmlType="submit"
        className="save-btn login-btn mt-2"
        title={loading ? "Saving..." : isEditMode ? "Update" : "Save"}
        loading={loading}
        disabled={loading}
      />
    </Form>
  );
};

export default memo(AddStaffDepartment);
