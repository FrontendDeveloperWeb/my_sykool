import React, { memo, useState, useEffect } from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import { Form, Spin, Skeleton } from "antd";
import BaseInput from "@/components/shared/inputs";
import FlatButton from "@/components/shared/button/flatbutton";
import IconButton from "@/components/shared/button/iconbutton";
import { useNavigate, useParams } from "react-router-dom";
import UploadProfile from "@/components/shared/inputs/uploadprofile";
import { LeftOutlined } from "@ant-design/icons";
import { fieldRules } from "../../config/rules";
import { useMutation, useQuery } from "../../hooks/reactQuery";

const Add = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form] = Form.useForm();
  const [fileData, setFileData] = useState(null);
  const isEditMode = !!id;
  const [filePreviewUrl, setFilePreviewUrl] = useState("");

  const {
    data: campusData,
    isLoading: isFetchingCampus,
    isError: isFetchError,
    error: fetchError,
  } = useQuery("campus", {
    params: {},
    slug: id,
    enabled: isEditMode,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000, // 15 minutes
  });

  useEffect(() => {
    if (isEditMode && campusData && campusData.data) {
      let campusDetails;

      if (Array.isArray(campusData.data)) {
        campusDetails = campusData.data.find((campus) => campus.uid === id);
      } else if (typeof campusData.data === "object") {
        campusDetails = campusData.data;
      }

      if (campusDetails) {
        form.setFieldsValue({
          school_name: campusDetails.school_name,
          branch_name: campusDetails.branch_name,
          phone_number: campusDetails.phone_number,
          mobile_no: campusDetails.mobile_no,
          email: campusDetails.email,
          website: campusDetails.website,
          address: campusDetails.address,
        });

        if (campusDetails.icon) {
          setFilePreviewUrl(campusDetails.icon);
        }
      }
    }
  }, [campusData, id, isEditMode, form]);

  const { mutate, isPending: loading } = useMutation("add_campus", {
    useFormData: true,
    showSuccessNotification: true,
    invalidateQueries: ["campus"],
    onSuccess: (response) => {
      if (response) {
        navigate("/manage-campuses");
      }
    },
  });

  const onFinish = (values) => {
    const payload = { ...values };

    if (fileData) {
      payload.icon = fileData;
    }

    if (isEditMode) {
      payload._method = "PUT";
      payload.is_active = 0;

      // For updates, pass the UID in the URL via slug parameter
      mutate({ data: payload, slug: id });
    } else {
      // For creates, just send the payload
      mutate(payload);
    }
  };

  return (
    <InnerLayout
      headerButtons={<HeaderButtons group="dashboard" />}
      className="h-100"
    >
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8">
          <h3 className="mb-1">{isEditMode ? "Edit Branch" : "Add Branch"}</h3>

          {isFetchingCampus ? (
            <div className="text-center p-5">
              <Spin size="large" />
              <p className="mt-3">Loading campus data...</p>
            </div>
          ) : isFetchError ? (
            <div className="text-center p-5">
              <p>Error loading campus data: {fetchError?.message}</p>
              <FlatButton
                title="Go Back"
                onClick={() => navigate("/manage-campuses")}
                className="btn save-btn mt-3"
              />
            </div>
          ) : (
            <div className="form-card main-card">
              <Form
                form={form}
                name="campus-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                className=""
                scrollToFirstError={true}
              >
                <div className="row">
                  <div className="col-12 tex-center">
                    <div className="d-flex align-items-center justify-content-center mt-3 mb-4">
                      <UploadProfile
                        acceptedFileTypes="image/jpeg,image/png"
                        maxFileSize={5}
                        showPreview={true}
                        previewType="auto"
                        shape="square"
                        defaultImageUrl={filePreviewUrl}
                        onChange={(fileInfo) => {
                          setFileData(fileInfo.file);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="School name"
                      rules={fieldRules.name}
                      name="school_name"
                      placeholder="Enter school name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="Branch name"
                      rules={fieldRules.name}
                      name="branch_name"
                      placeholder="Enter branch name"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="Phone number"
                      rules={fieldRules.phone}
                      name="phone_number"
                      placeholder="Enter a phone number"
                      type="number"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="Mobile number"
                      rules={fieldRules.phone}
                      name="mobile_no"
                      placeholder="Enter a phone number"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="Email"
                      rules={fieldRules.email}
                      name="email"
                      placeholder="myskool@example.com"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <BaseInput
                      label="Website (optional)"
                      name="website"
                      placeholder="www.myskool.com"
                      rules={fieldRules.website}
                    />
                  </div>
                  <div className="col-12 col-md-12">
                    <BaseInput
                      label="Address"
                      rules={fieldRules.name}
                      name="address"
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="d-flex justify-content-end align-items-center">
                    <div className="me-3">
                      <IconButton
                        icon={<LeftOutlined />}
                        className="btn back-btn"
                        title="Back"
                        onClick={() => navigate(-1)}
                      />
                    </div>
                    <div>
                      <FlatButton
                        htmlType="submit"
                        title={loading ? "Saving" : "Save"}
                        loading={loading}
                        disabled={loading}
                        className="btn save-btn"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </div>
      </div>
    </InnerLayout>
  );
};

export default memo(Add);
