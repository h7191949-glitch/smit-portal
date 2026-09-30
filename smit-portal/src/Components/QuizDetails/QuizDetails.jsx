import React from "react";
import "./QuizDetails.css";

function QuizDetails({ quiz, onClose }) {
  if (!quiz) {
    return null;
  }

  return (
    <div
      className="quiz-details-overlay"
      onClick={onClose}
    >
      <div
        className="quiz-details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="quiz-details-header">
          <div>
            <h2>Quiz Details</h2>
            <p>Quiz result information</p>
          </div>

          <button
            type="button"
            className="quiz-details-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="quiz-details-body">
          <div className="quiz-detail-item full">
            <span>Title</span>
            <strong>{quiz.title}</strong>
          </div>

          <div className="quiz-detail-item full">
            <span>Module</span>
            <strong>{quiz.module}</strong>
          </div>

          <div className="quiz-detail-item">
            <span>Questions</span>
            <strong>{quiz.questions}</strong>
          </div>

          <div className="quiz-detail-item">
            <span>Attempts</span>
            <strong>{quiz.attempts}</strong>
          </div>

          <div className="quiz-detail-item">
            <span>Percentage</span>
            <strong>{quiz.percentage}</strong>
          </div>

          <div className="quiz-detail-item">
            <span>Status</span>

            <strong
              className={
                quiz.status === "PASSED"
                  ? "quiz-detail-passed"
                  : "quiz-detail-failed"
              }
            >
              {quiz.status}
            </strong>
          </div>

          <div className="quiz-detail-item full">
            <span>Note</span>
            <strong>{quiz.note}</strong>
          </div>
        </div>

        <div className="quiz-details-footer">
          <button
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuizDetails;