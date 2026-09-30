import React from "react";
import "./TeacherAttendanceStats.css";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="30" height="30">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M4 9h16" />
      <path d="M8 13h.01M12 13h.01M16 13h.01M8 16h.01M12 16h.01" />
    </svg>
  );
}

function PresentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

function AbsentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 9l6 6M15 9l-6 6" />
    </svg>
  );
}

function LeaveIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12h8" />
    </svg>
  );
}

function TeacherAttendanceStats({
  totalStudents,
  present,
  absent,
  leave,
}) {
  const stats = [
    {
      title: "Total Students",
      value: totalStudents,
      type: "total",
      icon: <CalendarIcon />,
    },
    {
      title: "Present",
      value: present,
      type: "present",
      icon: <PresentIcon />,
    },
    {
      title: "Absent",
      value: absent,
      type: "absent",
      icon: <AbsentIcon />,
    },
    {
      title: "Leave",
      value: leave,
      type: "leave",
      icon: <LeaveIcon />,
    },
  ];

  return (
    <div className="teacher-attendance-stats">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`teacher-attendance-stat ${item.type}`}
        >
          <div className="teacher-attendance-stat-left">
           

            <div className="teacher-attendance-stat-text">
              <strong>{item.value}</strong>
              <span>{item.title}</span>
            </div>
          </div>

          <div className="teacher-attendance-stat-icon">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeacherAttendanceStats;