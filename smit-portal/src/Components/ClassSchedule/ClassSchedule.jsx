import React from "react";
import { useState } from "react";
import Icon from "../Icon/Icon";
import "./ClassSchedule.css";

function ClassSchedule() {
  const [selectedDay, setSelectedDay] = useState(14);

  const days = [
    { day: "Sun", date: 13 },
    { day: "Mon", date: 14 },
    { day: "Tue", date: 15 },
    { day: "Wed", date: 16 },
    { day: "Thu", date: 17 },
    { day: "Fri", date: 18 },
    { day: "Sat", date: 19 },
  ];

  return (
    <div className="schedule-card">
      <div className="schedule-title">
        <Icon name="calendar" size={18} />
        <strong>Class Schedule</strong>
      </div>

      <div className="schedule-days">
        {days.map((item) => (
          <button
            key={item.date}
            className={selectedDay === item.date ? "selected" : ""}
            onClick={() => setSelectedDay(item.date)}
          >
            <span>{item.day}</span>
            <strong>{item.date}</strong>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ClassSchedule;