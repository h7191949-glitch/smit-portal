import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import PaymentInstructions from "../../Components/PaymentInstructions/PaymentInstructions";
import PaymentTable from "../../Components/PaymentTable/PaymentTable";

import "./Payment.css";

function Payment({ onNavigate }) {
  return (
    <div className="payment-layout">

      <Sidebar
        currentPage="payment"
        onNavigate={onNavigate}
      />

      <main className="payment-main">

        <div className="payment-page">

          {/* HEADER */}

          <div className="payment-page-header">

            <div className="payment-breadcrumb">

              <span>Home</span>

              <span className="payment-arrow">
                ›
              </span>

              <span className="payment-course">
                Modern Web Application Development
              </span>

              <span className="payment-arrow">
                ›
              </span>

              <strong>Fee</strong>

            </div>

            <button
              className="payment-feedback-button"
              type="button"
            >
              <span className="payment-feedback-icon">
                ▣
              </span>

              Feedback
            </button>

          </div>

          {/* PAYMENT INSTRUCTIONS */}

          <PaymentInstructions />

          {/* PAYMENT TABLE */}

          <PaymentTable />

        </div>

      </main>

    </div>
  );
}

export default Payment;