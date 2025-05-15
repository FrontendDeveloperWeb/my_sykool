import React from 'react'
import InnerLayout from '@/components/shared/layout/innerlayout'
import HeaderButtons from '@/components/shared/headerbuttons';
import CustomTabs from '@/components/shared/tabs';
import TabButton from '@/components/shared/tabs/tabbutton';
import { DollarOutlined, FileTextOutlined, InfoCircleOutlined, LinkOutlined, LockOutlined, ToTopOutlined } from '@ant-design/icons';
import ProfileForm from '@/components/partial/staffform/profileform';
import IncreamentHistoryForm from '@/components/partial/staffform/increamenthistoryform';
import PayRoll from '@/components/partial/staffform/payroll';
import SecurityDeposit from '@/components/partial/staffform/SecurityDeposit';
import LoanAdvance from '@/components/partial/staffform/LoanAdvanceform';
import StaffDocumentsForm from '@/components/partial/staffform/staffdocumentsform';

const items = [
  {
    key: '1',
    label: <TabButton icon={<FileTextOutlined />} title="Profile" />,
    children: <ProfileForm />,
  },
  {
    key: '2',
    label: <TabButton icon={<ToTopOutlined />} title="Increament History" />,
    children: <IncreamentHistoryForm />,
  },
  {
    key: '3',
    label: <TabButton icon={<DollarOutlined />} title="Pay Roll" />,
    children: <PayRoll />,
  },
  {
    key: '4',
    label: <TabButton icon={<LockOutlined />} title="Security Deposit" />,
    children: <SecurityDeposit />,
  },
  {
    key: '5',
    label: <TabButton icon={<InfoCircleOutlined />} title="Loan / Advance" />,
    children: <LoanAdvance />,
  },
  {
    key: '6',
    label: <TabButton icon={<LinkOutlined />} title="Documents" />,
    children: <StaffDocumentsForm />,
  },
];
const AddStaff = () => {
  return (
    <InnerLayout headerButtons={<HeaderButtons group="profile" />}>
      <CustomTabs items={items} />
    </InnerLayout>
  )
}

export default AddStaff
