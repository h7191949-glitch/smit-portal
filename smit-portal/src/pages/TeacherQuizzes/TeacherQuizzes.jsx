import React, { useState } from "react";
import TeacherSidebar from "../../Components/TeacherSidebar/TeacherSidebar";
import TeacherTabs from "../../Components/TeacherTabs/TeacherTabs";
import "./TeacherQuizzes.css";

const initialQuizzes = [
  {
    id: 1,
    title: "Javascript (Quiz-4)",
    courses: "Modern Web Application Development, Web and Mobile App Development",
    date: "2026-06-24",
    expiry: "2026-06-24",
    status: "ACTIVE",
    submissions: 23,
  },
  {
    id: 2,
    title: "Javascript (Quiz-3)",
    courses: "Modern Web Application Development, Web and Mobile App Development",
    date: "2026-06-03",
    expiry: "2026-06-03",
    status: "ACTIVE",
    submissions: 21,
  },
  {
    id: 3,
    title: "Javascript (Quiz-2)",
    courses: "Modern Web Application Development, Web and Mobile App Development",
    date: "2026-05-18",
    expiry: "2026-05-18",
    status: "ACTIVE",
    submissions: 22,
  },
  {
    id: 4,
    title: "Javascript (Quiz-1)",
    courses: "Modern Web Application Development, Web and Mobile App Development, JavaScript Crash Course, Full Stack Foundations for Teens",
    date: "2026-04-17",
    expiry: "2026-04-17",
    status: "ACTIVE",
    submissions: 18,
  },
  {
    id: 5,
    title: "CSS Quiz",
    courses: "Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development",
    date: "2026-03-27",
    expiry: "2026-03-27",
    status: "ACTIVE",
    submissions: 17,
  },
  {
    id: 6,
    title: "HTML Quiz",
    courses: "Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development, Mobile App Development (React Native)",
    date: "2026-01-07",
    expiry: "2026-01-07",
    status: "ACTIVE",
    submissions: 20,
  },
  {
    id: 7,
    title: "HTML Quiz",
    courses: "Modern Web Application Development, Web & Mobile Application Development (Female), Web and Mobile App Development, Techno Kids Course, Front End Development, Backend Development, Mobile App Development (React Native)",
    date: "2026-01-05",
    expiry: "2026-01-05",
    status: "ACTIVE",
    submissions: 19,
  },
];

function formatDate(value) {
  if (!value) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T00:00:00Z`));
}

function QuizActionIcon({ kind }) {
  if (kind === "edit") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16.5V20h3.5L19 8.5 15.5 5 4 16.5z" />
        <path d="M13.5 7l3.5 3.5" />
      </svg>
    );
  }

  if (kind === "results") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="4" width="12" height="17" rx="2" />
        <path d="M9 4.5h6M9 10h6M9 14h6M9 18h4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}

function TeacherQuizzes({ onNavigate, onLogout }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [quizzes, setQuizzes] = useState(initialQuizzes);
  const [editingQuiz, setEditingQuiz] = useState(null);
  const [resultsQuiz, setResultsQuiz] = useState(null);
  const [previewQuiz, setPreviewQuiz] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleStatusToggle = (quizId) => {
    setQuizzes((currentQuizzes) =>
      currentQuizzes.map((quiz) =>
        quiz.id === quizId
          ? { ...quiz, status: quiz.status === "ACTIVE" ? "INACTIVE" : "ACTIVE" }
          : quiz
      )
    );
  };

  const handleEditSave = (event) => {
    event.preventDefault();
    setQuizzes((currentQuizzes) =>
      currentQuizzes.map((quiz) =>
        quiz.id === editingQuiz.id ? editingQuiz : quiz
      )
    );
    setEditingQuiz(null);
  };

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
      className={`teacher-quiz-page ${
        sidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
      }`}
    >
      <TeacherSidebar
        currentPage="teacherQuizzes"
        onNavigate={onNavigate}
        onLogout={onLogout}
        onCollapseChange={setSidebarCollapsed}
      />

      <main className="teacher-quiz-main">
        <div className="teacher-quiz-content">
          <header className="teacher-quiz-header">
            <div className="teacher-quiz-heading">
              <div className="teacher-quiz-breadcrumb">
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
              className="teacher-quiz-feedback-button"
              onClick={() => setShowFeedback(true)}
            >
              <span aria-hidden="true">▤</span>
              Feedback
            </button>
          </header>

          <TeacherTabs activeTab="Quizzes" onNavigate={onNavigate} />

          <section className="teacher-quiz-table-card" aria-label="Quizzes">
            <div className="teacher-quiz-table-scroll">
              <table className="teacher-quiz-table">
                <thead>
                  <tr>
                    <th scope="col">Quiz</th>
                    <th scope="col">Course(s)</th>
                    <th scope="col">Date</th>
                    <th scope="col">Expiry</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {quizzes.map((quiz) => (
                    <tr key={quiz.id}>
                      <td data-label="Quiz" className="teacher-quiz-title-cell">
                        {quiz.title}
                      </td>
                      <td data-label="Course(s)" className="teacher-quiz-courses-cell">
                        {quiz.courses}
                      </td>
                      <td data-label="Date">{formatDate(quiz.date)}</td>
                      <td data-label="Expiry">{formatDate(quiz.expiry)}</td>
                      <td data-label="Status">
                        <button
                          type="button"
                          className={`teacher-quiz-status ${quiz.status.toLowerCase()}`}
                          onClick={() => handleStatusToggle(quiz.id)}
                          aria-label={`${quiz.status === "ACTIVE" ? "Deactivate" : "Activate"} ${quiz.title}`}
                          title="Toggle quiz availability"
                        >
                          {quiz.status}
                        </button>
                      </td>
                      <td data-label="Action">
                        <div className="teacher-quiz-actions">
                          <button
                            type="button"
                            className="teacher-quiz-action edit"
                            title="Edit quiz"
                            aria-label={`Edit ${quiz.title}`}
                            onClick={() => setEditingQuiz({ ...quiz })}
                          >
                            <QuizActionIcon kind="edit" />
                          </button>
                          <button
                            type="button"
                            className="teacher-quiz-action"
                            title="View submissions"
                            aria-label={`View submissions for ${quiz.title}`}
                            onClick={() => setResultsQuiz(quiz)}
                          >
                            <QuizActionIcon kind="results" />
                          </button>
                          <button
                            type="button"
                            className="teacher-quiz-action"
                            title="Preview quiz"
                            aria-label={`Preview ${quiz.title}`}
                            onClick={() => setPreviewQuiz(quiz)}
                          >
                            <QuizActionIcon kind="preview" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>

      {editingQuiz && (
        <div className="teacher-quiz-modal-backdrop" onClick={() => setEditingQuiz(null)}>
          <section
            className="teacher-quiz-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-quiz-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="teacher-quiz-modal-header">
              <div>
                <h2 id="edit-quiz-title">Edit quiz</h2>
                <p>Update the quiz details and schedule.</p>
              </div>
              <button type="button" className="teacher-quiz-close" onClick={() => setEditingQuiz(null)} aria-label="Close">
                ×
              </button>
            </div>
            <form className="teacher-quiz-form" onSubmit={handleEditSave}>
              <label>
                Quiz name
                <input
                  required
                  value={editingQuiz.title}
                  onChange={(event) => setEditingQuiz({ ...editingQuiz, title: event.target.value })}
                />
              </label>
              <label>
                Courses
                <textarea
                  required
                  rows="3"
                  value={editingQuiz.courses}
                  onChange={(event) => setEditingQuiz({ ...editingQuiz, courses: event.target.value })}
                />
              </label>
              <div className="teacher-quiz-form-row">
                <label>
                  Date
                  <input
                    type="date"
                    required
                    value={editingQuiz.date}
                    onChange={(event) => setEditingQuiz({ ...editingQuiz, date: event.target.value })}
                  />
                </label>
                <label>
                  Expiry
                  <input
                    type="date"
                    required
                    value={editingQuiz.expiry}
                    onChange={(event) => setEditingQuiz({ ...editingQuiz, expiry: event.target.value })}
                  />
                </label>
              </div>
              <div className="teacher-quiz-modal-actions">
                <button type="button" className="secondary" onClick={() => setEditingQuiz(null)}>
                  Cancel
                </button>
                <button type="submit" className="primary">Save changes</button>
              </div>
            </form>
          </section>
        </div>
      )}

      {resultsQuiz && (
        <div className="teacher-quiz-modal-backdrop" onClick={() => setResultsQuiz(null)}>
          <section
            className="teacher-quiz-modal teacher-quiz-summary"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-results-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="teacher-quiz-modal-header">
              <div>
                <h2 id="quiz-results-title">Quiz submissions</h2>
                <p>{resultsQuiz.title}</p>
              </div>
              <button type="button" className="teacher-quiz-close" onClick={() => setResultsQuiz(null)} aria-label="Close">
                ×
              </button>
            </div>
            <div className="teacher-quiz-result-count">
              <strong>{resultsQuiz.submissions}</strong>
              <span>submissions received</span>
            </div>
            <p className="teacher-quiz-modal-note">
              Submission totals are sample portal data and can be replaced with your class results.
            </p>
            <div className="teacher-quiz-modal-actions">
              <button type="button" className="primary" onClick={() => setResultsQuiz(null)}>
                Done
              </button>
            </div>
          </section>
        </div>
      )}

      {previewQuiz && (
        <div className="teacher-quiz-modal-backdrop" onClick={() => setPreviewQuiz(null)}>
          <section
            className="teacher-quiz-modal teacher-quiz-summary"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-preview-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="teacher-quiz-modal-header">
              <div>
                <h2 id="quiz-preview-title">Quiz preview</h2>
                <p>{previewQuiz.title}</p>
              </div>
              <button type="button" className="teacher-quiz-close" onClick={() => setPreviewQuiz(null)} aria-label="Close">
                ×
              </button>
            </div>
            <dl className="teacher-quiz-preview-list">
              <div><dt>Courses</dt><dd>{previewQuiz.courses}</dd></div>
              <div><dt>Available from</dt><dd>{formatDate(previewQuiz.date)}</dd></div>
              <div><dt>Expires</dt><dd>{formatDate(previewQuiz.expiry)}</dd></div>
              <div><dt>Status</dt><dd>{previewQuiz.status}</dd></div>
            </dl>
            <div className="teacher-quiz-modal-actions">
              <button type="button" className="primary" onClick={() => setPreviewQuiz(null)}>
                Close preview
              </button>
            </div>
          </section>
        </div>
      )}

      {showFeedback && (
        <div className="teacher-quiz-modal-backdrop" onClick={closeFeedback}>
          <section
            className="teacher-quiz-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="teacher-feedback-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="teacher-quiz-modal-header">
              <div>
                <h2 id="teacher-feedback-title">Feedback</h2>
                <p>Share feedback about the quizzes page.</p>
              </div>
              <button type="button" className="teacher-quiz-close" onClick={closeFeedback} aria-label="Close">
                ×
              </button>
            </div>
            {feedbackSent ? (
              <div className="teacher-quiz-feedback-success">
                <p>Thank you. Your feedback has been recorded for this session.</p>
                <button type="button" className="primary" onClick={closeFeedback}>Done</button>
              </div>
            ) : (
              <form className="teacher-quiz-form" onSubmit={handleFeedbackSubmit}>
                <label>
                  Your feedback
                  <textarea required rows="4" placeholder="Tell us what could be improved" />
                </label>
                <div className="teacher-quiz-modal-actions">
                  <button type="button" className="secondary" onClick={closeFeedback}>Cancel</button>
                  <button type="submit" className="primary">Send feedback</button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

export default TeacherQuizzes;