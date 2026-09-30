import React from "react";
import "./AttendanceStats.css";

function AttendanceStats() {
  const stats = [
    {
      value: "112",
      title: "Total Classes",
      icon: "▦",
      type: "calendar",
    },
    {
      value: "88",
      title: "Present",
      icon: "✓",
      type: "present",
    },
    {
      value: "0",
      title: "Leave",
      icon: "×",
      type: "leave",
    },
    {
      value: "24",
      title: "Absent",
      icon: "×",
      type: "absent",
    },
  ];

  return (
    <div className="attendance-stats">
      {stats.map((stat) => (
        <div className="attendance-stat-card" key={stat.title}>
          <div className="attendance-stat-content">
            <h2>{stat.value}</h2>
            <p>{stat.title}</p>
          </div>

          <div className={`attendance-stat-icon ${stat.type}`}>
            {stat.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AttendanceStats;