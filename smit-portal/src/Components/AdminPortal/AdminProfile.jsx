import React, { useState } from "react";
import Icon from "../Icon/Icon";

function AdminProfile({ profile, onSave, onLogout }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(profile);

  const handleChange = (event) => {
    setDraft((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(draft);
    setEditing(false);
  };

  const startEditing = () => {
    setDraft(profile);
    setEditing(true);
  };

  return (
    <div className="admin-profile-layout">
      <section className="admin-profile-card">
        <div className="admin-profile-banner">
          <span className="admin-profile-avatar"><img src="/logo3.png" alt="" /></span>
          <div><p className="admin-eyebrow">ACCOUNT SETTINGS</p><h2>{profile.name}</h2><span className="admin-profile-role">{profile.role}</span></div>
          {!editing && (
            <button type="button" className="admin-secondary-button" onClick={startEditing}>
              <Icon name="edit" size={16} /> Edit profile
            </button>
          )}
        </div>

        {editing ? (
          <form className="admin-profile-form" onSubmit={handleSubmit}>
            <label><span>Full name</span><input name="name" value={draft.name} onChange={handleChange} required /></label>
            <label><span>Email</span><input name="email" type="email" value={draft.email} onChange={handleChange} required /></label>
            <label><span>Phone</span><input name="phone" value={draft.phone} onChange={handleChange} required /></label>
            <label><span>Role</span><input name="role" value={draft.role} onChange={handleChange} required /></label>
            <div className="admin-profile-actions">
              <button type="button" className="admin-secondary-button" onClick={() => setEditing(false)}>Cancel</button>
              <button type="submit" className="admin-primary-button">Save changes</button>
            </div>
          </form>
        ) : (
          <dl className="admin-profile-details">
            <div><dt>Full name</dt><dd>{profile.name}</dd></div>
            <div><dt>Email address</dt><dd>{profile.email}</dd></div>
            <div><dt>Phone number</dt><dd>{profile.phone}</dd></div>
            <div><dt>Role</dt><dd>{profile.role}</dd></div>
          </dl>
        )}
      </section>

      <section className="admin-logout-panel">
        <div><h2>Sign out</h2><p>End this admin portal session on this device.</p></div>
        <button type="button" className="admin-logout-button" onClick={onLogout}>
          <Icon name="logout" size={18} /> Logout
        </button>
      </section>
    </div>
  );
}

export default AdminProfile;