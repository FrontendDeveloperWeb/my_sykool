import React, { useState } from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import UploadProfile from "@/components/shared/inputs/uploadprofile"
import { Form } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined } from '@ant-design/icons'


const subjectcolumns = [
    {
        title: 'title',
        dataIndex: 'title',
        render: text => <span>{text}</span>,
        width: "15%",

    },
    {
        title: 'message',
        dataIndex: 'message',
        render: text => <span>{text}</span>,
        width: "70%",
        
    },

    {
        title: 'actions',
        dataIndex: 'actions',
        align: "center",
        render: (actions) => (
            <div className='d-flex align-items-center justify-content-center'>
                {actions.map((item, index) => {
                    let className = 'badge';
                    let tooltip = '';
                    let placement = "";
                    let onClick = () => { };
                    if (item.type === EditOutlined) {
                        className += ' bg-edit';
                        tooltip = 'Edit';
                        placement = 'left';
                    } else if (item.type === DeleteOutlined) {
                        className += ' bg-delete';
                        tooltip = 'Delete';
                        placement = 'right';
                    }

                    return (
                        <FlatButton tootlip={tooltip} placement={placement} key={index} className={className} onClick={onClick} style={{ marginRight: '8px' }} title={item} />

                    );
                })}
            </div>
        ),
        width: 20,
    },

];
const subjectData = [
    {
        key: '1',
        title: 'Attendance',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '2',
        title: 'Attendance',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '3',
        title: 'Attendance',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },
    {
        key: '4',
        title: 'Attendance',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<EditOutlined />, <DeleteOutlined />]

    },

];

const Templates = () => {
     const [open, setOpen] = useState(false);
    
     const showAddClassDrawer = () => {
         setOpen(true);
     };
     const onClose = () => {
         setOpen(false);
 
     };
    const onFinish = values => {
         console.log('Success:', values);
     };
     const onFinishFailed = errorInfo => {
         console.log('Failed:', errorInfo);
     };
 
     return (
         <>
             <InnerLayout headerButtons={<HeaderButtons group="message" />}>
                 <div className="row">
                     <div className="col-12">
                         <div className="main-box">
 
                             <div className='d-flex align-items-center mt-3 '>
                                <div>
                                     <IconButton icon="+" title="Add Template" className="add-btn btn" onClick={showAddClassDrawer}  />
                                 </div>
                                 <div className='w-100 search-group'>
                                     <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                 </div>
 
                             </div>
 
                             <CustomTable className="my-table mt-4" columns={subjectcolumns} data={subjectData} />
 
                         </div>
                     </div>
 
                 </div>
             </InnerLayout>
             <Drawer title="Add Template" onClose={onClose} open={open} >
                 <Form
                     name="basic"
                     initialValues={{ remember: true }}
                     onFinish={onFinish}
                     onFinishFailed={onFinishFailed}
                     autoComplete="off"
                     layout="vertical"
                     className=''
                 >
                   <div className='mb-2'>
                    <p>Cover</p>
                    <UploadProfile />
                   </div>
                     <BaseInput type=""  placeholder="Enter Title" label="Title"  />
                     <BaseInput type="textarea" rows={10} placeholder="Enter message" label="Message" />
                     <BaseInput type="select"  placeholder="None" label="Send on"  />
 
                     <FlatButton htmlType="submit" className="save-btn login-btn mt-2" title="Save" ss />
 
                 </Form>
             </Drawer>
         </>
     )
}

export default Templates
