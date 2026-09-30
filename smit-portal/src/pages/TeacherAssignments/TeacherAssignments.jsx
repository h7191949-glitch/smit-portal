import React, { useState } from "react";
import TeacherSidebar from "../../Components/TeacherSidebar/TeacherSidebar";
import TeacherTabs from "../../Components/TeacherTabs/TeacherTabs";
import TeacherAssignmentTable from "../../Components/TeacherAssignmentTable/TeacherAssignmentTable";
import "./TeacherAssignments.css";

function TeacherAssignments({ onNavigate, onLogout }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Admin panel (E-commerce Dashboard)",
      description: "Create the provided UI design in React or next.js.",
      topics: ["ReactJS Introduction", "React Components", "JavaScript"],
      dueDate: "Sep 10, 2026",
      type: "NORMAL",
    },
    {
      id: 2,
      title: "QUICKSERVE WMA (Batch-20)",
      description: "Challenge: Build a modern service-booking web application.",
      topics: [],
      dueDate: "Aug 30, 2026",
      type: "HACKATHON",
    },
    {
      id: 3,
      title: "E-Commerce Website (React js)",
      description: "React js frontend. Create all required e-commerce features.",
      topics: ["ReactJS Introduction", "React Components", "React Hooks"],
      dueDate: "Aug 17, 2026",
      type: "NORMAL",
    },
    {
      id: 4,
      title: "Furniture E-Commerce Website",
      description: "Follow the Figma design and create a responsive website.",
      topics: ["JavaScript Book", "GitHub", "React"],
      dueDate: "Aug 10, 2026",
      type: "NORMAL",
    },
    {
      id: 5,
      title: "MaintainIQ (Batch-20)",
      description: "Build a maintenance management application.",
      topics: [],
      dueDate: "Jul 12, 2026",
      type: "HACKATHON",
    },
    {
      id: 6,
      title: "JavaScript Assignment",
      description: "Complete all 25 JavaScript questions provided in the assignment.",
      topics: ["JavaScript Introduction", "JavaScript Chapter"],
      dueDate: "Jul 10, 2026",
      type: "NORMAL",
    },
    {
      id: 7,
      title: "Budgeting App",
      description: "Develop a fully responsive and functional budgeting web application.",
      topics: ["React Components", "JavaScript", "CSS"],
      dueDate: "Jun 1, 2026",
      type: "NORMAL",
    },
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [viewAssignment, setViewAssignment] = useState(null);
  const [editAssignment, setEditAssignment] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    topics: "",
    dueDate: "",
    type: "NORMAL",
  });

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      topics: "",
      dueDate: "",
      type: "NORMAL",
    });
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      return;
    }

    const newAssignment = {
      id: Date.now(),
      title: form.title.trim(),
      description: form.description.trim() || "No description provided.",
      topics: form.topics
        .split(",")
        .map((topic) => topic.trim())
        .filter(Boolean),
      dueDate: form.dueDate
        ? new Date(form.dueDate).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "Not specified",
      type: form.type,
    };

    setAssignments((previous) => [newAssignment, ...previous]);
    setShowCreateModal(false);
    resetForm();
  };

  const handleDelete = (id) => {
    setAssignments((previous) =>
      previous.filter((assignment) => assignment.id !== id)
    );
  };

  const handleEditSave = (updatedAssignment) => {
    setAssignments((previous) =>
      previous.map((assignment) =>
        assignment.id === updatedAssignment.id
          ? updatedAssignment
          : assignment
      )
    );

    setEditAssignment(null);
  };

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;

    setEditAssignment((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <div
      className={`teacher-assignment-page ${
        sidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
      }`}
    >

      <TeacherSidebar
        currentPage="teacherAssignments"
        onNavigate={onNavigate}
        onLogout={onLogout}
        onCollapseChange={setSidebarCollapsed}
      />

      <main className="teacher-assignment-main">
        <div className="teacher-assignment-content">
          <div className="teacher-assignment-header">
            <div className="teacher-assignment-header-left">
              <div className="teacher-assignment-breadcrumb">
                <span>Dashboard</span>
                <span className="teacher-assignment-breadcrumb-arrow">›</span>
                <strong>Modern Web Application Development</strong>
              </div>

              <div className="teacher-assignment-title-row">
                <h1>Modern Web Application Development</h1>
              </div>
            </div>

            <button type="button" className="teacher-assignment-feedback-button">
              <span>▤</span>
              Feedback
            </button>
          </div>

          <TeacherTabs
            activeTab="Assignments"
            onNavigate={onNavigate}
          />

          <div className="teacher-assignment-toolbar">
            <button
              type="button"
              className="new-assignment-button"
              onClick={() => {
                resetForm();
                setShowCreateModal(true);
              }}
            >
              <span>+</span>
              New Assignment
            </button>
          </div>

          <TeacherAssignmentTable
            assignments={assignments}
            onView={setViewAssignment}
            onEdit={setEditAssignment}
            onDelete={handleDelete}
          />
        </div>

      </main>

      {/* CREATE ASSIGNMENT MODAL */}
      {showCreateModal && (
        <div
          className="teacher-assignment-modal-overlay"
          onClick={() => setShowCreateModal(false)}
        >
          <div
            className="teacher-assignment-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="teacher-modal-header">
              <div>
                <h2>New Assignment</h2>
                <p>Create a new assignment for your students.</p>
              </div>

              <button
                type="button"
                className="teacher-modal-close"
                onClick={() => setShowCreateModal(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateAssignment}>

              <div className="teacher-form-group">
                <label>Assignment Title</label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      title: e.target.value,
                    }))
                  }
                  placeholder="Enter assignment title"
                />
              </div>

              <div className="teacher-form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Enter assignment description"
                  rows="3"
                />
              </div>

              <div className="teacher-form-group">
                <label>Topics</label>
                <input
                  type="text"
                  name="topics"
                  value={form.topics}
                  onChange={(e) =>
                    setForm((previous) => ({
                      ...previous,
                      topics: e.target.value,
                    }))
                  }
                  placeholder="React, JavaScript, CSS"
                />
                <small>Separate multiple topics with commas.</small>
              </div>

              <div className="teacher-form-row">

                <div className="teacher-form-group">
                  <label>Due Date</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={(e) =>
                      setForm((previous) => ({
                        ...previous,
                        dueDate: e.target.value,
                      }))
                    }
                  />
                </div>

                <div className="teacher-form-group">
                  <label>Type</label>
                  <select
                    name="type"
                    value={form.type}
                    onChange={(e) =>
                      setForm((previous) => ({
                        ...previous,
                        type: e.target.value,
                      }))
                    }
                  >
                    <option value="NORMAL">Regular Assignment</option>
                    <option value="HACKATHON">Hackathon</option>
                  </select>
                </div>

              </div>

              <div className="teacher-modal-footer">
                <button
                  type="button"
                  className="teacher-cancel-button"
                  onClick={() => setShowCreateModal(false)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="teacher-create-button"
                >
                  Create Assignment
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* VIEW MODAL */}
      {viewAssignment && (
        <div
          className="teacher-assignment-modal-overlay"
          onClick={() => setViewAssignment(null)}
        >
          <div
            className="teacher-assignment-modal teacher-view-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="teacher-modal-header">
              <div>
                <h2>Assignment Details</h2>
                <p>View assignment information.</p>
              </div>

              <button
                type="button"
                className="teacher-modal-close"
                onClick={() => setViewAssignment(null)}
              >
                ×
              </button>
            </div>

            <div className="teacher-view-details">

              <div>
                <span>Title</span>
                <strong>{viewAssignment.title}</strong>
              </div>

              <div>
                <span>Description</span>
                <strong>{viewAssignment.description}</strong>
              </div>

              <div>
                <span>Topics</span>
                <strong>
                  {viewAssignment.topics.length
                    ? viewAssignment.topics.join(", ")
                    : "No topics"}
                </strong>
              </div>

              <div>
                <span>Due Date</span>
                <strong>{viewAssignment.dueDate}</strong>
              </div>

              <div>
                <span>Type</span>
                <strong>
                  {viewAssignment.type === "HACKATHON"
                    ? "Hackathon"
                    : "Regular Assignment"}
                </strong>
              </div>

            </div>

            <div className="teacher-modal-footer">
              <button
                type="button"
                className="teacher-create-button"
                onClick={() => setViewAssignment(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editAssignment && (
        <div
          className="teacher-assignment-modal-overlay"
          onClick={() => setEditAssignment(null)}
        >
          <div
            className="teacher-assignment-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="teacher-modal-header">
              <div>
                <h2>Edit Assignment</h2>
                <p>Update assignment information.</p>
              </div>

              <button
                type="button"
                className="teacher-modal-close"
                onClick={() => setEditAssignment(null)}
              >
                ×
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();

                handleEditSave({
                  ...editAssignment,
                  topics:
                    typeof editAssignment.topics === "string"
                      ? editAssignment.topics
                          .split(",")
                          .map((topic) => topic.trim())
                          .filter(Boolean)
                      : editAssignment.topics,
                });
              }}
            >

              <div className="teacher-form-group">
                <label>Assignment Title</label>
                <input
                  type="text"
                  name="title"
                  value={editAssignment.title}
                  onChange={handleEditFormChange}
                />
              </div>

              <div className="teacher-form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={editAssignment.description}
                  onChange={handleEditFormChange}
                  rows="3"
                />
              </div>

              <div className="teacher-form-group">
                <label>Topics</label>
                <input
                  type="text"
                  name="topics"
                  value={
                    Array.isArray(editAssignment.topics)
                      ? editAssignment.topics.join(", ")
                      : editAssignment.topics
                  }
                  onChange={handleEditFormChange}
                />
              </div>

              <div className="teacher-modal-footer">

                <button
                  type="button"
                  className="teacher-cancel-button"
                  onClick={() => setEditAssignment(null)}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="teacher-create-button"
                >
                  Save Changes
                </button>

              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
}

export default TeacherAssignments;