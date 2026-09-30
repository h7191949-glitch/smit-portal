import React from "react";
import "./QuizInformation.css";

function QuizInformation() {
  return (
    <section className="quiz-information">
      <div className="quiz-information-header">
        <div>
          <h2>Quiz Information</h2>
          <p>Check your quiz details and progress.</p>
        </div>
      </div>

      <div className="quiz-information-grid">
        <div className="quiz-info-item">
          <span>Total Quizzes</span>
          <strong>6</strong>
        </div>

        <div className="quiz-info-item">
          <span>Completed</span>
          <strong>4</strong>
        </div>

        <div className="quiz-info-item">
          <span>Pending</span>
          <strong>2</strong>
        </div>
      </div>
    </section>
  );
}

export default QuizInformation;