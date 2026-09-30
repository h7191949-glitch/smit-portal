import React from "react";
import "./EnrolledCourses.css";

function EnrolledCourses() {
  return (
    <section className="profile-card enrolled-courses-card">
      <div className="profile-card-title enrolled-title">
        <div>
          <span className="profile-card-icon">▣</span>
          <h2>Enrolled Courses</h2>
        </div>

        <span className="course-count">1</span>
      </div>

      <div className="course-item">
        <div className="course-name">
          Modern Web Application Development
        </div>

        <span className="course-status">
          ENROLLED
        </span>
      </div>
    </section>
  );
}

export default EnrolledCourses;