import React from "react";
import "./Attendance Overview.css";

function AttendanceOverview() {
  const percentage = 79;

  return (
    <section className="attendance-overview">
      <div className="attendance-overview-header">
        <div>
          <h2>Attendance Overview</h2>

          <p>
            Your attendance is good. Keep it up!
          </p>
        </div>

        <strong>{percentage}%</strong>
      </div>

      <div className="attendance-progress">
        <div
          className="attendance-progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </section>
  );
}

export default AttendanceOverview;