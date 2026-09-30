import React from "react";
import "./ProfileHeader.css";

function ProfileHeader({ profile, onEdit }) {
  return (
    <section className="profile-header">
      <div className="profile-cover">
        <img
          src="./public/logo3.png"
          alt="SMIT"
          className="profile-cover-logo"
        />
      </div>

      <div className="profile-header-content">
        <div className="profile-photo-wrapper">
          <img
            src="./public/logo3.png"
            alt="Profile"
            className="profile-photo"
          />
        </div>

        <div className="profile-name-area">
          <h1>{profile.name}</h1>

          <span className="profile-student-badge">
            Student
          </span>
        </div>

        <button
          type="button"
          className="edit-profile-button"
          onClick={onEdit}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.1 2.1 0 013 3L8 18l-4 1 1-4L16.5 3.5z" />
          </svg>

          Edit Profile
        </button>
      </div>
    </section>
  );
}

export default ProfileHeader;