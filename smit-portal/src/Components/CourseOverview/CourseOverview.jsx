import React from "react";
import Icon from "../Icon/Icon";
import "./CourseOverview.css";

function CourseOverview() {
  return (
    <section className="course-section">
      <h3 className="section-heading">Active Course</h3>

      <div className="course-card">

        <div className="course-top">
          <div>
            <h2>Modern Web Application Development</h2>

            <div className="course-times">
              <span>Mon 01:00 PM - 03:00 PM</span>
              <span>Wed 01:00 PM - 03:00 PM</span>
              <span>Fri 01:00 PM - 03:00 PM</span>
            </div>
          </div>

          <span className="enrolled-badge">ENROLLED</span>
        </div>

        <div className="course-progress">
          <div className="progress-label">
            <span>Progress</span>
            <span>74% Completed</span>
          </div>

          <div className="progress-track">
            <div className="progress-fill"></div>
          </div>
        </div>

        <div className="course-details">

          <div className="detail-item">
            <Icon name="hashtag" size={16} />
            <span>Batch:</span>
            <strong>20</strong>
          </div>

          <div className="detail-item">
            <Icon name="award" size={16} />
            <span>Roll:</span>
            <strong>776951</strong>
          </div>

          <div className="detail-item">
            <Icon name="location" size={16} />
            <span>Campus:</span>
            <strong>Zaitoon Ashraf IT Park</strong>
          </div>

          <div className="detail-item">
            <Icon name="location" size={16} />
            <span>City:</span>
            <strong>Karachi</strong>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CourseOverview;