import React from "react";
import Icon from "../Icon/Icon";

const navigation = [
  { label: "Dashboard", page: "adminDashboard", icon: "dashboard" },
  { label: "Students", page: "adminStudents", icon: "user" },
  { label: "Teachers", page: "adminTeachers", icon: "graduation" },
  { label: "Courses", page: "adminCourses", icon: "book" },
  { label: "Assignments", page: "adminAssignments", icon: "assignment" },
  { label: "Attendance", page: "adminAttendance", icon: "calendar" },
  { label: "Payments", page: "adminPayments", icon: "payment" },
];

function AdminSidebar({ currentPage, collapsed, onToggle, onNavigate }) {
  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="admin-sidebar-brand">
        <img src="/smit-logo.png" alt="SMIT" />
        {!collapsed && <span>SMIT <strong>ADMIN</strong></span>}
        <button
          type="button"
          className="admin-sidebar-toggle"
          onClick={onToggle}
          aria-label={collapsed ? "Expand navigation" : "Collapse navigation"}
        >
          <Icon name={collapsed ? "chevronRight" : "arrowLeft"} size={17} />
        </button>
      </div>

      <nav className="admin-sidebar-nav" aria-label="Admin navigation">
        {navigation.map((item) => (
          <button
            type="button"
            key={item.page}
            className={`admin-nav-item ${currentPage === item.page ? "active" : ""}`}
            onClick={() => onNavigate(item.page)}
            title={collapsed ? item.label : undefined}
          >
            <Icon name={item.icon} size={19} />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={`admin-sidebar-profile ${currentPage === "adminProfile" ? "active" : ""}`}
        onClick={() => onNavigate("adminProfile")}
        aria-label="Open admin profile"
        title={collapsed ? "Admin Profile" : undefined}
      >
        <img src="/logo3.png" alt="" />
        {!collapsed && <span>Admin Profile</span>}
      </button>
    </aside>
  );
}

export default AdminSidebar;