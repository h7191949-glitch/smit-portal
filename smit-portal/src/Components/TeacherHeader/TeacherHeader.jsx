import React from "react";
import "./TeacherHeader.css";

function TeacherHeader() {
  return (
    <div className="teacher-header">
      <div className="teacher-header-left">
        <div className="teacher-breadcrumb">
          <span>Dashboard</span>
          <span className="teacher-breadcrumb-arrow">›</span>
          <strong>Modern Web Application Development</strong>
        </div>

        <h1>Modern Web Application Development</h1>
      </div>

      <button type="button" className="teacher-feedback-button">
        <span className="feedback-icon">▤</span>
        Feedback
      </button>
    </div>
  );
}

export default TeacherHeader;