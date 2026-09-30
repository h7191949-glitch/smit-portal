import React from "react";
import "./FeeTable.css";

function FeeTable() {
  const feeData = [
    {
      month: "September 2026",
      amount: "Rs. 5,000",
      status: "Paid",
    },
    {
      month: "August 2026",
      amount: "Rs. 5,000",
      status: "Paid",
    },
    {
      month: "July 2026",
      amount: "Rs. 5,000",
      status: "Pending",
    },
  ];

  return (
    <section className="fee-table-card">
      <div className="fee-table-header">
        <div>
          <h2>Fee Details</h2>
          <p>Your recent fee payment details</p>
        </div>
      </div>

      <div className="fee-table-wrapper">
        <table className="fee-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {feeData.map((fee, index) => (
              <tr key={index}>
                <td>{fee.month}</td>
                <td>{fee.amount}</td>
                <td>
                  <span
                    className={`fee-status ${
                      fee.status === "Paid" ? "paid" : "pending"
                    }`}
                  >
                    {fee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default FeeTable;