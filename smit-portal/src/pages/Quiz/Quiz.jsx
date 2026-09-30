import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import QuizInformation from "../../Components/QuizInformation/QuizInformation";
import QuizTable from "../../Components/QuizTable/QuizTable";

import "./Quiz.css";

function Quiz({ onNavigate }) {
  return (
    <div className="quiz-layout">
      <Sidebar
        currentPage="quiz"
        onNavigate={onNavigate}
      />

      <main className="quiz-main">
        <div className="quiz-page">
          <div className="quiz-breadcrumb">
            <span>Home</span>

            <span className="quiz-breadcrumb-arrow">
              ›
            </span>

            <span>
              Modern Web Application Development
            </span>

            <span className="quiz-breadcrumb-arrow">
              ›
            </span>

            <strong>Quiz</strong>
          </div>

          <QuizInformation />

          <QuizTable />

          <p className="quiz-instructor-message">
            Contact your instructor if you have any issues
            accessing your quizzes.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Quiz;