import React from "react";
import Icon from "../Icon/Icon";
import "./TeacherProgressOverview.css";

function TeacherProgressOverview({ comparisonView, onToggle, progress }) {
  return (
    <section className="teacher-progress-overview-card">
      <div className="teacher-progress-section-eyebrow">COMPARE PROGRESS</div>
      <h2>Course Progress Overview</h2>

      <button
        type="button"
        className="teacher-progress-view-toggle"
        aria-pressed={comparisonView}
        onClick={onToggle}
      >
        <Icon name="progress" size={16} />
        {comparisonView ? "Back to My Progress" : "Only My Progress"}
      </button>

      {comparisonView && (
        <div className="teacher-progress-comparison" aria-live="polite">
          <div className="teacher-progress-comparison-heading">
            <span>My Progress</span>
            <strong>{progress}%</strong>
          </div>
          <div className="teacher-progress-comparison-track">
            <span style={{ width: `${progress}%` }} />
          </div>
          <p>Course progress comparison for Modern Web Application Development</p>
        </div>
      )}
    </section>
  );
}

export default TeacherProgressOverview;