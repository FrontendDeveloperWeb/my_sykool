import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@/app.css";
import Loader from "@/components/shared/loader/loader";
import QueryProvider from "./providers/QueryProvider";

// Fallback loading spinner
const loading = <Loader />;

// Lazy-loaded route components
const Login = lazy(() => import("@/pages/auth/login"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const Forgotpassword = lazy(() => import("@/pages/auth/forgotpassword"));
const ChangePassword = lazy(() => import("@/pages/changepassword"));

// Campuses
const ManageCampuses = lazy(() => import("@/pages/campuses"));
const AddCampus = lazy(() => import("@/pages/campuses/add"));
const ManageClasses = lazy(() => import("@/pages/manageclass"));
const StaffDepartment = lazy(() => import("@/pages/staffdepartment"));

// Inquiries
const ManageInquiries = lazy(() => import("@/pages/profile/inquiries"));
const AddInquirie = lazy(() => import("@/pages/profile/inquiries/addinquirie"));

// Students
const Student = lazy(() => import("@/pages/profile/student"));
const AddStudent = lazy(() => import("@/pages/profile/student/addstudent"));
const StudenDetail = lazy(() => import("@/pages/profile/student/detail"));

// Staff
const Staff = lazy(() => import("@/pages/profile/staff"));
const AddStaff = lazy(() => import("@/pages/profile/staff/addstaff"));

// Fee Management
const Fee = lazy(() => import("@/pages/fee"));
const CreateFee = lazy(() => import("@/pages/fee/createfee"));
const FeeCollection = lazy(() => import("@/pages/fee/feecollection"));

// Attendance
const StudentAttendance = lazy(() =>
  import("@/pages/attendance/studentattendance")
);
const StaffAttendance = lazy(() =>
  import("@/pages/attendance/staffattendance")
);

// Accounts
const ChartAccount = lazy(() => import("@/pages/accounts/chartaccount"));
const Expense = lazy(() => import("@/pages/accounts/expense"));
const Income = lazy(() => import("@/pages/accounts/income"));
const Salary = lazy(() => import("@/pages/accounts/salary"));
const Journal = lazy(() => import("@/pages/accounts/journal"));
const AddJounal = lazy(() => import("@/pages/accounts/journal/addjounal"));

// Examination
const Subject = lazy(() => import("@/pages/examination/subject"));
const AddSubject = lazy(() => import("@/pages/examination/subject/addsubject"));
const Exam = lazy(() => import("@/pages/examination/exam"));
const Grading = lazy(() => import("@/pages/examination/grading"));
const DateSheet = lazy(() => import("@/pages/examination/datesheet"));
const AddDateSheet = lazy(() =>
  import("@/pages/examination/datesheet/adddatesheet")
);
const Mark = lazy(() => import("@/pages/examination/mark"));
const PrintResult = lazy(() => import("@/pages/examination/printresult"));

// Report
const Report = lazy(() => import("@/pages/report"));

// Mesages
const Templates = lazy(() => import("@/pages/messages/templates"));
const SendMessage = lazy(() => import("@/pages/messages/sendmessage"));
const OutBox = lazy(() => import("@/pages/messages/outbox"));
const Groups = lazy(() => import("@/pages/messages/groups"));

// User Management
const UserManagement = lazy(() => import("@/pages/usermanagement"));

// Define route config
const routes = [
  { path: "/", element: <Login /> },
  { path: "/forgot-password", element: <Forgotpassword /> },
  { path: "/dashboard", element: <Dashboard /> },

  // Campuses
  { path: "/manage-campuses", element: <ManageCampuses /> },
  { path: "/manage-addcampuses", element: <AddCampus /> },
  { path: "/manage-addcampuses/:id", element: <AddCampus /> },
  { path: "/manage-classes", element: <ManageClasses /> },
  { path: "/staff-department", element: <StaffDepartment /> },

  // Inquiries
  { path: "/manage-inquiries", element: <ManageInquiries /> },
  { path: "/add-inquiries", element: <AddInquirie /> },

  // Students
  { path: "/manage-student", element: <Student /> },
  { path: "/add-student", element: <AddStudent /> },
  { path: "/student-detail", element: <StudenDetail /> },

  // Staff
  { path: "/manage-staff", element: <Staff /> },
  { path: "/add-staff", element: <AddStaff /> },

  // Fee
  { path: "/manage-fee", element: <Fee /> },
  { path: "/create-fee", element: <CreateFee /> },
  { path: "/fee-collection", element: <FeeCollection /> },

  // Attendance
  { path: "/attendance-sync", element: <StudentAttendance /> },
  { path: "/staff-attendance", element: <StaffAttendance /> },

  // Accounts
  { path: "/account", element: <ChartAccount /> },
  { path: "/expense", element: <Expense /> },
  { path: "/income", element: <Income /> },
  { path: "/staff-salary", element: <Salary /> },
  { path: "/journal", element: <Journal /> },
  { path: "/add-journal", element: <AddJounal /> },

  // Examination
  { path: "/manage-subject", element: <Subject /> },
  { path: "/add-subject", element: <AddSubject /> },
  { path: "/exam-type", element: <Exam /> },
  { path: "/grading", element: <Grading /> },
  { path: "/manage-datesheet", element: <DateSheet /> },
  { path: "/add-datesheet", element: <AddDateSheet /> },
  { path: "/manage-marks", element: <Mark /> },
  { path: "/print-result", element: <PrintResult /> },

  // Report
  { path: "/report", element: <Report /> },

  //  Messages

  { path: "/templates", element: <Templates /> },
  { path: "/send-message", element: <SendMessage /> },
  { path: "/outbox", element: <OutBox /> },
  { path: "/groups", element: <Groups /> },

  // UserManagement
  { path: "/user-management", element: <UserManagement /> },

  // Change Password
  { path: "/change-password", element: <ChangePassword /> },
];

function App() {
  return (
    <QueryProvider>
      <Router>
        <Suspense fallback={loading}>
          <Routes>
            {routes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </QueryProvider>
  );
}

export default App;
