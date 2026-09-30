import React, { useMemo, useState } from "react";

import TeacherSidebar from "../../Components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../Components/TeacherHeader/TeacherHeader";
import TeacherTabs from "../../Components/TeacherTabs/TeacherTabs";
import TeacherAttendanceStats from "../../Components/TeacherAttendanceStats/TeacherAttendanceStats";
import TeacherAttendanceTable from "../../Components/TeacherAttendanceTable/TeacherAttendanceTable";

import "./TeacherAttendance.css";

function getDayNumber(date) {
  return new Date(`${date}T00:00:00`).getDay();
}

function TeacherAttendance({ onNavigate }) {
  const [selectedDate, setSelectedDate] = useState("2026-09-15");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const attendanceSummary = useMemo(() => {
    const total = 57;
    const day = getDayNumber(selectedDate);

    if (![1, 2, 5].includes(day)) {
      return {
        total,
        present: 0,
        absent: 0,
        leave: 0,
      };
    }

    const present = 38;
    const absent = 15;
    const leave = 4;

    return {
      total,
      present,
      absent,
      leave,
    };
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div
      className={`teacher-dashboard-layout ${
        sidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
      }`}
    >
      <TeacherSidebar
        currentPage="teacherAttendance"
        onNavigate={onNavigate}
        onCollapseChange={setSidebarCollapsed}
      />

      <main className="teacher-dashboard-main">
        <div className="teacher-attendance-page-content">

          <TeacherHeader />

          <TeacherTabs
            activeTab="Attendance"
            onNavigate={onNavigate}
          />

          <div className="teacher-attendance-date-row">
            <div className="teacher-date-control">
              <label htmlFor="attendance-date">
                Select a Date
              </label>

              <input
                id="attendance-date"
                type="date"
                min="2026-04-15"
                max="2026-09-15"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
          </div>

          <TeacherAttendanceStats
            totalStudents={attendanceSummary.total}
            present={attendanceSummary.present}
            absent={attendanceSummary.absent}
            leave={attendanceSummary.leave}
          />

          <TeacherAttendanceTable
            selectedDate={selectedDate}
          />

        </div>
      </main>
    </div>
  );
}

export default TeacherAttendance;