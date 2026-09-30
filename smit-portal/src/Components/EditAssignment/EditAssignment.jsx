import React, { useState } from "react";
import "./EditAssignment.css";

function EditAssignment({ assignment, onSave, onClose }) {
  const [formData, setFormData] = useState({
    name: assignment.name,
    topics: assignment.topics,
    dueDate: assignment.dueDate,
    status: assignment.status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...assignment,
      ...formData,
    });
  };

  return (
    <div className="edit-assignment-overlay" onClick={onClose}>
      <div
        className="edit-assignment-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="edit-assignment-header">
          <div>
            <h2>Edit Assignment</h2>
            <p>Update assignment information</p>
          </div>

          <button
            type="button"
            className="edit-close-btn"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          className="edit-assignment-form"
          onSubmit={handleSubmit}
        >
          <div className="edit-form-group">
            <label>Assignment Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="edit-form-row">
            <div className="edit-form-group">
              <label>Topics</label>

              <input
                type="text"
                name="topics"
                value={formData.topics}
                onChange={handleChange}
              />
            </div>

            <div className="edit-form-group">
              <label>Due Date</label>

              <input
                type="text"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="edit-form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="LATE SUBMITTED">
                LATE SUBMITTED
              </option>

              <option value="NOT SUBMITTED">
                NOT SUBMITTED
              </option>
            </select>
          </div>

          <div className="edit-assignment-footer">
            <button
              type="button"
              className="edit-cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="edit-save-btn"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAssignment;