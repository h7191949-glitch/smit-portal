import React, { useState } from "react";
import QuizDetails from "../QuizDetails/QuizDetails";
import "./QuizTable.css";

function QuizTable() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const quizzes = [
    {
      id: 1,
      title: "Javascript (Quiz-4)",
      module: "Modern Front-End Development",
      questions: 40,
      attempts: "1 / 3",
      percentage: "55%",
      status: "FAILED",
      note: "—",
    },
    {
      id: 2,
      title: "Javascript (Quiz-3)",
      module: "Modern Front-End Development",
      questions: 40,
      attempts: "1 / 3",
      percentage: "68%",
      status: "FAILED",
      note: "—",
    },
    {
      id: 3,
      title: "Javascript (Quiz-2)",
      module: "Modern Front-End Development",
      questions: 40,
      attempts: "1 / 3",
      percentage: "68%",
      status: "FAILED",
      note: "—",
    },
    {
      id: 4,
      title: "HTML Quiz",
      module: "Web Designing",
      questions: 40,
      attempts: "1 / 3",
      percentage: "88%",
      status: "PASSED",
      note: "—",
    },
  ];

  const handleViewQuiz = (quiz) => {
    setSelectedQuiz(quiz);
  };

  return (
    <>
      <section className="quiz-table-section">
        <div className="quiz-table-wrapper">
          <table className="quiz-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Module</th>
                <th>Questions</th>
                <th>Attempts</th>
                <th>Percentage</th>
                <th>Status</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {quizzes.map((quiz) => (
                <tr key={quiz.id}>
                  <td>
                    <span className="quiz-title">
                      {quiz.title}
                    </span>
                  </td>

                  <td>
                    <span className="quiz-module">
                      {quiz.module}
                    </span>
                  </td>

                  <td>
                    <span className="quiz-number">
                      {quiz.questions}
                    </span>
                  </td>

                  <td>
                    <span className="quiz-attempts">
                      {quiz.attempts}
                    </span>
                  </td>

                  <td>
                    <span className="quiz-percentage">
                      {quiz.percentage}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`quiz-status ${
                        quiz.status === "PASSED"
                          ? "passed"
                          : "failed"
                      }`}
                    >
                      {quiz.status}
                    </span>
                  </td>

                  <td>
                    <span className="quiz-note">
                      {quiz.note}
                    </span>
                  </td>

                  <td>
                    <button
                      type="button"
                      className="quiz-completed-btn"
                      onClick={() => handleViewQuiz(quiz)}
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {selectedQuiz && (
        <QuizDetails
          quiz={selectedQuiz}
          onClose={() => setSelectedQuiz(null)}
        />
      )}
    </>
  );
}

export default QuizTable;