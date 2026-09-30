import React from "react";
import { useState } from "react";
import "./CourseTabs.css";

function CourseTabs() {
  const [activeTab, setActiveTab] = useState("Quizzes");

  const tabs = ["Assignments", "Quizzes", "Events"];

  return (
    <div className="course-tabs-card">

      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === "Assignments" && (
          <p>No upcoming assignments</p>
        )}

        {activeTab === "Quizzes" && (
          <p>No upcoming quizzes</p>
        )}

        {activeTab === "Events" && (
          <p>No upcoming events</p>
        )}
      </div>
    </div>
  );
}

export default CourseTabs;