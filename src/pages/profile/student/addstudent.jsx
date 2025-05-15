import React from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomTabs from '@/components/shared/tabs';
import TabButton from '@/components/shared/tabs/tabbutton';
import { BookOutlined, FileTextOutlined, FolderOpenOutlined, InfoCircleOutlined, LinkOutlined, MobileOutlined, UsergroupAddOutlined, UserSwitchOutlined } from '@ant-design/icons';
import StudentForm from '@/components/partial/studentform/studentform';
import FamilyForm from '@/components/partial/studentform/familyform';
import InfoForm from '@/components/partial/studentform/infoform';
import AdmissionForm from '@/components/partial/studentform/admissionform';
import DocumentsForm from '@/components/partial/studentform/documentsform';
import WhatsappForm from '@/components/partial/studentform/whatsappform';
import CustomFees from '@/components/partial/studentform/customfees';
import Subjects from '@/components/partial/studentform/subjects';

const items = [
  {
    key: '1',
    label: <TabButton icon={<FileTextOutlined />} title="Student" />,
    children: <StudentForm />,
  },
  {
    key: '2',
    label: <TabButton icon={<UsergroupAddOutlined />} title="Family" />,

    children: <FamilyForm />,
  },
  {
    key: '3',
    label: <TabButton icon={<UserSwitchOutlined />} title="Info" />,
    children: <InfoForm />,
  },
  {
    key: '4',
    label: <TabButton icon={<InfoCircleOutlined />} title="Admission" />,
    children: <AdmissionForm />,
  },
  {
    key: '5',
    label: <TabButton icon={<LinkOutlined />} title="Documents" />,
    children: <DocumentsForm />,
  },
  {
    key: '6',
    label: <TabButton icon={<MobileOutlined />} title="Whatsapp" />,
    children: <WhatsappForm />,
  },
  {
    key: '7',
    label: <TabButton icon={<FolderOpenOutlined />} title="Custom Fees" />,
    children: <CustomFees />,
  },
  {
    key: '8',
    label: <TabButton icon={<BookOutlined />} title="Subjects" />,
    children: <Subjects />,
  },
];

const AddStudent = () => {
  return (
    <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
      <CustomTabs items={items} />
    </InnerLayout>

  )
}

export default AddStudent
