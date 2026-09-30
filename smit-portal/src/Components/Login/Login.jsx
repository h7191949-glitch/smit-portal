import React, { useState } from "react";
import "./Login.css";

function Login({ onLogin, role = "student", onRoleChange }) {
  const [cnic, setCnic] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const isTeacher = role === "teacher";

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctCNIC = "4220159278433";

    const correctPassword = isTeacher
      ? "teacher1234"
      : "hasnainsheikh";

    // CNIC check
    if (cnic !== correctCNIC) {
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
    onLogin();
  };

  const handleTeacherClick = () => {
    setCnic("");
    setPassword("");
    setError("");
    setShowPassword(false);

    onRoleChange("teacher");
  };

  const handleStudentClick = () => {
    setCnic("");
    setPassword("");
    setError("");
    setShowPassword(false);

    onRoleChange("student");
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
          {isTeacher ? "Teacher Portal" : "Student Portal"}
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
              {isTeacher ? "Teacher Login" : "Login"}
            </h2>

            <p className="login-description">
              {isTeacher
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
          </div>

          {/* Student Login */}
          {isTeacher && (
            <button
              type="button"
              className="teacher-button"
              onClick={handleStudentClick}
            >
              Login as student
            </button>
          )}

          {/* Teacher Login */}
          {!isTeacher && (
            <button
              type="button"
              className="teacher-button"
              onClick={handleTeacherClick}
            >
              Login as teacher
            </button>
          )}

          {/* Admin Login */}
          <button
            type="button"
            className="admin-button"
          >
            Login as admin
          </button>

        </div>
      </div>
    </div>
  );
}

export default Login;