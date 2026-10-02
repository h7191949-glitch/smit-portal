import React from "react";
import "./EnrolledCourses.css";

function EnrolledCourses({
  title = "Enrolled Courses",
  courses = ["Modern Web Application Development"],
  status = "ENROLLED",
}) {
  return (
    <section className="profile-card enrolled-courses-card">
      <div className="profile-card-title enrolled-title">
        <div>
          <span className="profile-card-icon">▣</span>
          <h2>{title}</h2>
        </div>

        <span className="course-count">{courses.length}</span>
      </div>

      {courses.map((course) => (
        <div className="course-item" key={course}>
          <div className="course-name">{course}</div>

          <span className="course-status">{status}</span>
        </div>
      ))}
    </section>
  );
}

export default EnrolledCourses;