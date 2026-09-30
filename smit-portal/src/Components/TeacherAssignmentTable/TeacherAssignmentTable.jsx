import React, { useEffect, useRef, useState } from "react";
import "./TeacherAssignmentTable.css";

function ViewIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20h4l11-11-4-4L4 16v4z" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
}

function TeacherAssignmentTable({
  assignments = [],
  onView,
  onEdit,
  onDelete,
}) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const handleEdit = (assignment) => {
    setOpenMenuId(null);

    if (onEdit) {
      onEdit(assignment);
    }
  };

  const handleDelete = (assignment) => {
    setOpenMenuId(null);

    if (onDelete) {
      onDelete(assignment.id);
    }
  };

  return (
    <section className="teacher-assignment-table-card">
      <div className="teacher-assignment-table-wrapper">
        <table className="teacher-assignment-table">
          <colgroup>
            <col className="assignment-title-col" />
            <col className="assignment-description-col" />
            <col className="assignment-topics-col" />
            <col className="assignment-date-col" />
            <col className="assignment-actions-col" />
          </colgroup>

          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Topics</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {assignments.map((assignment) => (
              <tr
                key={assignment.id}
                className={
                  assignment.type === "HACKATHON"
                    ? "hackathon-row"
                    : ""
                }
              >
                {/* TITLE */}
                <td>
                  <div className="assignment-title-cell">
                    <span className="assignment-title">
                      {assignment.title}
                    </span>

                    {assignment.type === "HACKATHON" && (
                      <span className="hackathon-label">
                        HACKATHON
                      </span>
                    )}
                  </div>
                </td>

                {/* DESCRIPTION */}
                <td>
                  <span className="assignment-description">
                    {assignment.description}
                  </span>
                </td>

                {/* TOPICS */}
                <td>
                  <div className="assignment-topic-list">
                    {!assignment.topics ||
                    assignment.topics.length === 0 ? (
                      <span className="no-topics">
                        No topics
                      </span>
                    ) : (
                      <>
                        {assignment.topics
                          .slice(0, 2)
                          .map((topic, index) => (
                            <span
                              className="topic-badge"
                              key={`${topic}-${index}`}
                            >
                              {topic}
                            </span>
                          ))}

                        {assignment.topics.length > 2 && (
                          <span className="topic-count">
                            +{assignment.topics.length - 2}
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </td>

                {/* DATE */}
                <td>
                  <span className="assignment-date">
                    {assignment.dueDate}
                  </span>
                </td>

                {/* ACTIONS */}
                <td>
                  <div className="assignment-action-buttons">
                    {/* VIEW */}
                    <button
                      type="button"
                      className="assignment-action-button"
                      title="View"
                      onClick={() => onView?.(assignment)}
                    >
                      <ViewIcon />
                    </button>

                    {/* EDIT + DELETE MENU */}
                    <div
                      className="assignment-action-menu-wrapper"
                      ref={
                        openMenuId === assignment.id
                          ? menuRef
                          : null
                      }
                    >
                      <button
                        type="button"
                        className="assignment-action-button"
                        title="Edit"
                        onClick={() =>
                          setOpenMenuId((current) =>
                            current === assignment.id
                              ? null
                              : assignment.id
                          )
                        }
                      >
                        <EditIcon />
                      </button>

                      {openMenuId === assignment.id && (
                        <div className="assignment-action-menu">
                          <button
                            type="button"
                            className="assignment-action-option"
                            onClick={() =>
                              handleEdit(assignment)
                            }
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="assignment-action-option assignment-action-option-delete"
                            onClick={() =>
                              handleDelete(assignment)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TeacherAssignmentTable;