import React from "react";
import "./ProgressStats.css";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h4" />
    </svg>
  );
}

function CapIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c3 2 7 2 10 0v-5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function ProgressStats() {
  const stats = [
    {
      number: "81",
      title: "Total Topics",
      type: "total",
    },
    {
      number: "57",
      title: "Completed Topics",
      type: "completed",
    },
    {
      number: "24",
      title: "Pending Topics",
      type: "pending",
    },
  ];

  return (
    <div className="progress-stats">

      {stats.map((stat) => (
        <div className="progress-stat-card" key={stat.title}>

          <div className="progress-stat-info">
            <h2>{stat.number}</h2>
            <p>{stat.title}</p>
          </div>

          <div className={`progress-stat-icon ${stat.type}`}>
            {stat.type === "total" && <BookIcon />}
            {stat.type === "completed" && <CapIcon />}
            {stat.type === "pending" && <ClockIcon />}
          </div>

        </div>
      ))}

    </div>
  );
}

export default ProgressStats;