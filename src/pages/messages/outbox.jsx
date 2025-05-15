import InnerLayout from '@/components/shared/layout/innerlayout';
import HeaderButtons from '@/components/shared/headerbuttons';
import FlatButton from '@/components/shared/button/flatbutton';
import IconButton from '@/components/shared/button/iconbutton';
import BaseInput from "@/components/shared/inputs";
import CustomTable from '@/components/shared/table/customtable';
import Drawer from '@/components/shared/drawer/mydrawer';
import UploadProfile from "@/components/shared/inputs/uploadprofile"
import { Avatar, Form } from 'antd';
import { SearchOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, DeleteOutlined, UserOutlined, RedoOutlined } from '@ant-design/icons'


const subjectcolumns = [
    {
        title: 'Profile',
        dataIndex: 'profile',
        render: src => <div className='table-img'><img src={src} alt="" /></div>,
        width: "10%",

    },
    {
        title: 'name',
        dataIndex: 'name',
        render: text => <span>{text}</span>,
        width: "10%",

    },
    {
        title: 'date',
        dataIndex: 'date',
        render: text => <span className='badge bg-badge'>{text}</span>,
        width: "10%",

    },
   
    {
        title: 'message',
        dataIndex: 'message',
        render: text => <span>{text}</span>,
        width: "50%",
        
    },
    {
        title: 'number',
        dataIndex: 'number',
        render: text => <span>{text}</span>,
        width: "10%",

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
                     if (item.type === DeleteOutlined) {
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
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Attendance',
        date: '24 March 2023',
        number: '129876543',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<DeleteOutlined />]

    },
    {
        key: '2',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Attendance',
        date: '24 March 2023ndance',
        number: '129876543',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<DeleteOutlined />]

    },
    {
        key: '3',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Attendance',
        date: '24 March 2023',
        number: '129876543',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<DeleteOutlined />]

    },
    {
        key: '4',
        profile: "https://images.unsplash.com/1/type-away-numero-dos.jpg?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: 'Attendance',
        date: '24 March 2023',
        number: '129876543',
        message: '{subject} TEST RESULT {studentName} MARKS: {obt}/{total} Percentage:{perc} Grade:{grade} Rank:{rank} Date: {date}',
        actions: [<DeleteOutlined />]

    },

];


const OutBox = () => {
    return (
        <>
            <InnerLayout headerButtons={<HeaderButtons group="message" />}>
                 <div className="row">
                     <div className="col-12">
                         <div className="main-box">
 
                             <div className='d-flex align-items-center mt-3 '>
                                 <div className='w-100 mt-1'>
                                     <BaseInput icon={<SearchOutlined />} placeholder="Search....." className="search-input" />
                                 </div>
                                 <div className='w-50 mt-2 ms-2'>
                                     <BaseInput type="select"  placeholder="pending"  />
                                 </div>
                                 <div className='ms-2'>
                                     <IconButton icon={<RedoOutlined />} title="Refresh (40)" className="add-btn btn spacing"/>
                                 </div>
                                 <div className='ms-2'>
                                     <FlatButton tootlip="Delete" placement="top"  className="badge bg-delete"  style={{ marginRight: '8px' }} title={<DeleteOutlined />} />
                                 </div>
                             </div>
 
                             <CustomTable className="my-table mt-4" columns={subjectcolumns} data={subjectData} />
 
                         </div>
                     </div>
 
                 </div>
            </InnerLayout>

        </>
    )
}

export default OutBox
