import React from 'react'
import CustomTable from '@/components/shared/table/customtable';
import FlatButton from '@/components/shared/button/flatbutton';
import FeesHistory from '@/components/partial/student/feeshistorytimline/feeshistorytimline';

// Table Columns
const salaryColumns = [
    {
        title: 'Fee Type',
        dataIndex: 'feeType',
        render: text => <span className="">{text}</span>,
        width: 200,
    },
    {
        title: 'Details',
        dataIndex: 'details',
        render: text => <span className="badge bg-badge">{text}</span>,
        width: 220,
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
        render: text => <span className="badge bg-badge">{text}</span>,
        width: 150,
    },
];

// Table Data
const salaryData = [
    {
        key: '1',
        feeType: "Tuition Fees",
        details: 'May-2025',
        balance: '2000',
    },
    {
        key: '2',
        feeType: "Tuition Fees",
        details: 'Jun-2025',
        balance: '2000',
    }
];

// Challans Data
const challans = [
    {
        slipNo: "22935",
        amount: 2000,
        date: "10 Apr 2025",
    },
    {
        slipNo: "22522",
        amount: 2000,
        date: "3 Mar 2025",
    },
    {
        slipNo: "22522",
        amount: 2000,
        date: "3 Mar 2025",
    },
    {
        slipNo: "21114 ",
        amount: 2000,
        date: "7 Jan 2025",
    },
];


const studenTabsDtl = () => {
    return (
        <div>
            <div className="fee_dues">
                <h2 className='mb-3'>Fee Dues</h2>
                <div className="table_wrapper">
                    <FlatButton title="Print Challan" className={`btn header-tab-btn ms-auto d-block py-2`} />
                    {/* Custom Table */}
                    <CustomTable className="my-table mt-3" columns={salaryColumns} data={salaryData} rowKey="key" enableRowSelection={true} />
                    <div className="total_dues mt-3 d-flex justify-content-start">
                        <h5>Total Dues: 4000</h5>
                    </div>
                </div>
            </div>
            <div className="fees_history mt-4 mb-5">
                <h2 className='mb-3'>Fees History</h2>
                <div className="table_wrapper">
                    <FeesHistory challans={challans} />
                </div>
            </div>
        </div>
    )
}

export default studenTabsDtl