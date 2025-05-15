import React, { useEffect, memo } from "react";
import { Form, message } from "antd";
import BaseInput from "@/components/shared/inputs";
import FlatButton from "@/components/shared/button/flatbutton";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/shared/layout/authlayout";
import { fieldRules } from "../../config/rules";
import { useMutation } from "../../hooks/reactQuery";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const { mutate, isPending: loading } = useMutation("login", {
    useFormData: true,
    showSuccessNotification: true,
    onSuccess: (data) => {
      if (window.user) {
        navigate("/dashboard");
      } else {
        if (data.data) {
          window.helper.setStorageData("user", data.data);
          window.user = data.data;
          navigate("/dashboard");
        } else {
          message.error("Login failed: Unable to save user data");
        }
      }
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };
  return (
    <>
      <AuthLayout
        title=" Welcome to mySkool! 👋"
        detail="Please enter your username and password to sign-in your account "
      >
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className="mt-3"
        >
          <BaseInput label="Username" rules={fieldRules.email} name="email" />
          <BaseInput
            type="password"
            label="Password"
            rules={fieldRules.password}
            name="password"
          />
          <FlatButton
            htmlType="submit"
            className="login-btn btn-primary btn-block mt-2"
            title={loading ? "Signing in..." : "Sign in"}
            loading={loading}
            disabled={loading}
          />
        </Form>
        <Link to="/forgot-password" className="text-center d-block mt-2">
          Forgotten Password?
        </Link>
      </AuthLayout>
    </>
  );
};

export default memo(Login);
