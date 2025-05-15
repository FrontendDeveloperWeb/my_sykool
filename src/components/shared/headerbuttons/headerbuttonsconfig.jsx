
export const headerButtonGroups = {
    dashboard: [
      { title: "Dashboard", url: "/dashboard" },
      { title: "Campuses", url: "/manage-campuses" },
      { title: "Manage Classes", url: "/manage-classes" },
      { title: "Staff Department", url: "/staff-department" },
    ],
    profile: [
      { title: "Inquiries", url: "/manage-inquiries" },
      { title: "Students", url: "/manage-student" },
      { title: "Staff", url: "/manage-staff" },
    ],
    fee: [
      { title: "Fee Structure", url: "/manage-fee" },
      { title: "Challan", url: "/create-fee" },
      { title: "Fee Collection", url: "/fee-collection" },
    ],
    attendance: [
      { title: "Student Attendance", url: "/attendance-sync" },
      { title: "Staff Attendance", url: "/staff-attendance" },
      { title: "Device Settings", url: "/attendance-syncs" },
    ],
    account: [
      { title: "Chart of Accounts", url: "/account" },
      { title: "Expense", url: "/expense" },
      { title: "Income", url: "/income" },
      { title: "Salary", url: "/staff-salary" },
      { title: "Double Entry", url: "/journal" },
    ],
    examination: [
      { title: "Subjects", url: "/manage-subject" },
      { title: "Exam Categories", url: "/exam-type" },
      { title: "Grading Policy", url: "/grading" },
      { title: "Date Sheet", url: "/manage-datesheet" },
      { title: "Marks", url: "/manage-marks" },
      { title: "Print Result", url: "/print-result" },

    ],
    report: [
      { title: "Report", url: "/report" },
    ],
    message: [
      { title: "Templates", url: "/templates" },
      { title: "Send Messages", url: "/send-message" },
      { title: "Outbox", url: "/outbox" },
      { title: "Groups", url: "/groups" },

    ],
    usermanagement: [
    { title: "User Management", url: "/user-management" },
  ],

    
  
  };
  
  export const getHeaderButtonGroup = (groupName) => {
    return headerButtonGroups[groupName] || [];
  };