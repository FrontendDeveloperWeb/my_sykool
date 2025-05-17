import React, { memo, useEffect } from "react";
import FlatButton from "@/components/shared/button/flatbutton";
import BaseInput from "@/components/shared/inputs";
import { Form } from "antd";
import { useMutation, useQuery } from "../../hooks/reactQuery";
import { fieldRules } from "../../config/rules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const AddClass = ({ onClose, currentClass }) => {
  const isEditMode = !!currentClass;
  const [form] = Form.useForm();

  useEffect(() => {
    if (isEditMode && currentClass) {
      form.setFieldsValue({
        department_id: currentClass.department.id,
        name: currentClass.name,
        sections: currentClass.section || [],
        arrival_time: currentClass.arrival_time
          ? dayjs(currentClass.arrival_time, "HH:mm:ss")
          : null,
      });
    } else {
      form.resetFields();
    }
  }, [currentClass, form, isEditMode]);

  const { data: departmentData, isLoading } = useQuery("department", {
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const { mutate, isPending: loading } = useMutation("add_class", {
    showSuccessNotification: true,
    useFormData: true,
    invalidateQueries: ["class"],
    onSuccess: (response) => {
      if (response) {
        onClose();
        form.resetFields();
      }
    },
  });

  const onFinish = (values) => {
    const payload = {
      department_id: values.department_id,
      name: values.name,
      ...(values.arrival_time && {
        arrival_time: dayjs(values.arrival_time).format("HH:mm:ss"),
      }),
    };

    // Add sections as separate fields
    if (values.sections?.length > 0) {
      values.sections.forEach((section, index) => {
        payload[`section[${index}]`] = section;
      });
    }

    if (isEditMode) {
      payload._method = "PUT";
      mutate({ data: payload, slug: currentClass.uid });
    } else {
      mutate(payload);
    }
  };

  return (
    <Form
      name="add-class"
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      {/* Department Select */}
      <BaseInput
        type="select"
        placeholder="Select Department"
        label="Department"
        name="department_id"
        rules={fieldRules.required}
        loading={isLoading}
        options={
          departmentData?.data?.map((dept) => ({
            label: dept.name,
            value: dept.id,
          })) || []
        }
      />

      {/* Class Name Input */}
      <BaseInput
        placeholder="Class Name"
        label="Enter class name"
        name="name"
        rules={fieldRules.required}
      />

      {/* Sections Multi-Select */}
      <BaseInput
        name="sections"
        label="Select Sections"
        placeholder="Choose or type sections"
        rules={fieldRules.required}
        mode="multiple"
        type="select"
        allowCustom={true}
        options={[
          { value: "A", label: "A" },
          { value: "B", label: "B" },
          { value: "C", label: "C" },
        ]}
      />

      {/* Arrival Time Picker */}
      <BaseInput
        type="timepiker"
        placeholder="Select Arrival Time"
        label="Arrival time"
        name="arrival_time"
        format="HH:mm:ss"
        rules={fieldRules.required}
      />

      {/* Submit Button */}
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

export default memo(AddClass);
