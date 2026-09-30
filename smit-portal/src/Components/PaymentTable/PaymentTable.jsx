import React, { useState } from "react";
import "./PaymentTable.css";

function PaymentTable() {
  const [copiedVoucher, setCopiedVoucher] = useState("");

  const payments = [
    {
      month: "Sep 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "08-Sep-2026",
      voucher: "202609776951",
      status: "PAID",
    },
    {
      month: "Aug 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "14-Aug-2026",
      voucher: "202608776951",
      status: "PAID",
    },
    {
      month: "Jul 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "08-Jul-2026",
      voucher: "202607776951",
      status: "PAID",
    },
    {
      month: "Jun 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "08-Jun-2026",
      voucher: "202606776951",
      status: "PAID",
    },
    {
      month: "May 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "08-May-2026",
      voucher: "202605776951",
      status: "PAID",
    },
    {
      month: "Apr 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "08-Apr-2026",
      voucher: "202604776951",
      status: "PAID",
    },
    {
      month: "Mar 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "11-Mar-2026",
      voucher: "202603776951",
      status: "PAID",
    },
    {
      month: "Feb 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "11-Feb-2026",
      voucher: "202602776951",
      status: "PAID",
    },
    {
      month: "Jan 2026",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "11-Jan-2026",
      voucher: "202601776951",
      status: "PAID",
    },
    {
      month: "Dec 2025",
      amount: "Rs: 1000 /-",
      type: "Monthly",
      dueDate: "11-Dec-2025",
      voucher: "202512776951",
      status: "PAID",
    },
  ];

  const copyVoucher = async (voucher) => {
    try {
      await navigator.clipboard.writeText(voucher);

      setCopiedVoucher(voucher);

      setTimeout(() => {
        setCopiedVoucher("");
      }, 1500);
    } catch (error) {
      console.log("Could not copy voucher ID");
    }
  };

  return (
    <section className="payment-table-section">

      <div className="payment-table-wrapper">

        <table className="payment-table">

          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Due date</th>
              <th>Voucher ID</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.month}>

                <td>{payment.month}</td>

                <td>{payment.amount}</td>

                <td>{payment.type}</td>

                <td>{payment.dueDate}</td>

                <td>
                  <div className="voucher-cell">

                    <span>{payment.voucher}</span>

                    <button
                      type="button"
                      className="copy-button"
                      onClick={() =>
                        copyVoucher(payment.voucher)
                      }
                      title="Copy Voucher ID"
                    >
                      {copiedVoucher === payment.voucher
                        ? "✓"
                        : "▢"}
                    </button>

                  </div>
                </td>

                <td>
                  <span className="paid-status">
                    {payment.status}
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

export default PaymentTable;