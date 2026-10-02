import React, { useState } from "react";
import "./Login.css";

const defaultPasswords = {
  student: "hasnainsheikh",
  teacher: "teacher1234",
  admin: "admin1234",
};

const recoveryProfiles = {
  student: { cnic: "4220159278433", dateOfBirth: "2000-01-01" },
  teacher: { cnic: "4220159278433", dateOfBirth: "2000-01-01" },
  admin: { cnic: "4220159278433", dateOfBirth: "2000-01-01" },
};

const normalizeCnic = (value) => value.replace(/\D/g, "");

function Login({ onLogin, role = "student", onRoleChange }) {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [recoveryOpen, setRecoveryOpen] = useState(false);
  const [recoveryData, setRecoveryData] = useState({
    cnic: "",
    dateOfBirth: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [recoveryError, setRecoveryError] = useState("");
  const [recoverySuccess, setRecoverySuccess] = useState("");

  const isTeacher = role === "teacher";
  const isAdmin = role === "admin";

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctCNIC = recoveryProfiles[role].cnic;
    const correctPassword =
      localStorage.getItem(`smitPassword_${role}`) || defaultPasswords[role];

    // CNIC check
    if (normalizeCnic(cnic) !== normalizeCnic(correctCNIC)) {
      setError("Please enter your CNIC number.");
      return;
    }

    // Password check
    if (password !== correctPassword) {
      setError("Incorrect password.");
      return;
    }

    // Login successful
    setError("");
    setRecoverySuccess("");
    onLogin();
  };

  const handleRecoverySubmit = (event) => {
    event.preventDefault();
    const profile = recoveryProfiles[role];

    if (
      normalizeCnic(recoveryData.cnic) !== normalizeCnic(profile.cnic) ||
      recoveryData.dateOfBirth !== profile.dateOfBirth
    ) {
      setRecoveryError("CNIC or date of birth does not match this account.");
      return;
    }

    if (recoveryData.newPassword.length < 8) {
      setRecoveryError("New password must be at least 8 characters.");
      return;
    }

    if (recoveryData.newPassword !== recoveryData.confirmPassword) {
      setRecoveryError("The passwords do not match.");
      return;
    }

    localStorage.setItem(`smitPassword_${role}`, recoveryData.newPassword);
    setPassword(recoveryData.newPassword);
    setRecoveryOpen(false);
    setRecoveryData({ cnic: "", dateOfBirth: "", newPassword: "", confirmPassword: "" });
    setRecoveryError("");
    setRecoverySuccess("Password changed. You can now log in with your new password.");
  };

  const handleRoleSelect = (nextRole) => {
    setCnic("");
    setPassword("");
    setError("");
    setShowPassword(false);
    setRecoveryOpen(false);
    setRecoveryError("");
    setRecoverySuccess("");

    onRoleChange(nextRole);
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">

        {/* SMIT Logo */}
        <img
          src="/smit-logo.png"
          alt="SMIT Logo"
          className="smit-logo"
        />

        {/* Portal Title */}
        <h1 className="portal-title">
          {isAdmin ? "Admin Portal" : isTeacher ? "Teacher Portal" : "Student Portal"}
        </h1>

        <div className="login-box">

          {/* Login Tab */}
          <div className="login-tabs">
            <div className="active-tab">
              Login
            </div>
          </div>

          {/* Login Card */}
          <div className="login-card">

            <h2>
              {isAdmin ? "Admin Login" : isTeacher ? "Teacher Login" : "Login"}
            </h2>

            <p className="login-description">
              {isTeacher || isAdmin
                ? "Kindly provide your CNIC number and password."
                : "Kindly provide the CNIC number and password using SMIT course registration."}
            </p>

            <form onSubmit={handleSubmit}>

              {/* CNIC */}
              <div className="form-field">
                <label htmlFor="cnic">
                  CNIC
                </label>

                <input
                  id="cnic"
                  type="text"
                  value={cnic}
                  onChange={(e) => {
                    setCnic(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter CNIC"
                />
              </div>

              {/* Password */}
              <div className="form-field">
                <label htmlFor="password">
                  Password
                </label>

                <div className="password-wrapper">

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter Password"
                  />

                  {/* Eye Button */}
                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label="Show password"
                  >
                    {showPassword ? (
                      <svg viewBox="0 0 24 24">
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 102.8 2.8" />
                        <path d="M9.9 5.2A10.8 10.8 0 0112 5c6.5 0 10 7 10 7a17.5 17.5 0 01-3.2 3.9" />
                        <path d="M6.6 6.6C3.5 8.5 2 12 2 12s3.5 7 10 7a10.8 10.8 0 005.1-1.3" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24">
                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    )}
                  </button>

                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}

              {/* Login Button */}
              <button
                type="submit"
                className="login-button"
              >
                LOGIN
              </button>

            </form>

            <button
              type="button"
              className="forgot-password-link"
              onClick={() => {
                setRecoveryOpen(true);
                setRecoveryError("");
                setRecoverySuccess("");
              }}
            >
              Forgot password?
            </button>

            {recoverySuccess && (
              <p className="recovery-success" role="status">{recoverySuccess}</p>
            )}
          </div>

          <div className="login-role-picker" aria-label="Choose account type">
            {[
              { value: "student", label: "Login as student" },
              { value: "teacher", label: "Login as teacher" },
              { value: "admin", label: "Login as admin" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                className={`login-role-button ${role === option.value ? "selected" : ""}`}
                onClick={() => handleRoleSelect(option.value)}
                aria-pressed={role === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>

        </div>

        {recoveryOpen && (
          <div className="recovery-backdrop" role="presentation">
            <form
              className="recovery-dialog"
              onSubmit={handleRecoverySubmit}
              aria-labelledby="recovery-title"
            >
              <div className="recovery-dialog-header">
                <h2 id="recovery-title">Reset {role} password</h2>
                <button
                  type="button"
                  className="recovery-close"
                  onClick={() => setRecoveryOpen(false)}
                  aria-label="Close password reset"
                >
                  ×
                </button>
              </div>

              <p className="recovery-description">
                Verify your identity with the CNIC and date of birth registered to this account.
              </p>

              <label className="recovery-field">
                CNIC
                <input
                  type="text"
                  autoComplete="username"
                  value={recoveryData.cnic}
                  onChange={(event) => setRecoveryData((current) => ({ ...current, cnic: event.target.value }))}
                  placeholder="Enter CNIC"
                  required
                />
              </label>
              <label className="recovery-field">
                Date of birth
                <input
                  type="date"
                  value={recoveryData.dateOfBirth}
                  onChange={(event) => setRecoveryData((current) => ({ ...current, dateOfBirth: event.target.value }))}
                  required
                />
              </label>
              <label className="recovery-field">
                New password
                <input
                  type="password"
                  autoComplete="new-password"
                  value={recoveryData.newPassword}
                  onChange={(event) => setRecoveryData((current) => ({ ...current, newPassword: event.target.value }))}
                  minLength={8}
                  required
                />
              </label>
              <label className="recovery-field">
                Confirm new password
                <input
                  type="password"
                  autoComplete="new-password"
                  value={recoveryData.confirmPassword}
                  onChange={(event) => setRecoveryData((current) => ({ ...current, confirmPassword: event.target.value }))}
                  minLength={8}
                  required
                />
              </label>

              {recoveryError && <p className="login-error recovery-error" role="alert">{recoveryError}</p>}

              <div className="recovery-actions">
                <button type="button" className="recovery-cancel" onClick={() => setRecoveryOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="login-button">Change password</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;