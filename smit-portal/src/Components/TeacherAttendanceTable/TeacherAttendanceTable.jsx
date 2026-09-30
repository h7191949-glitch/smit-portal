import React, { useMemo, useState } from "react";
import "./TeacherAttendanceTable.css";

const studentNames = [
  "Muhammad Hamza",
  "Abdul Rehman",
  "Ali Raza",
  "Ahmed Khan",
  "Usman Tariq",
  "Hassan Ahmed",
  "Saad Ali",
  "Bilal Sheikh",
  "Fahad Khan",
  "Ayan Malik",
  "Danish Ahmed",
  "Zain Abbas",
  "Huzaifa Khan",
  "Arslan Ahmed",
  "Muneeb Raza",
  "Talha Khan",
  "Shahzaib Ali",
  "Waleed Ahmed",
  "Sufyan Malik",
  "Rayyan Khan",
  "Abdullah Sheikh",
  "Hamza Ali",
  "Sameer Ahmed",
  "Yasir Khan",
  "Owais Raza",
  "Haris Ahmed",
  "Adeel Khan",
  "Saif Ullah",
  "Kashif Ali",
  "Taha Ahmed",
  "Danish Khan",
  "Rohan Malik",
  "Faisal Ahmed",
  "Noman Raza",
  "Imran Khan",
  "Shayan Ali",
  "Adnan Ahmed",
  "Ibrahim Khan",
  "Asad Raza",
  "Rehan Malik",
  "Faizan Ahmed",
  "Shahzaib Khan",
  "Murtaza Ali",
  "Usama Ahmed",
  "Rizwan Khan",
  "Junaid Raza",
  "Furqan Malik",
  "Saqlain Ahmed",
  "Abbas Khan",
  "Ahsan Ali",
  "Mohsin Ahmed",
  "Kamil Khan",
  "Haseeb Raza",
  "Naveed Ali",
  "Sami Ahmed",
  "Dawood Khan",
  "Arham Raza",
];

const students = studentNames.map((name, index) => ({
  id: index + 1,
  roll: `SMIT-${20101 + index}`,
  name,
}));

function getAttendanceStatus(studentId, date) {
  const day = new Date(`${date}T00:00:00`).getDay();

  // Sunday = 0, Saturday = 6
  // Monday = 1, Tuesday = 2, Friday = 5
  if (![1, 2, 5].includes(day)) {
    return "NOT MARKED";
  }

  const value = (studentId * 7 + date.replaceAll("-", "") * 1) % 20;

  if (value < 13) {
    return "PRESENT";
  }

  if (value < 18) {
    return "ABSENT";
  }

  return "LEAVE";
}

function TeacherAttendanceTable({ selectedDate }) {
  const [page, setPage] = useState(1);

  const recordsPerPage = 10;

  const attendanceStudents = useMemo(() => {
    return students.map((student) => ({
      ...student,
      status: getAttendanceStatus(student.id, selectedDate),
    }));
  }, [selectedDate]);

  const totalPages = Math.ceil(
    attendanceStudents.length / recordsPerPage
  );

  const startIndex = (page - 1) * recordsPerPage;

  const visibleStudents = attendanceStudents.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const getStatusClass = (status) => {
    if (status === "PRESENT") return "present";
    if (status === "ABSENT") return "absent";
    if (status === "LEAVE") return "leave";
    return "not-marked";
  };

  return (
    <section className="teacher-attendance-table-section">
      <div className="teacher-attendance-table-wrapper">
        <table className="teacher-attendance-table">
          <colgroup>
            <col className="attendance-roll-column" />
            <col className="attendance-name-column" />
            <col className="attendance-status-column" />
          </colgroup>

          <thead>
            <tr>
              <th>Roll #</th>
              <th>Full Name</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {visibleStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.roll}</td>

                <td>{student.name}</td>

                <td>
                  <span
                    className={`attendance-status ${getStatusClass(
                      student.status
                    )}`}
                  >
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="teacher-attendance-pagination">
        <div className="attendance-record-count">
          Showing {startIndex + 1}–
          {Math.min(
            startIndex + recordsPerPage,
            attendanceStudents.length
          )}{" "}
          of {attendanceStudents.length}
          <br />
          students
        </div>

        <div className="attendance-page-controls">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            ‹
            <span>Previous</span>
          </button>

          <button
            type="button"
            className={page === 1 ? "active" : ""}
            onClick={() => setPage(1)}
          >
            1
          </button>

          <button
            type="button"
            className={page === 2 ? "active" : ""}
            onClick={() => setPage(2)}
          >
            2
          </button>

          <span>...</span>

          <button
            type="button"
            className={page === totalPages ? "active" : ""}
            onClick={() => setPage(totalPages)}
          >
            {totalPages}
          </button>

          <button
            type="button"
            disabled={page === totalPages}
            onClick={() =>
              setPage((p) => Math.min(totalPages, p + 1))
            }
          >
            <span>Next</span>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeacherAttendanceTable;