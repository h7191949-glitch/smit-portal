import React from "react";
import "./PaymentInstructions.css";

function PaymentInstructions() {
  return (
    <section className="payment-instructions">

      <div className="payment-instruction-content">

        <h2>To pay your fee via JazzCash:</h2>

        <ol>
          <li>Open JazzCash app</li>
          <li>Click on More</li>
          <li>Go to Education tab</li>
          <li>Click Universities</li>
          <li>Select Saylani Education from the list</li>
          <li>Paste your Voucher ID</li>
          <li>Pay your fee</li>
        </ol>

      </div>

      <div className="payment-video-box">

        <video
          className="payment-video"
          controls
          muted
          playsInline
        >
          <source
            src="./public/saylani-jazzcash-guide.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>

      </div>

    </section>
  );
}

export default PaymentInstructions;