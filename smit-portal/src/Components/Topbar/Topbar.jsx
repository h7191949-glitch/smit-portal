import React from "react";
import { useState } from "react";
import Icon from "../Icon/Icon";
import "./Topbar.css";

function Topbar() {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="breadcrumb">
          <span>Home</span>

          <Icon name="chevronRight" size={14} />

          <strong>Modern Web Application Development</strong>
        </div>

        <button
          className="feedback-btn"
          onClick={() => setShowFeedback(true)}
        >
          <Icon name="message" size={15} />
          Feedback
        </button>
      </header>

      {showFeedback && (
        <div
          className="feedback-overlay"
          onClick={() => setShowFeedback(false)}
        >
          <div
            className="feedback-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Feedback</h3>

            <textarea
              placeholder="Write your feedback..."
              rows="5"
            />

            <div className="feedback-actions">
              <button onClick={() => setShowFeedback(false)}>
                Cancel
              </button>

              <button
                className="send-feedback"
                onClick={() => {
                  alert("Feedback submitted!");
                  setShowFeedback(false);
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Topbar;