import React from "react";
import "./ProfilePersonal.css";

function ProfilePersonal({ profile }) {
  return (
    <section className="profile-card profile-personal-card">
      <div className="profile-card-title">
        <span className="profile-card-icon">♙</span>
        <h2>Personal Information</h2>
      </div>

      <div className="personal-grid">
        <div className="profile-field">
          <span>Gender</span>
          <strong>{profile.gender}</strong>
        </div>

        <div className="profile-field">
          <span>Date of Birth</span>
          <strong>{profile.dateOfBirth}</strong>
        </div>

        <div className="profile-field">
          <span>Last Qualification</span>
          <strong>{profile.qualification}</strong>
        </div>

        <div className="profile-field">
          <span>CNIC</span>
          <strong>{profile.cnic}</strong>
        </div>
      </div>
    </section>
  );
}

export default ProfilePersonal;