import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import AssignmentStats from "../../Components/AssignmentStats/AssignmentStats";
import AssignmentTable from "../../Components/AssignmentTable/AssignmentTable";

import "./Assignment.css";

function Assignment({ onNavigate }) {
  return (
    <div className="assignment-layout">

      <Sidebar
        currentPage="assignment"
        onNavigate={onNavigate}
      />

      <main className="assignment-main">

        <div className="assignment-page">

          {/* HEADER */}

          <div className="assignment-page-header">

            <div className="assignment-breadcrumb">

              <span>Home</span>

              <span className="assignment-arrow">
                ›
              </span>

              <span>
                Modern Web Application Development
              </span>

              <span className="assignment-arrow">
                ›
              </span>

              <strong>Assignment</strong>

            </div>


            <button
              className="assignment-feedback-button"
              type="button"
            >
              <span>▣</span>
              Feedback
            </button>

          </div>


          {/* STATS */}

          <AssignmentStats />


          {/* TABLE */}

          <AssignmentTable />

        </div>

      </main>

    </div>
  );
}

export default Assignment;