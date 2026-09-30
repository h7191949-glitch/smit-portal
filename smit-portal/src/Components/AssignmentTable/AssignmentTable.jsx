import React, { useState } from "react";
import AssignmentDetails from "../AssignmentDetails/AssignmentDetails";
import EditAssignment from "../EditAssignment/EditAssignment";
import "./AssignmentTable.css";

function ViewIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function UploadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 16V4" />
      <path d="M7 9l5-5 5 5" />
      <path d="M5 20h14" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 20h4L19 9l-4-4L4 16v4z" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
}

function AssignmentTable() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      name: "Admin panel (E commerce Dashboard)",
      topics: "7 Topics",
      dueDate: "September 10, 2026",
      status: "LATE SUBMITTED",
      type: "normal",
    },
    {
      id: 2,
      name: "QUICKSERVE WMA (Batch-20)",
      topics: "No topics",
      dueDate: "August 29, 2026",
      status: "NOT SUBMITTED",
      type: "hackathon",
    },
    {
      id: 3,
      name: "E-Commerce Website (React js)",
      topics: "4 Topics",
      dueDate: "August 17, 2026",
      status: "LATE SUBMITTED",
      type: "normal",
    },
    {
      id: 4,
      name: "Furniture E-Commerce Website",
      topics: "5 Topics",
      dueDate: "August 10, 2026",
      status: "LATE SUBMITTED",
      type: "normal",
    },
    {
      id: 5,
      name: "MaintainIQ (Batch-20)",
      topics: "No topics",
      dueDate: "July 11, 2026",
      status: "NOT SUBMITTED",
      type: "hackathon",
    },
    {
      id: 6,
      name: "JavaScript Assignment – 25 Questions",
      topics: "8 Topics",
      dueDate: "July 10, 2026",
      status: "LATE SUBMITTED",
      type: "normal",
    },
  ]);

  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [editingAssignment, setEditingAssignment] = useState(null);

  const [submitAssignment, setSubmitAssignment] = useState(null);

  /* VIEW */
  const handleView = (assignment) => {
    setSelectedAssignment(assignment);
  };

  /* SUBMIT */
  const handleSubmit = (assignment) => {
    setSubmitAssignment(assignment);
  };

  /* EDIT */
  const handleEdit = (assignment) => {
    setEditingAssignment(assignment);
  };

  /* SAVE EDIT */
  const handleSaveEdit = (updatedAssignment) => {
    setAssignments((previous) =>
      previous.map((item) =>
        item.id === updatedAssignment.id
          ? updatedAssignment
          : item
      )
    );

    setEditingAssignment(null);
  };

  /* CONFIRM SUBMIT */
  const handleConfirmSubmit = () => {
    alert(
      `Assignment "${submitAssignment.name}" submitted successfully.`
    );

    setSubmitAssignment(null);
  };

  return (
    <>
      <section className="assignment-table-section">
        <div className="assignment-table-wrapper">
          <table className="assignment-table">
            <thead>
              <tr>
                <th className="assignment-column">Assignment</th>
                <th className="topics-column">Topics</th>
                <th className="date-column">Due Date</th>
                <th className="status-column">Status</th>
                <th className="action-column">Action</th>
              </tr>
            </thead>

            <tbody>
              {assignments.map((assignment) => (
                <tr
                  key={assignment.id}
                  className={
                    assignment.type === "hackathon"
                      ? "hackathon-row"
                      : ""
                  }
                >
                  {/* ASSIGNMENT */}
                  <td className="assignment-column">
                    <div className="assignment-name-wrapper">
                      <span className="assignment-name">
                        {assignment.name}
                      </span>

                      {assignment.type === "hackathon" && (
                        <span className="hackathon-badge">
                          HACKATHON
                        </span>
                      )}
                    </div>
                  </td>

                  {/* TOPICS */}
                  <td className="topics-column">
                    {assignment.topics === "No topics" ? (
                      <span className="no-topics">
                        No topics
                      </span>
                    ) : (
                      <span className="topics-badge">
                        {assignment.topics}
                      </span>
                    )}
                  </td>

                  {/* DATE */}
                  <td className="date-column">
                    <span className="assignment-date">
                      {assignment.dueDate}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="status-column">
                    {assignment.status === "LATE SUBMITTED" && (
                      <span className="status-badge late">
                        LATE SUBMITTED
                      </span>
                    )}

                    {assignment.status === "NOT SUBMITTED" && (
                      <span className="status-badge not-submitted">
                        NOT SUBMITTED
                      </span>
                    )}
                  </td>

                  {/* ACTION */}
                  <td className="action-column">
                    {assignment.type === "hackathon" ? (
                      <div className="closed-action">
                        <ViewIcon />
                        <span>Submissions closed</span>
                      </div>
                    ) : (
                      <div className="assignment-actions">

                        {/* VIEW */}
                        <button
                          type="button"
                          title="View Assignment"
                          onClick={() =>
                            handleView(assignment)
                          }
                        >
                          <ViewIcon />
                        </button>

                        {/* SUBMIT */}
                        <button
                          type="button"
                          title="Submit Assignment"
                          onClick={() =>
                            handleSubmit(assignment)
                          }
                        >
                          <UploadIcon />
                        </button>

                        {/* EDIT */}
                        <button
                          type="button"
                          title="Edit Assignment"
                          onClick={() =>
                            handleEdit(assignment)
                          }
                        >
                          <EditIcon />
                        </button>

                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* VIEW DETAILS MODAL */}
      {selectedAssignment && (
        <AssignmentDetails
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
        />
      )}

      {/* EDIT MODAL */}
      {editingAssignment && (
        <EditAssignment
          assignment={editingAssignment}
          onSave={handleSaveEdit}
          onClose={() => setEditingAssignment(null)}
        />
      )}

      {/* SUBMIT MODAL */}
      {submitAssignment && (
        <div
          className="assignment-submit-overlay"
          onClick={() => setSubmitAssignment(null)}
        >
          <div
            className="assignment-submit-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="assignment-submit-header">
              <div>
                <h2>Submit Assignment</h2>
                <p>
                  Confirm your assignment submission
                </p>
              </div>

              <button
                type="button"
                className="assignment-submit-close"
                onClick={() => setSubmitAssignment(null)}
              >
                ×
              </button>
            </div>

            <div className="assignment-submit-body">
              <div className="submit-info">
                <span>Assignment</span>
                <strong>{submitAssignment.name}</strong>
              </div>

              <div className="submit-info">
                <span>Due Date</span>
                <strong>
                  {submitAssignment.dueDate}
                </strong>
              </div>

              <p className="submit-message">
                Are you sure you want to submit this
                assignment?
              </p>
            </div>

            <div className="assignment-submit-footer">
              <button
                type="button"
                className="submit-cancel-btn"
                onClick={() => setSubmitAssignment(null)}
              >
                Cancel
              </button>

              <button
                type="button"
                className="submit-confirm-btn"
                onClick={handleConfirmSubmit}
              >
                Submit Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AssignmentTable;