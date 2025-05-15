import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import { Form } from 'antd';

const Grading = () => {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const [rows, setRows] = useState(Array(6).fill({ from: "", to: "", grade: "" }));

    const handleAddRow = () => {
      setRows([...rows, { from: "", to: "", grade: "" }]);
    };
  
    const handleRemoveRow = (index) => {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    };
    return (
        <InnerLayout headerButtons={<HeaderButtons group="examination" />}>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <div className="main-box">
                        <h4 className='border-bottom pb-3'>Grading Policy</h4>
                        <Form
                            name="basic"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                            layout="vertical"
                            className=''
                        >
                            {rows.map((row, index) => (
                                <div className="row mt-3 align-items-center" key={index}>
                                <div className="col-12 col-md-4">
                                    <BaseInput type="" placeholder="Percentage" label="Percentage From" />
                                </div>
                                <div className="col-12 col-md-4">
                                    <BaseInput type="" placeholder="Percentage" label="Percentage To" />
                                </div>
                                <div className="col-12 col-md-2">
                                    <BaseInput type="" placeholder="Grade" label="Grade" />
                                </div>
                                <div className="col-12 col-md-2 d-flex align-items-center mt-2">
                                    <IconButton icon="×" className="plus-btn border-danger" onClick={() => handleRemoveRow(index)} />
                                    {index === rows.length - 1 && (
                                    <IconButton icon="+" className="plus-btn ms-1" onClick={handleAddRow} />
                                    )}
                                </div>
                                </div>
                            ))}
                            <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" />
                            
                        </Form>
                    </div>
                </div>
            </div>
        </InnerLayout>
    )
}

export default Grading
