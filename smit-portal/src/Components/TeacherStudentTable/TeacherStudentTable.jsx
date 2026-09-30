import React, { useMemo, useState } from "react";
import "./TeacherStudentTable.css";

function EyeIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function TeacherStudentTable() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: "Muhammad Hamza",
      roll: "SMIT-20101",
      email: "hamza@example.com",
      status: "ENROLLED",
    },
    {
      id: 2,
      name: "Abdul Rehman",
      roll: "SMIT-20102",
      email: "abdul@example.com",
      status: "ENROLLED",
    },
    {
      id: 3,
      name: "Ali Raza",
      roll: "SMIT-20103",
      email: "ali.raza@example.com",
      status: "ENROLLED",
    },
    {
      id: 4,
      name: "Ahmed Khan",
      roll: "SMIT-20104",
      email: "ahmed@example.com",
      status: "ENROLLED",
    },
    {
      id: 5,
      name: "Usman Tariq",
      roll: "SMIT-20105",
      email: "usman@example.com",
      status: "ENROLLED",
    },
    {
      id: 6,
      name: "Hassan Ahmed",
      roll: "SMIT-20106",
      email: "hassan@example.com",
      status: "ENROLLED",
    },
    {
      id: 7,
      name: "Saad Ali",
      roll: "SMIT-20107",
      email: "saad@example.com",
      status: "ENROLLED",
    },
    {
      id: 8,
      name: "Bilal Sheikh",
      roll: "SMIT-20108",
      email: "bilal@example.com",
      status: "ENROLLED",
    },
    {
      id: 9,
      name: "Fahad Khan",
      roll: "SMIT-20109",
      email: "fahad@example.com",
      status: "ENROLLED",
    },
    {
      id: 10,
      name: "Ayan Malik",
      roll: "SMIT-20110",
      email: "ayan@example.com",
      status: "ENROLLED",
    },
  ];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const text = search.toLowerCase().trim();

      const matchesSearch =
        student.name.toLowerCase().includes(text) ||
        student.email.toLowerCase().includes(text) ||
        student.roll.toLowerCase().includes(text);

      const matchesStatus =
        status === "All" || student.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [search, status]);

  return (
    <>
      <section className="teacher-student-section">

        <div className="teacher-filter-row">
          <div className="teacher-search">
            <span className="teacher-search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search by name, email or roll no..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select
            className="teacher-status-filter"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="All">All</option>
            <option value="ENROLLED">Enrolled</option>
          </select>
        </div>

        <div className="teacher-table-wrapper">
          <table className="teacher-student-table">

            <colgroup>
              <col className="col-name" />
              <col className="col-roll" />
              <col className="col-email" />
              <col className="col-status" />
              <col className="col-action" />
            </colgroup>

            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>

                  <td>
                    <div className="teacher-student-name">
                      <div className="teacher-student-avatar">
                        {student.name.charAt(0)}
                      </div>

                      <span>{student.name}</span>
                    </div>
                  </td>

                  <td>{student.roll}</td>

                  <td>{student.email}</td>

                  <td>
                    <span className="teacher-status-badge">
                      {student.status}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="teacher-view-button"
                      onClick={() => setSelectedStudent(student)}
                      aria-label={`View ${student.name}`}
                    >
                      <EyeIcon />
                    </button>
                  </td>

                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td colSpan="5" className="teacher-no-results">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

        <div className="teacher-pagination">

          <div className="teacher-records">
            Showing 1–10 of 201
            <br />
            records
          </div>

          <div className="teacher-page-controls">
            <button type="button" disabled>
              ‹
            </button>

            <span className="teacher-page active">1</span>
            <span className="teacher-page">2</span>
            <span className="teacher-page dots">...</span>
            <span className="teacher-page">21</span>

            <button type="button">
              Next <span>›</span>
            </button>
          </div>

        </div>
      </section>

      {selectedStudent && (
        <div
          className="teacher-student-modal-overlay"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="teacher-student-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="teacher-modal-header">
              <div>
                <h2>Student Information</h2>
                <p>View student details</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
              >
                ×
              </button>
            </div>

            <div className="teacher-modal-body">

              <div className="teacher-detail">
                <span>Name</span>
                <strong>{selectedStudent.name}</strong>
              </div>

              <div className="teacher-detail">
                <span>Roll Number</span>
                <strong>{selectedStudent.roll}</strong>
              </div>

              <div className="teacher-detail">
                <span>Email</span>
                <strong>{selectedStudent.email}</strong>
              </div>

              <div className="teacher-detail">
                <span>Status</span>
                <strong>{selectedStudent.status}</strong>
              </div>

            </div>

            <div className="teacher-modal-footer">
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default TeacherStudentTable;