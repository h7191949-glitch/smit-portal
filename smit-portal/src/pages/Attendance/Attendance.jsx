import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import AttendanceStats from "../../Components/AttendanceStats/AttendanceStats";
import AttendanceOverview from "../../Components/Attendance Overview/Attendance Overview";
import AttendanceTable from "../../Components/AttendanceTable/AttendanceTable";

import "./Attendance.css";

function Attendance({ onNavigate }) {
  return (
    <div className="attendance-layout">

      <Sidebar
        currentPage="attendance"
        onNavigate={onNavigate}
      />

      <main className="attendance-main">

        <div className="attendance-page">

          {/* HEADER */}
          <div className="attendance-page-header">

            <div className="attendance-breadcrumb">

              <span>Home</span>

              <span className="attendance-arrow">
                ›
              </span>

              <span className="attendance-course">
                Modern Web Application Development
              </span>

              <span className="attendance-arrow">
                ›
              </span>

              <strong>Attendance</strong>

            </div>

            <button
              className="attendance-feedback-button"
              type="button"
            >
              <span className="feedback-icon">
                ▣
              </span>

              Feedback
            </button>

          </div>

          {/* STATS */}
          <AttendanceStats />

          {/* OVERVIEW */}
          <AttendanceOverview />

          {/* TABLE */}
          <AttendanceTable />

        </div>

      </main>

    </div>
  );
}

export default Attendance;