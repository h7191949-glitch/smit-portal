import React, { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import ProfileContact from "../../Components/ProfileContact/ProfileContact";
import ProfilePersonal from "../../Components/ProfilePersonal/ProfilePersonal";
import EnrolledCourses from "../../Components/EnrolledCourses/EnrolledCourses";

import "./Profile.css";

function Profile({ onNavigate, onLogout }) {
  const [profile, setProfile] = useState({
    name: "SMIT Student",
    email: "student@smit.edu.pk",
    phone: "0300-0000000",
    address: "Karachi, Pakistan",
    gender: "Male",
    dateOfBirth: "01 January 2000",
    qualification: "Intermediate",
    cnic: "4220159278433",
  });
  const [draftProfile, setDraftProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setDraftProfile(profile);
    setIsEditing(true);
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setDraftProfile((currentProfile) => ({
      ...currentProfile,
      [name]: value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    setProfile(draftProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-layout">

      {/* SIDEBAR */}
      <Sidebar
        currentPage="profile"
        onNavigate={onNavigate}
      />

      {/* MAIN CONTENT */}
      <main className="profile-main">

        <div className="profile-page">

          {/* BREADCRUMB */}
          <div className="profile-top-row">

            <div className="profile-breadcrumb">
              <span>Home</span>

              <span className="breadcrumb-arrow">
                ›
              </span>

              <strong>Profile</strong>
            </div>

            <button
              className="feedback-button"
              type="button"
            >
              <span>▣</span>
              Feedback
            </button>

          </div>


          {/* PROFILE HEADER */}
          <ProfileHeader profile={profile} onEdit={handleEdit} />


          {/* PROFILE CONTENT */}
          <div className="profile-content-grid">

            {/* LEFT */}
            <ProfileContact profile={profile} />


            {/* RIGHT */}
            <div className="profile-right-column">

              <ProfilePersonal profile={profile} />

              <EnrolledCourses />

            </div>

          </div>

        </div>

        {isEditing && (
          <div className="profile-modal-backdrop" role="presentation">
            <form className="profile-edit-modal" onSubmit={handleSave}>
              <div className="profile-edit-modal-header">
                <h2>Edit Profile</h2>
                <button
                  className="profile-modal-close"
                  type="button"
                  aria-label="Close edit profile form"
                  onClick={() => setIsEditing(false)}
                >
                  ×
                </button>
              </div>

              <div className="profile-edit-fields">
                <label>
                  Full Name
                  <input name="name" value={draftProfile.name} onChange={handleProfileChange} required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" value={draftProfile.email} onChange={handleProfileChange} required />
                </label>
                <label>
                  Phone
                  <input name="phone" value={draftProfile.phone} onChange={handleProfileChange} required />
                </label>
                <label>
                  Address
                  <input name="address" value={draftProfile.address} onChange={handleProfileChange} required />
                </label>
                <label>
                  Gender
                  <input name="gender" value={draftProfile.gender} onChange={handleProfileChange} required />
                </label>
                <label>
                  Date of Birth
                  <input name="dateOfBirth" value={draftProfile.dateOfBirth} onChange={handleProfileChange} required />
                </label>
                <label>
                  Last Qualification
                  <input name="qualification" value={draftProfile.qualification} onChange={handleProfileChange} required />
                </label>
                <label>
                  CNIC
                  <input name="cnic" value={draftProfile.cnic} onChange={handleProfileChange} required />
                </label>
              </div>

              <div className="profile-edit-actions">
                <button type="button" className="profile-cancel-button" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
                <button type="submit" className="profile-save-button">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}


        {/* LOGOUT BUTTON */}
        <button
          className="profile-logout-button"
          type="button"
          onClick={onLogout}
        >
          <span className="logout-icon">
            ↪
          </span>

          <span>
            Logout
          </span>
        </button>

      </main>

    </div>
  );
}

export default Profile;