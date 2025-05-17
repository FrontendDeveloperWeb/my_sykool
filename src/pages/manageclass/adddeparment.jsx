import React, { useEffect, memo } from "react";
import FlatButton from "@/components/shared/button/flatbutton";
import BaseInput from "@/components/shared/inputs";
import { Form } from "antd";
import { useMutation } from "../../hooks/reactQuery";
import { fieldRules } from "../../config/rules";
const AddDepartment = ({ onClose, editData }) => {
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
  const { mutate, isPending: loading } = useMutation("add_department", {
    useFormData: true,
    showSuccessNotification: true,
    invalidateQueries: ["departments"],
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
      // For creates, just send the payload
      mutate(payload);
    }
  };

  return (
    <>
      <Form
        name="adddepartment"
        initialValues={{ remember: true }}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        className=""
      >
        <BaseInput
          name="name"
          rules={fieldRules.name}
          placeholder="Department name"
          label="Enter department name"
        />

        <FlatButton
          htmlType="submit"
          title={loading ? "Saving..." : isEditMode ? "Update" : "Save"}
          loading={loading}
          disabled={loading}
          className="save-btn login-btn mt-2"
        />
      </Form>
    </>
  );
};

export default memo(AddDepartment);
