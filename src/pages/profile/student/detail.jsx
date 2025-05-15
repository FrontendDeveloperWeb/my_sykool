import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons';
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomTabs from '@/components/shared/tabs';
import TabButton from '@/components/shared/tabs/tabbutton';
import StudentDetails from "@/components/partial/student/studentabsdtl/studentabsdtl"
import StudentIncreamentHistory from '@/components/partial/student/studentinncrementhistory';

// ========== Icons Start ============= //

// Fee Icon
const FeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
);

// Attendance Icon
const CustomCheckCircle = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

// AssessmentIcon Icon
const AssessmentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pen-tool"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
);

// AssessmentIcon Icon
const PTMIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);

// ========== Icons End ============= //

const studentDetails = [
  {
    key: '1',
    name: 'ALISHBA',
    class: 'X - A',
    gr: '739',
    status: 'Present',
    admissionDate: '1 Apr 2016',
    role: 'Student',
    country: 'Pakistan',
    contact: '+923213420038',
    image: 'https://i.pravatar.cc/150?img=3'
  }
];

// Data Attendance Data Details
const columns = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: text => <span className='badge bg-badge my-1'>{text}</span>,
    width: 270,
  },
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
    render: text => <span className='bg-red rounded-2'>{text}</span>
  },
  {
    title: 'time',
    dataIndex: 'time',
    key: 'time',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  }
];

const data = [
  {
    date: "15 Apr 2025",
    status: "A",
    time: "12:00 AM"
  },
  {
    date: "11 Apr 2025",
    status: "A",
    time: "12:00 AM"
  },
  {
    date: "27 Feb 2025",
    status: "A",
    time: "12:00 AM"
  },
  {
    date: "19 Feb 2025",
    status: "A",
    time: "12:00 AM"
  }
];

// Data Complaints Data Details
const complaintColumns = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: text => <span className='badge bg-badge my-1'>{text}</span>,
    // width: 270,
  },
  {
    title: 'from',
    dataIndex: 'from',
    key: 'from',
    render: text => <span className='bg-red rounded-2'>{text}</span>
  },
  {
    title: 'complaint',
    dataIndex: 'complaint',
    key: 'complaint',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'actions',
    dataIndex: 'actions',
    key: 'actions',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
];

const complaintData = [];

// Data Assessment Data Details
const assessmentColumns = [
  {
    title: 'exam',
    dataIndex: 'exam',
    key: 'exam',
    render: text => <span className='badge bg-badge my-1'>{text}</span>,
  },
  {
    title: 'session',
    dataIndex: 'session',
    key: 'session',
    render: text => <span className='bg-red rounded-2'>{text}</span>
  },
  {
    title: 'marks',
    dataIndex: 'marks',
    key: 'marks',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'percentage',
    dataIndex: 'percentage',
    key: 'percentage',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'rank',
    dataIndex: 'rank',
    key: 'rank',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'grade',
    dataIndex: 'grade',
    key: 'grade',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'result',
    dataIndex: 'result',
    key: 'result',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
  {
    title: 'Actions',
    dataIndex: 'Actions',
    key: 'Actions',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
];
const assessmentData = [];

// Data PTM Data Details
const PTMColumns = [
  {
    title: 'date',
    dataIndex: 'date',
    key: 'date',
    render: text => <span className='badge bg-badge my-1'>{text}</span>,
  },
  {
    title: 'summary',
    dataIndex: 'summary',
    key: 'summary',
    render: text => <span className='bg-red rounded-2'>{text}</span>
  },
  {
    title: 'Actions',
    dataIndex: 'Actions',
    key: 'Actions',
    render: text => <span className='badge bg-badge py-1'>{text}</span>,
  },
];
const PTMData = [];

const items = [
  {
    key: '1',
    label: <TabButton icon={<FeeIcon />} title="Fee" />,
    children: <StudentDetails />,
  },
  {
    key: '2',
    label: <TabButton icon={<CustomCheckCircle />} title="Attendance" />,
    children: <StudentIncreamentHistory showHeaderButton={true} studentDetailsData={columns} studentTableInnerDetails={data} enableRowSelection={false} />,
  },
  {
    key: '3',
    label: <TabButton icon={<InfoCircleOutlined />} title="Complaints" />,
    children: <StudentIncreamentHistory showHeaderButton={false} studentDetailsData={complaintColumns} studentTableInnerDetails={complaintData} enableRowSelection={false} buttonTitle="Complaints" isComplaint={true} />,
  },
  {
    key: '4',
    label: <TabButton icon={<AssessmentIcon />} title="Assessment" />,
    children: <StudentIncreamentHistory showHeaderButton={false} studentDetailsData={assessmentColumns} studentTableInnerDetails={assessmentData} enableRowSelection={false} isComplaint={true} isHeaderBtn={false} />,
  },
  {
    key: '5',
    label: <TabButton icon={<PTMIcon />} title="PTM" />,
    children: <>
      <h2 className='mb-2'>Parents Teacher Meeting</h2>
      <StudentIncreamentHistory showHeaderButton={false} studentDetailsData={PTMColumns} studentTableInnerDetails={PTMData} enableRowSelection={false} buttonTitle="Summary" isComplaint={true} isHeaderBtn={true} isSideBtns={true} />
    </>,
  },
];

const StudenDetail = () => {
  return (
    <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
      <div className="row mt-1">
        <div className="col-lg-4 col-12">
          {studentDetails.map(student => (
            <div className="student_details_card" key={student.key}>
              <div className="profile_img">
                <img src={student.image} alt={student.name} className="profile-img mx-auto d-block" width={120} height={120} />
                <div className="txt text-center">
                  <h5>{student.name}</h5>
                  <p>{student.class}</p>
                </div>
              </div>
              <div className="profile_txt">
                <h6>Details</h6>
                <p className='mb-1'><strong className='font-600 me-1'>Name:</strong> {student.name}</p>
                <p className='mb-1'><strong className='font-600 me-1'>GR:</strong> <span className="badge bg-badge">{student.gr}</span></p>
                <p className='mb-1'><strong className='font-600 me-1'>Status:</strong> <span className="badge bg-green px-2 py-1">{student.status}</span></p>
                <p className='mb-1'><strong className='font-600 me-1'>Admission Date:</strong> <span className="badge bg-badge">{student.admissionDate}</span></p>
                <p className='mb-1'><strong className='font-600 me-1'>Role:</strong> {student.role}</p>
                <p className='mb-1'><strong className='font-600 me-1'>Country:</strong> {student.country}</p>
                <p className='mb-1'><strong className='font-600 me-1'>Contact:</strong> {student.contact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-8 col-12">
          <div className="customs_student_tab">
            <CustomTabs items={items} />
          </div>
        </div>
      </div>
    </InnerLayout>
  )
}

export default StudenDetail
