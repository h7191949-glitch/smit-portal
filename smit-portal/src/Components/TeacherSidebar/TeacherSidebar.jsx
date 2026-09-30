import React, { useState } from "react";
import Icon from "../Icon/Icon";
import "./TeacherSidebar.css";

function TeacherSidebar({
  currentPage = "teacherDashboard",
  onNavigate,
  onCollapseChange,
}) {
  const [collapsed, setCollapsed] = useState(true);

  const menuItems = [
    {
      name: "Dashboard",
      icon: "dashboard",
      page: "teacherDashboard",
    },
    {
      name: "Attendance",
      icon: "calendar",
      page: "teacherAttendance",
    },
    {
      name: "Assignments",
      icon: "assignment",
      page: "teacherAssignments",
    },
  ];

  const handleCollapse = () => {
    const newState = !collapsed;
    setCollapsed(newState);

    if (onCollapseChange) {
      onCollapseChange(newState);
    }
  };

  return (
    <aside className={`teacher-sidebar ${collapsed ? "collapsed" : "expanded"}`}>
      <div className="teacher-sidebar-top">
        <button
          type="button"
          className="teacher-sidebar-collapse"
          onClick={handleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <span>{collapsed ? "›" : "‹"}</span>
        </button>
      </div>

      <nav className="teacher-sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`teacher-sidebar-item ${
              currentPage === item.page ? "active" : ""
            }`}
            onClick={() => onNavigate && onNavigate(item.page)}
          >
            <Icon name={item.icon} size={18} />

            {!collapsed && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      <button type="button" className="teacher-sidebar-profile">
        <img src="/profile.jpg" alt="Teacher Profile" />
      </button>
    </aside>
  );
}

export default TeacherSidebar;