import React from "react";
import "./AssignmentDetails.css";

function AssignmentDetails({ assignment, onClose }) {
  if (!assignment) return null;

  return (
    <div className="assignment-modal-overlay" onClick={onClose}>
      <div
        className="assignment-details-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="assignment-details-header">
          <div>
            <h2>Assignment Details</h2>
            <p>View assignment information</p>
          </div>

          <button
            type="button"
            className="assignment-close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="assignment-details-body">
          <div className="detail-item detail-full">
            <span>Assignment</span>
            <strong>{assignment.name}</strong>
          </div>

          <div className="detail-item">
            <span>Topics</span>
            <strong>{assignment.topics}</strong>
          </div>

          <div className="detail-item">
            <span>Due Date</span>
            <strong>{assignment.dueDate}</strong>
          </div>

          <div className="detail-item">
            <span>Status</span>
            <strong
              className={
                assignment.status === "LATE SUBMITTED"
                  ? "detail-status late"
                  : "detail-status not-submitted"
              }
            >
              {assignment.status}
            </strong>
          </div>

          <div className="detail-item">
            <span>Type</span>
            <strong>
              {assignment.type === "hackathon"
                ? "Hackathon"
                : "Regular Assignment"}
            </strong>
          </div>
        </div>

        <div className="assignment-details-footer">
          <button
            type="button"
            className="details-close-button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDetails;