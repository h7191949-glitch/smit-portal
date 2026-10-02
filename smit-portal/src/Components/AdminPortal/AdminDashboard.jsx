import React from "react";
import Icon from "../Icon/Icon";

const attendanceByDay = [
  { day: "Mon", value: 82 },
  { day: "Tue", value: 91 },
  { day: "Wed", value: 76 },
  { day: "Thu", value: 88 },
  { day: "Fri", value: 94 },
  { day: "Sat", value: 68 },
];

function AdminDashboard({ records, onNavigate }) {
  const stats = [
    { label: "Total Students", value: records.students.length, icon: "user", tone: "blue" },
    { label: "Total Teachers", value: records.teachers.length, icon: "graduation", tone: "green" },
    { label: "Total Courses", value: records.courses.length, icon: "book", tone: "amber" },
    { label: "Assignments", value: records.assignments.length, icon: "assignment", tone: "rose" },
  ];

  return (
    <div className="admin-dashboard-content">
      <section className="admin-stat-grid" aria-label="Institute overview">
        {stats.map((stat) => (
          <article className="admin-stat-card" key={stat.label}>
            <div>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
            <span className={`admin-stat-icon ${stat.tone}`}>
              <Icon name={stat.icon} size={21} />
            </span>
          </article>
        ))}
      </section>

      <section className="admin-overview-grid">
        <article className="admin-panel admin-attendance-panel">
          <div className="admin-panel-heading">
            <div>
              <p className="admin-eyebrow">THIS WEEK</p>
              <h2>Attendance overview</h2>
            </div>
            <strong className="admin-attendance-total">83%</strong>
          </div>
          <div className="admin-chart" role="img" aria-label="Attendance by day, Monday to Saturday">
            {attendanceByDay.map((item) => (
              <div className="admin-chart-column" key={item.day}>
                <span>{item.value}%</span>
                <div className="admin-chart-track">
                  <i style={{ height: `${item.value}%` }} />
                </div>
                <small>{item.day}</small>
              </div>
            ))}
          </div>
        </article>

        <article className="admin-panel admin-attendance-summary">
          <div className="admin-panel-heading">
            <div>
              <p className="admin-eyebrow">INSTITUTE SNAPSHOT</p>
              <h2>Quick summary</h2>
            </div>
            <Icon name="progress" size={20} />
          </div>
          <div className="admin-summary-row">
            <span>Active courses</span><strong>{records.courses.filter((item) => item.status === "Active").length}</strong>
          </div>
          <div className="admin-summary-row">
            <span>Pending assignments</span><strong>{records.assignments.filter((item) => item.status === "Pending").length}</strong>
          </div>
          <div className="admin-summary-row">
            <span>Fees pending</span><strong>{records.payments.filter((item) => item.paymentStatus === "Pending").length}</strong>
          </div>
          <button type="button" className="admin-text-link" onClick={() => onNavigate("adminAttendance")}>
            Review attendance <span aria-hidden="true">›</span>
          </button>
        </article>
      </section>

      <section className="admin-recent-grid">
        <article className="admin-panel">
          <div className="admin-panel-heading">
            <div><p className="admin-eyebrow">LATEST ENROLMENTS</p><h2>Recent students</h2></div>
            <button type="button" className="admin-text-link" onClick={() => onNavigate("adminStudents")}>View all <span aria-hidden="true">›</span></button>
          </div>
          <div className="admin-recent-list">
            {records.students.slice(0, 4).map((student) => (
              <div className="admin-recent-row" key={student.id}>
                <span className="admin-avatar">{student.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>
                <div><strong>{student.name}</strong><small>{student.course} · {student.batch}</small></div>
                <span className={`admin-status ${student.status.toLowerCase().replace(/\s+/g, "-")}`}>{student.status}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="admin-panel">
          <div className="admin-panel-heading">
            <div><p className="admin-eyebrow">DUE SOON</p><h2>Recent assignments</h2></div>
            <button type="button" className="admin-text-link" onClick={() => onNavigate("adminAssignments")}>View all <span aria-hidden="true">›</span></button>
          </div>
          <div className="admin-recent-list">
            {records.assignments.slice(0, 4).map((assignment) => (
              <div className="admin-assignment-row" key={assignment.id}>
                <span className="admin-assignment-icon"><Icon name="assignment" size={18} /></span>
                <div><strong>{assignment.name}</strong><small>{assignment.course} · Due {assignment.dueDate}</small></div>
                <span className={`admin-status ${assignment.status.toLowerCase().replace(/\s+/g, "-")}`}>{assignment.status}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}

export default AdminDashboard;