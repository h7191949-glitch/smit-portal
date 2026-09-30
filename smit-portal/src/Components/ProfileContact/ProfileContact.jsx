import React from "react";
import "./ProfileContact.css";

function ProfileContact({ profile }) {
  return (
    <section className="profile-card profile-contact-card">
      <div className="profile-card-title">
        <span className="profile-card-icon">✉</span>
        <h2>Contact Info</h2>
      </div>

      <div className="profile-contact-content">
        <div className="profile-field">
          <span>Email</span>
          <strong>{profile.email}</strong>
        </div>

        <div className="profile-field">
          <span>Phone</span>
          <strong>{profile.phone}</strong>
        </div>

        <div className="profile-field">
          <span>Address</span>
          <strong>{profile.address}</strong>
        </div>
      </div>
    </section>
  );
}

export default ProfileContact;