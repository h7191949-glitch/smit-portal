import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ProgressStats from "../../Components/ProgressStats/ProgressStats";
import ProgressTopics from "../../Components/ProgressTopics/ProgressTopics";

import "./Progress.css";

function Progress({ onNavigate }) {
  return (
    <div className="progress-layout">

      {/* SIDEBAR */}

      <Sidebar
        currentPage="progress"
        onNavigate={onNavigate}
      />


      {/* MAIN */}

      <main className="progress-main">

        <div className="progress-page">

          {/* HEADER */}

          <div className="progress-page-header">

            <div className="progress-breadcrumb">

              <span>
                Home
              </span>

              <span className="breadcrumb-arrow">
                ›
              </span>

              <span className="course-name">
                Modern Web Application Development
              </span>

              <span className="breadcrumb-arrow">
                ›
              </span>

              <strong>
                Progress
              </strong>

            </div>


            <button
              className="feedback-button"
              type="button"
            >
              <span className="feedback-symbol">
                ▣
              </span>

              Feedback
            </button>

          </div>


          {/* STATS */}

          <ProgressStats />


          {/* TOPICS */}

          <ProgressTopics />

        </div>

      </main>

    </div>
  );
}

export default Progress;