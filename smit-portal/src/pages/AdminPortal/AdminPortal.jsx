import React, { useState } from "react";
import AdminSidebar from "../../Components/AdminPortal/AdminSidebar";
import AdminDashboard from "../../Components/AdminPortal/AdminDashboard";
import AdminRecords from "../../Components/AdminPortal/AdminRecords";
import AdminProfile from "../../Components/AdminPortal/AdminProfile";
import Icon from "../../Components/Icon/Icon";
import "./AdminPortal.css";

const initialRecords = {
  students: [
    { id: "s1", name: "Ayesha Khan", cnic: "42201-5523412-8", email: "ayesha.khan@example.com", course: "Modern Web Development", batch: "Batch 20", attendance: 92, status: "Active" },
    { id: "s2", name: "Hamza Ali", cnic: "42101-7712456-1", email: "hamza.ali@example.com", course: "Graphic Design", batch: "Batch 18", attendance: 84, status: "Active" },
    { id: "s3", name: "Zainab Noor", cnic: "42301-0918372-6", email: "zainab.noor@example.com", course: "Modern Web Development", batch: "Batch 20", attendance: 68, status: "Review" },
    { id: "s4", name: "Usman Raza", cnic: "42201-6429137-5", email: "usman.raza@example.com", course: "Data Analytics", batch: "Batch 16", attendance: 88, status: "Active" },
  ],
  teachers: [
    { id: "t1", name: "Muhammad Saad", email: "saad.teacher@example.com", department: "Web Development", course: "Modern Web Development", batch: "Batch 20", status: "Active" },
    { id: "t2", name: "Sana Ahmed", email: "sana.teacher@example.com", department: "Design", course: "Graphic Design", batch: "Batch 18", status: "Active" },
    { id: "t3", name: "Bilal Hussain", email: "bilal.teacher@example.com", department: "Data Science", course: "Data Analytics", batch: "Batch 16", status: "On leave" },
  ],
  courses: [
    { id: "c1", name: "Modern Web Development", teacher: "Muhammad Saad", batch: "Batch 20", students: 32, duration: "6 months", status: "Active" },
    { id: "c2", name: "Graphic Design", teacher: "Sana Ahmed", batch: "Batch 18", students: 26, duration: "5 months", status: "Active" },
    { id: "c3", name: "Data Analytics", teacher: "Bilal Hussain", batch: "Batch 16", students: 29, duration: "6 months", status: "Active" },
  ],
  assignments: [
    { id: "a1", name: "Responsive Portfolio Website", course: "Modern Web Development", teacher: "Muhammad Saad", dueDate: "2026-10-12", submissions: "24 / 32", status: "Pending" },
    { id: "a2", name: "Brand Identity Concepts", course: "Graphic Design", teacher: "Sana Ahmed", dueDate: "2026-10-15", submissions: "26 / 26", status: "Complete" },
    { id: "a3", name: "Dashboard Data Report", course: "Data Analytics", teacher: "Bilal Hussain", dueDate: "2026-10-18", submissions: "12 / 29", status: "Pending" },
  ],
  attendance: [
    { id: "at1", recordType: "Student", person: "Ayesha Khan", course: "Modern Web Development", batch: "Batch 20", date: "2026-10-02", attendance: 92 },
    { id: "at2", recordType: "Student", person: "Hamza Ali", course: "Graphic Design", batch: "Batch 18", date: "2026-10-02", attendance: 84 },
    { id: "at3", recordType: "Teacher", person: "Muhammad Saad", course: "Modern Web Development", batch: "Batch 20", date: "2026-10-02", attendance: 100 },
    { id: "at4", recordType: "Teacher", person: "Sana Ahmed", course: "Graphic Design", batch: "Batch 18", date: "2026-10-01", attendance: 100 },
  ],
  payments: [
    { id: "p1", student: "Ayesha Khan", course: "Modern Web Development", amount: "PKR 12,000", dueDate: "2026-10-10", paymentStatus: "Paid" },
    { id: "p2", student: "Hamza Ali", course: "Graphic Design", amount: "PKR 10,000", dueDate: "2026-10-05", paymentStatus: "Pending" },
    { id: "p3", student: "Zainab Noor", course: "Modern Web Development", amount: "PKR 12,000", dueDate: "2026-10-12", paymentStatus: "Pending" },
    { id: "p4", student: "Usman Raza", course: "Data Analytics", amount: "PKR 11,000", dueDate: "2026-10-01", paymentStatus: "Paid" },
  ],
};

const resourceConfigs = {
  adminStudents: {
    key: "students", title: "Students", singular: "Student", primaryKey: "name", canAdd: true, statusKey: "status",
    columns: [{ key: "name", label: "Name" }, { key: "cnic", label: "CNIC / ID" }, { key: "email", label: "Email" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "attendance", label: "Attendance" }, { key: "status", label: "Status" }],
    fields: [{ key: "name", label: "Full name" }, { key: "cnic", label: "CNIC / ID" }, { key: "email", label: "Email", type: "email" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "attendance", label: "Attendance (%)", type: "number" }, { key: "status", label: "Status", options: ["Active", "Review", "Inactive"] }],
  },
  adminTeachers: {
    key: "teachers", title: "Teachers", singular: "Teacher", primaryKey: "name", canAdd: true, statusKey: "status",
    columns: [{ key: "name", label: "Teacher" }, { key: "email", label: "Email" }, { key: "department", label: "Department" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "status", label: "Status" }],
    fields: [{ key: "name", label: "Full name" }, { key: "email", label: "Email", type: "email" }, { key: "department", label: "Department" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "status", label: "Status", options: ["Active", "On leave", "Inactive"] }],
  },
  adminCourses: {
    key: "courses", title: "Courses", singular: "Course", primaryKey: "name", canAdd: true, statusKey: "status",
    columns: [{ key: "name", label: "Course" }, { key: "teacher", label: "Teacher" }, { key: "batch", label: "Batch" }, { key: "students", label: "Students" }, { key: "duration", label: "Duration" }, { key: "status", label: "Status" }],
    fields: [{ key: "name", label: "Course name" }, { key: "teacher", label: "Teacher" }, { key: "batch", label: "Batch" }, { key: "students", label: "Students", type: "number" }, { key: "duration", label: "Duration" }, { key: "status", label: "Status", options: ["Active", "Upcoming", "Completed"] }],
  },
  adminAssignments: {
    key: "assignments", title: "Assignments", singular: "Assignment", primaryKey: "name", statusKey: "status",
    columns: [{ key: "name", label: "Assignment" }, { key: "course", label: "Course" }, { key: "teacher", label: "Teacher" }, { key: "dueDate", label: "Due date" }, { key: "submissions", label: "Submissions" }, { key: "status", label: "Status" }],
    fields: [{ key: "name", label: "Assignment name" }, { key: "course", label: "Course" }, { key: "teacher", label: "Teacher" }, { key: "dueDate", label: "Due date", type: "date" }, { key: "submissions", label: "Submissions" }, { key: "status", label: "Status", options: ["Pending", "Complete", "Overdue"] }],
  },
  adminAttendance: {
    key: "attendance", title: "Attendance", singular: "Attendance record", primaryKey: "person", dateKey: "date",
    columns: [{ key: "recordType", label: "Type" }, { key: "person", label: "Student / Teacher" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "date", label: "Date" }, { key: "attendance", label: "Attendance" }],
    fields: [{ key: "recordType", label: "Record type", options: ["Student", "Teacher"] }, { key: "person", label: "Student / teacher name" }, { key: "course", label: "Course" }, { key: "batch", label: "Batch" }, { key: "date", label: "Date", type: "date" }, { key: "attendance", label: "Attendance (%)", type: "number" }],
  },
  adminPayments: {
    key: "payments", title: "Payments / Fees", singular: "Payment", primaryKey: "student", statusKey: "paymentStatus",
    columns: [{ key: "student", label: "Student" }, { key: "course", label: "Course" }, { key: "amount", label: "Amount" }, { key: "dueDate", label: "Due date" }, { key: "paymentStatus", label: "Payment status" }],
    fields: [{ key: "student", label: "Student name" }, { key: "course", label: "Course" }, { key: "amount", label: "Amount" }, { key: "dueDate", label: "Due date", type: "date" }, { key: "paymentStatus", label: "Payment status", options: ["Paid", "Pending", "Overdue"] }],
  },
};

const pageTitles = {
  adminDashboard: "Dashboard",
  adminStudents: "Students",
  adminTeachers: "Teachers",
  adminCourses: "Courses",
  adminAssignments: "Assignments",
  adminAttendance: "Attendance",
  adminPayments: "Payments / Fees",
  adminProfile: "Admin Profile",
};

function AdminPortal({ currentPage, onNavigate, onLogout }) {
  const [collapsed, setCollapsed] = useState(() => window.matchMedia("(max-width: 760px)").matches);
  const [records, setRecords] = useState(initialRecords);
  const [adminProfile, setAdminProfile] = useState({
    name: "SMIT Administrator",
    email: "admin@smit.edu.pk",
    phone: "0300-0000000",
    role: "Administrator",
  });

  const updateRecord = (resource, record) => {
    setRecords((current) => {
      const items = current[resource];
      const exists = record.id !== undefined && items.some((item) => item.id === record.id);
      const savedRecord = { ...record, id: record.id ?? `${resource}-${Date.now()}` };
      return {
        ...current,
        [resource]: exists
          ? items.map((item) => item.id === savedRecord.id ? savedRecord : item)
          : [...items, savedRecord],
      };
    });
  };

  const removeRecord = (resource, id) => {
    setRecords((current) => ({
      ...current,
      [resource]: current[resource].filter((item) => item.id !== id),
    }));
  };

  const config = resourceConfigs[currentPage];
  const title = pageTitles[currentPage] || "Dashboard";

  return (
    <div className={`admin-layout ${collapsed ? "sidebar-collapsed" : "sidebar-expanded"}`}>
      <AdminSidebar
        currentPage={currentPage}
        collapsed={collapsed}
        onToggle={() => setCollapsed((value) => !value)}
        onNavigate={onNavigate}
      />
      <main className="admin-main">
        <div className="admin-main-inner">
          <header className="admin-page-header">
            <div>
              <div className="admin-breadcrumb"><span>SMIT Admin</span><span aria-hidden="true">›</span><strong>{title}</strong></div>
              <h1>{title === "Dashboard" ? "Institute dashboard" : title}</h1>
            </div>
            <button type="button" className="admin-header-profile" onClick={() => onNavigate("adminProfile")}>
              <img src="/logo3.png" alt="" />
              <span>{adminProfile.name}</span>
              <Icon name="chevronRight" size={15} />
            </button>
          </header>

          {currentPage === "adminDashboard" && <AdminDashboard records={records} onNavigate={onNavigate} />}
          {config && (
            <AdminRecords
              key={currentPage}
              config={config}
              records={records[config.key]}
              onSave={(record) => updateRecord(config.key, record)}
              onDelete={(id) => removeRecord(config.key, id)}
            />
          )}
          {currentPage === "adminProfile" && (
            <AdminProfile profile={adminProfile} onSave={setAdminProfile} onLogout={onLogout} />
          )}
        </div>
      </main>
    </div>
  );
}

export default AdminPortal;