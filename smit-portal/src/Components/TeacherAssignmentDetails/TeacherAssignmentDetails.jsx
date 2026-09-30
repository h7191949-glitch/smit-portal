import React from "react";
import "./TeacherAssignmentDetails.css";

function TeacherAssignmentDetails({
  assignment,
  onClose,
}) {
  if (!assignment) {
    return null;
  }

  return (
    <div
      className="teacher-assignment-details-overlay"
      onClick={onClose}
    >
      <div
        className="teacher-assignment-details-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="teacher-assignment-details-header">
          <div>
            <h2>Assignment Details</h2>
            <p>View assignment information</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="teacher-assignment-details-close"
          >
            ×
          </button>
        </div>

        <div className="teacher-assignment-details-body">

          <div className="teacher-detail-full">
            <span>Title</span>
            <strong>{assignment.title}</strong>
          </div>

          <div className="teacher-detail-full">
            <span>Description</span>
            <p>{assignment.description}</p>
          </div>

          <div className="teacher-detail-grid">

            <div>
              <span>Due Date</span>
              <strong>{assignment.dueDate}</strong>
            </div>

            <div>
              <span>Type</span>
              <strong>
                {assignment.type === "HACKATHON"
                  ? "Hackathon"
                  : "Regular Assignment"}
              </strong>
            </div>

          </div>

          <div className="teacher-detail-full">
            <span>Topics</span>

            <div className="teacher-detail-topics">
              {assignment.topics.length === 0 ? (
                <em>No topics</em>
              ) : (
                assignment.topics.map((topic, index) => (
                  <span key={index}>{topic}</span>
                ))
              )}
            </div>
          </div>

        </div>

        <div className="teacher-assignment-details-footer">
          <button
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default TeacherAssignmentDetails;