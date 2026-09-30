import React from "react";
import "./AssignmentStats.css";

function AssignmentStats() {
  return (
    <div className="assignment-stats">

      <div className="assignment-stat-card">
        <div className="assignment-stat-content">
          <span className="assignment-stat-number">16</span>
          <span className="assignment-stat-title">Assigned</span>
        </div>

        <div className="assignment-stat-icon blue">
          ☷
        </div>
      </div>


      <div className="assignment-stat-card">
        <div className="assignment-stat-content">
          <span className="assignment-stat-number">12</span>
          <span className="assignment-stat-title">Submitted</span>
        </div>

        <div className="assignment-stat-icon green">
          ☷
        </div>
      </div>


      <div className="assignment-stat-card">
        <div className="assignment-stat-content">
          <span className="assignment-stat-number">4</span>
          <span className="assignment-stat-title">Pending</span>
        </div>

        <div className="assignment-stat-icon yellow">
          ◷
        </div>
      </div>

    </div>
  );
}

export default AssignmentStats;