
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import { Form } from 'antd';


const AddStaffDepartment = () => {


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

                <BaseInput type="" placeholder="Enter Department name" label="Department" />

                <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />

            </Form>


        </>
    )
}

export default AddStaffDepartment
