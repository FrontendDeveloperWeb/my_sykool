
import FlatButton from '@/components/shared/button/flatbutton';
import BaseInput from "@/components/shared/inputs";
import { Form } from 'antd';


const Timing = () => {


    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    return (
        <>


            <Form name="timing" layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <div className="row align-items-center gx-2r">
                    <div className="col-md-4 check-main">
                        <BaseInput label="Day" placeholder="Select Day" type="select" />
                        <Switch className="check-child" defaultChecked onChange={switchonChange} />
                    </div>
                    <div className="col-md-3">
                        <BaseInput label="Joins at *" placeholder="8:00 AM" type="timepiker" />
                    </div>
                    <div className="col-md-3">
                        <BaseInput label="Leaves at *" placeholder="2:00 PM" type="timepiker" />
                    </div>
                    <div className="col-md-2 d-flex align-items-center justify-content-center mt-2">
                        <IconButton icon={<PlusOutlined />} className="add-btn rounded-5 circle-btn" />
                    </div>
                </div>
                <FlatButton htmlType="submit" className="save-btn login-btn mt-4" title="Apply on Staff Profiles" />
            </Form>
  


        </>
    )
}

export default Timing
