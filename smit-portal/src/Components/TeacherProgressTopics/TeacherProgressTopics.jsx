import React, { useState } from "react";
import "./TeacherProgressTopics.css";

function StatusIcon({ status }) {
  if (status === "completed") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 12 4 4 8-9" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 1.5" />
    </svg>
  );
}

function TopicProgress({ percentage }) {
  if (percentage === 0) {
    return <span className="teacher-topic-zero">0</span>;
  }

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <span className="teacher-topic-progress-ring">
      <svg viewBox="0 0 40 40" aria-hidden="true">
        <circle className="teacher-topic-ring-track" cx="20" cy="20" r={radius} />
        <circle
          className="teacher-topic-ring-value"
          cx="20"
          cy="20"
          r={radius}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <span>{percentage}%</span>
    </span>
  );
}

function TeacherProgressTopics({ topics }) {
  const [openTopic, setOpenTopic] = useState(null);

  return (
    <div className="teacher-progress-topic-list">
      {topics.map((topic) => {
        const isOpen = openTopic === topic.title;

        return (
          <section className="teacher-progress-topic" key={topic.title}>
            <button
              className="teacher-progress-topic-trigger"
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenTopic(isOpen ? null : topic.title)}
            >
              <span className={`teacher-progress-topic-status ${topic.status}`}>
                <StatusIcon status={topic.status} />
              </span>
              <span className="teacher-progress-topic-copy">
                <strong>{topic.title}</strong>
                <small>Topics: {topic.completed}/{topic.total}</small>
              </span>
              <span className="teacher-progress-topic-end">
                <TopicProgress percentage={topic.percentage} />
                <span className={`teacher-progress-topic-chevron ${isOpen ? "open" : ""}`}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="m4 6 4 4 4-4" />
                  </svg>
                </span>
              </span>
            </button>

            {isOpen && (
              <div className="teacher-progress-topic-details">
                <div>
                  <span>Completed Topics</span>
                  <strong>{topic.completed}</strong>
                </div>
                <div>
                  <span>Pending Topics</span>
                  <strong>{topic.total - topic.completed}</strong>
                </div>
                <div>
                  <span>Progress</span>
                  <strong>{topic.percentage}%</strong>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default TeacherProgressTopics;