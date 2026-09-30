import React from "react";
import Icon from "../Icon/Icon";
import "./TeacherTabs.css";

function TeacherTabs({
  activeTab = "Students",
  onNavigate,
}) {
  const tabs = [
    {
      name: "Students",
      icon: "user",
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
    {
      name: "Quizzes",
      icon: "quiz",
      page: "teacherQuizzes",
    },
    {
      name: "Course Progress",
      icon: "progress",
      page: "teacherProgress",
    },
  ];

  return (
    <div className="teacher-tabs">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          type="button"
          className={`teacher-tab ${
            activeTab === tab.name ? "active" : ""
          }`}
          onClick={() => onNavigate && onNavigate(tab.page)}
        >
          <Icon name={tab.icon} size={15} />
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
}

export default TeacherTabs;