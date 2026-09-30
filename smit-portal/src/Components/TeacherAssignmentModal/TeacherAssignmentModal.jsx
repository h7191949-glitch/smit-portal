import React, { useEffect, useState } from "react";
import "./TeacherAssignmentModal.css";

function TeacherAssignmentModal({
  mode = "create",
  assignment,
  onClose,
  onSubmit,
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topics, setTopics] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [type, setType] = useState("REGULAR");

  useEffect(() => {
    if (mode === "edit" && assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setTopics(assignment.topics.join(", "));
      setDueDate(assignment.dueDate);
      setType(assignment.type);
    }
  }, [mode, assignment]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const topicArray = topics
      .split(",")
      .map((topic) => topic.trim())
      .filter(Boolean);

    onSubmit({
      ...(assignment || {}),
      title: title.trim(),
      description: description.trim(),
      topics: topicArray,
      dueDate: dueDate || "Not specified",
      type,
    });
  };

  return (
    <div
      className="teacher-assignment-modal-overlay"
      onClick={onClose}
    >
      <div
        className="teacher-assignment-modal"
        onClick={(event) => event.stopPropagation()}
      >

        <div className="teacher-assignment-modal-header">
          <div>
            <h2>
              {mode === "edit"
                ? "Edit Assignment"
                : "New Assignment"}
            </h2>

            <p>
              {mode === "edit"
                ? "Update assignment information"
                : "Create a new assignment"}
            </p>
          </div>

          <button
            type="button"
            className="teacher-assignment-modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          className="teacher-assignment-form"
          onSubmit={handleSubmit}
        >

          <div className="teacher-assignment-form-group">
            <label>Assignment Title</label>

            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter assignment title"
            />
          </div>

          <div className="teacher-assignment-form-group">
            <label>Description</label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Enter assignment description"
              rows="4"
            />
          </div>

          <div className="teacher-assignment-form-group">
            <label>Topics</label>

            <input
              type="text"
              value={topics}
              onChange={(event) =>
                setTopics(event.target.value)
              }
              placeholder="React, JavaScript, HTML"
            />

            <small>
              Separate multiple topics with commas.
            </small>
          </div>

          <div className="teacher-assignment-form-row">

            <div className="teacher-assignment-form-group">
              <label>Due Date</label>

              <input
                type="date"
                value={dueDate}
                onChange={(event) =>
                  setDueDate(event.target.value)
                }
              />
            </div>

            <div className="teacher-assignment-form-group">
              <label>Type</label>

              <select
                value={type}
                onChange={(event) =>
                  setType(event.target.value)
                }
              >
                <option value="REGULAR">
                  Regular
                </option>

                <option value="HACKATHON">
                  Hackathon
                </option>
              </select>
            </div>

          </div>

          <div className="teacher-assignment-form-footer">

            <button
              type="button"
              className="teacher-assignment-cancel"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="teacher-assignment-create"
            >
              {mode === "edit"
                ? "Save Changes"
                : "Create Assignment"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default TeacherAssignmentModal;