import React, { useEffect,memo } from 'react'
import { Form, message } from 'antd';
import BaseInput from '@/components/shared/inputs';
import FlatButton from '@/components/shared/button/flatbutton';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '@/components/shared/layout/authlayout';
import { fieldRules } from '../../config/rules';
import { useMutation } from '../../hooks/reactQuery';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const { mutate, isPending: loading } = useMutation('fortgot_password', {
    useFormData: true,
    showSuccessNotification: true,
    onSuccess: (data) => {
      if(data){
      navigate('/');
     }
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };
  return (
    <>
     <AuthLayout title=" Welcome to mySkool! 👋" detail="Please enter your email address associated with your account.">
        <Form
          name="forgotpassword"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          className='mt-3'
        >
          <BaseInput label="Username" rules={fieldRules.email} name="email"/>
          <FlatButton
            htmlType="Send"
            className="login-btn btn-primary btn-block mt-2"
            title={loading ? "Sedning" : "Send"}
            loading={loading}
            disabled={loading}
          />
        </Form>
        <p className='text-center d-block mt-2'>Already have an account? <Link to="/" className=''>Sign in</Link></p>
      </AuthLayout>
    </>
  )
}

export default memo(ForgotPassword); 
