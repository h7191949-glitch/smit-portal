import React from "react";
import TeacherProgressTopics from "../TeacherProgressTopics/TeacherProgressTopics";
import "./TeacherStudentProgress.css";

function TeacherStudentProgress({ learner }) {
  return (
    <section className="teacher-student-progress-card">
      <header className="teacher-student-progress-header">
        <div className="teacher-student-identity">
          <div className="teacher-progress-section-eyebrow">MY PROGRESS</div>
          <div className="teacher-student-name-row">
            <h2>{learner.name}</h2>
            <span className="teacher-student-batch">{learner.batch}</span>
          </div>
          <p className="teacher-student-schedule">{learner.schedule}</p>
        </div>
        <div className="teacher-student-topic-count">
          Topics: {learner.completedTopics}/{learner.totalTopics}
        </div>
      </header>

      <div className="teacher-student-overall-progress">
        <div className="teacher-student-overall-label">
          <span>Overall progress</span>
          <strong>{learner.percentage}%</strong>
        </div>
        <div
          className="teacher-student-overall-track"
          role="progressbar"
          aria-label="Overall course progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={learner.percentage}
        >
          <span style={{ width: `${learner.percentage}%` }} />
        </div>
      </div>

      <TeacherProgressTopics topics={learner.topics} />
    </section>
  );
}

export default TeacherStudentProgress;