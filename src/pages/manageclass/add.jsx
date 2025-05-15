
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import { Form } from 'antd';

const AddClass = () => {
 
  const onFinish = values => {
    console.log('Success:', values);
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
     
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className=''
        >
            <BaseInput type="select" placeholder="Select Department" label="Department" />
            <BaseInput type="" placeholder="Select Department" label="Enter class name" />
            <BaseInput type="select" placeholder="Select Section" label="Select Sections *" />
            <BaseInput type="" placeholder="Enter Time" label="Arrival time" />
            <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" onClick={() => navigate("/manage-campuses")} />

        </Form>
     
      
    </>
  )
}

export default AddClass
