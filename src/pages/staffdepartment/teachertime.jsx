
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import { Form } from 'antd';


const AddSTeacherTime = () => {


    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>


            <Form
                name="grace"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                layout="vertical"
                className=''
            >
                <BaseInput type="number" placeholder="0" label="Grace Time (minutes)" />
                <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />


            </Form>


        </>
    )
}

export default AddSTeacherTime
