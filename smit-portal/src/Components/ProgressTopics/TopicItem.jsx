import React, { useState } from "react";
import "./TopicItem.css";

function CompletedIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M5 12l4 4L19 6" />
    </svg>
  );
}

function PendingIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  );
}

function TopicCircle({ percentage }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  const offset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="topic-progress-circle">

      <svg viewBox="0 0 44 44">

        <circle
          className="topic-circle-background"
          cx="22"
          cy="22"
          r={radius}
        />

        {percentage > 0 && (
          <circle
            className="topic-circle-progress"
            cx="22"
            cy="22"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        )}

      </svg>

      <span>
        {percentage}%
      </span>

    </div>
  );
}

function TopicItem({ topic }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`topic-item ${isOpen ? "topic-open" : ""}`}>

      {/* TOPIC ROW */}

      <button
        className="topic-row"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >

        {/* Status Icon */}

        <span className={`topic-status ${topic.status}`}>
          {topic.status === "completed" ? (
            <CompletedIcon />
          ) : (
            <PendingIcon />
          )}
        </span>


        {/* Topic Text */}

        <span className="topic-information">

          <strong>
            {topic.title}
          </strong>

          <small>
            Topics: {topic.completed}/{topic.total}
          </small>

        </span>


        {/* Right Side */}

        <span className="topic-right">

          {topic.percentage > 0 ? (
            <TopicCircle
              percentage={topic.percentage}
            />
          ) : (
            <span className="topic-zero">
              0
            </span>
          )}

          <span
            className={`topic-arrow ${
              isOpen ? "arrow-up" : ""
            }`}
          >
            ⌄
          </span>

        </span>

      </button>


      {/* EXPANDED CONTENT */}

      {isOpen && (
        <div className="topic-expanded">

          <div className="expanded-content">

            <span>
              Completed Topics
            </span>

            <strong>
              {topic.completed}
            </strong>

          </div>

          <div className="expanded-content">

            <span>
              Pending Topics
            </span>

            <strong>
              {topic.total - topic.completed}
            </strong>

          </div>

          <div className="expanded-content">

            <span>
              Progress
            </span>

            <strong>
              {topic.percentage}%
            </strong>

          </div>

        </div>
      )}

    </div>
  );
}

export default TopicItem;