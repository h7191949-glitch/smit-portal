import React, { useState } from "react";
import "./AttendanceTable.css";

function AttendanceTable() {
  const [selectedMonth, setSelectedMonth] = useState("Sep 2026");

  const attendanceData = {
    "Sep 2026": [
      {
        class: "1",
        date: "Tue, Sep 1, 2026",
        status: "PRESENT",
      },
      {
        class: "2",
        date: "Thu, Sep 3, 2026",
        status: "PRESENT",
      },
      {
        class: "3",
        date: "Sun, Sep 6, 2026",
        status: "PRESENT",
      },
      {
        class: "4",
        date: "Tue, Sep 8, 2026",
        status: "PRESENT",
      },
      {
        class: "5",
        date: "Thu, Sep 10, 2026",
        status: "PRESENT",
      },
      {
        class: "6",
        date: "Sun, Sep 13, 2026",
        status: "PRESENT",
      },
      {
        class: "7",
        date: "Tue, Sep 15, 2026",
        status: "PRESENT",
      },
      {
        class: "8",
        date: "Thu, Sep 17, 2026",
        status: "PRESENT",
      },
    ],

    "Aug 2026": [
      {
        class: "1",
        date: "Tue, Aug 4, 2026",
        status: "PRESENT",
      },
      {
        class: "2",
        date: "Thu, Aug 6, 2026",
        status: "PRESENT",
      },
      {
        class: "3",
        date: "Sun, Aug 9, 2026",
        status: "ABSENT",
      },
      {
        class: "4",
        date: "Tue, Aug 11, 2026",
        status: "PRESENT",
      },
      {
        class: "5",
        date: "Thu, Aug 13, 2026",
        status: "PRESENT",
      },
    ],

    "Jul 2026": [
      {
        class: "1",
        date: "Thu, Jul 2, 2026",
        status: "PRESENT",
      },
      {
        class: "2",
        date: "Sun, Jul 5, 2026",
        status: "PRESENT",
      },
      {
        class: "3",
        date: "Tue, Jul 7, 2026",
        status: "ABSENT",
      },
      {
        class: "4",
        date: "Thu, Jul 9, 2026",
        status: "PRESENT",
      },
    ],
  };

  const currentData = attendanceData[selectedMonth];

  return (
    <section className="attendance-records">

      <div className="attendance-filter">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          <option value="Sep 2026">Sep 2026</option>
          <option value="Aug 2026">Aug 2026</option>
          <option value="Jul 2026">Jul 2026</option>
        </select>
      </div>

      <div className="attendance-table-wrapper">
        <table className="attendance-table">

          <thead>
            <tr>
              <th>Class</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((item) => (
              <tr key={`${selectedMonth}-${item.class}`}>
                <td>{item.class}</td>

                <td>{item.date}</td>

                <td>
                  <span
                    className={`attendance-status ${
                      item.status === "PRESENT"
                        ? "present-status"
                        : "absent-status"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </section>
  );
}

export default AttendanceTable;