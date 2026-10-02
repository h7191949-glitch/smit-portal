import React, { useState } from "react";
import TeacherSidebar from "../../Components/TeacherSidebar/TeacherSidebar";
import TeacherTabs from "../../Components/TeacherTabs/TeacherTabs";
import TeacherProgressOverview from "../../Components/TeacherProgressOverview/TeacherProgressOverview";
import TeacherStudentProgress from "../../Components/TeacherStudentProgress/TeacherStudentProgress";
import "./TeacherProgress.css";

const learner = {
  name: "S Muzammil Javed - ZalToon Ashraf IT Park",
  batch: "Batch 20",
  schedule: "Mon 01:00 PM - 03:00 PM | Wed 01:00 PM - 03:00 PM | Fri 01:00 PM - 03:00 PM",
  completedTopics: 56,
  totalTopics: 81,
  percentage: 69,
  topics: [
    {
      title: "Web Designing",
      completed: 20,
      total: 20,
      percentage: 100,
      status: "completed",
    },
    {
      title: "Front-End Development",
      completed: 26,
      total: 31,
      percentage: 84,
      status: "pending",
    },
    {
      title: "Modern Front-End Development",
      completed: 10,
      total: 14,
      percentage: 71,
      status: "pending",
    },
    {
      title: "Back-End Development",
      completed: 0,
      total: 16,
      percentage: 0,
      status: "pending",
    },
  ],
};

function TeacherProgress({ onNavigate, onLogout }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [comparisonView, setComparisonView] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    setFeedbackSent(true);
  };

  const closeFeedback = () => {
    setShowFeedback(false);
    setFeedbackSent(false);
  };

  return (
    <div
      className={`teacher-progress-page ${
        sidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
      }`}
    >
      <TeacherSidebar
        currentPage="teacherProgress"
        onNavigate={onNavigate}
        onLogout={onLogout}
        onCollapseChange={setSidebarCollapsed}
      />

      <main className="teacher-progress-main">
        <div className="teacher-progress-content">
          <header className="teacher-progress-header">
            <div className="teacher-progress-heading">
              <div className="teacher-progress-breadcrumb">
                <button type="button" onClick={() => onNavigate?.("teacherDashboard")}>
                  Dashboard
                </button>
                <span aria-hidden="true">›</span>
                <strong>Modern Web Application Development</strong>
              </div>
              <h1>Modern Web Application Development</h1>
            </div>

            <button
              type="button"
              className="teacher-progress-feedback-button"
              onClick={() => setShowFeedback(true)}
            >
              <span aria-hidden="true">▤</span>
              Feedback
            </button>
          </header>

          <TeacherTabs activeTab="Course Progress" onNavigate={onNavigate} />

          <div className="teacher-progress-panels">
            <TeacherProgressOverview
              comparisonView={comparisonView}
              onToggle={() => setComparisonView((current) => !current)}
              progress={learner.percentage}
            />
            <TeacherStudentProgress learner={learner} />
          </div>
        </div>
      </main>

      {showFeedback && (
        <div className="teacher-progress-modal-backdrop">
          <section
            className="teacher-progress-feedback-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="teacher-progress-feedback-title"
          >
            <div className="teacher-progress-modal-header">
              <h2 id="teacher-progress-feedback-title">Feedback</h2>
              <button type="button" onClick={closeFeedback} aria-label="Close feedback">
                ×
              </button>
            </div>
            {feedbackSent ? (
              <div className="teacher-progress-feedback-success">
                <p>Thank you. Your feedback has been recorded.</p>
                <button type="button" onClick={closeFeedback}>Done</button>
              </div>
            ) : (
              <form onSubmit={handleFeedbackSubmit}>
                <label htmlFor="teacher-progress-feedback-message">
                  Your feedback
                </label>
                <textarea
                  id="teacher-progress-feedback-message"
                  rows="4"
                  required
                  placeholder="Share your feedback"
                />
                <div className="teacher-progress-feedback-actions">
                  <button type="button" onClick={closeFeedback}>Cancel</button>
                  <button type="submit">Submit feedback</button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default TeacherProgress;