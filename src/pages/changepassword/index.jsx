import React from "react";
import InnerLayout from "@/components/shared/layout/innerlayout";
import HeaderButtons from "@/components/shared/headerbuttons";
import { Form } from "antd";
import BaseInput from "@/components/shared/inputs";
import FlatButton from "@/components/shared/button/flatbutton";
import { fieldRules } from "../../config/rules";
import { useMutation } from "../../hooks/reactQuery";

const ChangePassword = () => {
  const [form] = Form.useForm();
  const { mutate, isPending: loading } = useMutation("reset_password", {
    useFormData: true,
    showSuccessNotification: true,
    onSuccess: (response) => {
      if (response) {
        form.resetFields([]);
      }
    },
  });
  const onFinish = (values) => {
    const payload = {
      ...values,
      token: window.user.api_token,
    };
    mutate(payload);
  };
  return (
    <InnerLayout
      headerButtons={<HeaderButtons group="dashboard" />}
      className="h-100"
    >
      <div className="row justify-content-center mt-4">
        <div className="col-12 col-sm-12 col-md-7 col-lg-4">
          <div className="pass-card">
            <div className="form-card main-card ">
              <Form
                form={form}
                name="reset-password"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
                layout="vertical"
                className=""
              >
                <div className="row">
                  <div className="col-12 tex-center">
                    <div className="change-logo d-flex align-items-center justify-content-center mt-3 mb-4">
                      <img
                        src="/assets/img/login-side-logo.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div>
                      <h4 className="font-18 mb-2">Reset Password 🔒</h4>
                      <p className="line-1 mb-3">
                        Your new password must be different from previously used
                        passwords
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <BaseInput
                      type="password"
                      label="New Password"
                      rules={fieldRules.name}
                      name="new_password"
                      placeholder="......."
                    />
                  </div>
                  <div className="col-12">
                    <BaseInput
                      type="password"
                      label="Confrim Password"
                      rules={fieldRules.name}
                      name="confirm_password"
                      placeholder="......."
                    />
                  </div>
                </div>
                <div className="col-12">
                  <FlatButton
                    htmlType="submit"
                    title={"Set New Password"}
                    loading={loading}
                    disabled={loading}
                    className="btn save-btn bg-purple w-100"
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </InnerLayout>
  );
};

export default ChangePassword;
