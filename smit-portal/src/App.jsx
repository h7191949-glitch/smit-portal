import React, { useState } from "react";

// ==================== LOGIN ====================
import Login from "./Components/Login/Login";

// ==================== STUDENT PAGES ====================
import Dashboard from "./pages/Dashboard/Dashboard";
import Progress from "./pages/Progress/Progress";
import Attendance from "./pages/Attendance/Attendance";
import Payment from "./pages/Payment/Payment";
import Assignment from "./pages/Assignment/Assignment";
import Quiz from "./pages/Quiz/Quiz";
import Profile from "./pages/Profile/Profile";

// ==================== TEACHER PAGES ====================
import TeacherDashboard from "./pages/TeacherDashboard/TeacherDashboard";
import TeacherAttendance from "./pages/TeacherAttendance/TeacherAttendance";
import TeacherAssignments from "./pages/TeacherAssignments/TeacherAssignments";



function App() {
  // -----------------------------------------
  // LOGIN STATE
  // -----------------------------------------
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("smitLoggedIn") === "true";
  });

  // Teacher/student role localStorage se bhi read hoga
  const [loginRole, setLoginRole] = useState(() => {
    return localStorage.getItem("smitRole") || "student";
  });

  // -----------------------------------------
  // CURRENT PAGE
  // -----------------------------------------
  const [currentPage, setCurrentPage] = useState(() => {
    const savedRole = localStorage.getItem("smitRole");

    if (savedRole === "teacher") {
      return localStorage.getItem("teacherCurrentPage") || "teacherDashboard";
    }

    return localStorage.getItem("studentCurrentPage") || "dashboard";
  });


  // -----------------------------------------
  // LOGIN
  // -----------------------------------------
  const handleLogin = () => {
    localStorage.setItem("smitLoggedIn", "true");
    localStorage.setItem("smitRole", loginRole);

    setIsLoggedIn(true);

    if (loginRole === "teacher") {
      setCurrentPage("teacherDashboard");
      localStorage.setItem(
        "teacherCurrentPage",
        "teacherDashboard"
      );
    } else {
      setCurrentPage("dashboard");
      localStorage.setItem(
        "studentCurrentPage",
        "dashboard"
      );
    }
  };


  // -----------------------------------------
  // ROLE CHANGE
  // -----------------------------------------
  const handleRoleChange = (role) => {
    setLoginRole(role);
  };


  // -----------------------------------------
  // NAVIGATION
  // -----------------------------------------
  const handleNavigation = (page) => {
    setCurrentPage(page);

    if (loginRole === "teacher") {
      localStorage.setItem("teacherCurrentPage", page);
    } else {
      localStorage.setItem("studentCurrentPage", page);
    }
  };


  // -----------------------------------------
  // LOGOUT
  // -----------------------------------------
  const handleLogout = () => {
    localStorage.removeItem("smitLoggedIn");
    localStorage.removeItem("smitRole");
    localStorage.removeItem("teacherCurrentPage");
    localStorage.removeItem("studentCurrentPage");

    setIsLoggedIn(false);
    setLoginRole("student");
    setCurrentPage("dashboard");
  };


  // -----------------------------------------
  // LOGIN SCREEN
  // -----------------------------------------
  if (!isLoggedIn) {
    return (
      <Login
        onLogin={handleLogin}
        role={loginRole}
        onRoleChange={handleRoleChange}
      />
    );
  }


  // ==================================================
  // TEACHER SIDE
  // ==================================================
  if (loginRole === "teacher") {

    // Teacher Attendance
    if (currentPage === "teacherAttendance") {
      return (
        <TeacherAttendance
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      );
    }


    // Teacher Assignments
    if (currentPage === "teacherAssignments") {
      return (
        <TeacherAssignments
          onNavigate={handleNavigation}
          onLogout={handleLogout}
        />
      );
    }

    // Teacher Dashboard
    return (
      <TeacherDashboard
        onNavigate={handleNavigation}
        onLogout={handleLogout}
      />
    );
  }


  // ==================================================
  // STUDENT SIDE
  // ==================================================

  // Student Dashboard
  if (currentPage === "dashboard") {
    return (
      <Dashboard
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Progress
  if (currentPage === "progress") {
    return (
      <Progress
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Attendance
  if (currentPage === "attendance") {
    return (
      <Attendance
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Payment
  if (currentPage === "payment") {
    return (
      <Payment
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Assignment
  if (currentPage === "assignment") {
    return (
      <Assignment
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Quiz
  if (currentPage === "quiz") {
    return (
      <Quiz
        onNavigate={handleNavigation}
      />
    );
  }


  // Student Profile
  if (currentPage === "profile") {
    return (
      <Profile
        onNavigate={handleNavigation}
        onLogout={handleLogout}
      />
    );
  }


  // -----------------------------------------
  // FALLBACK
  // -----------------------------------------
  return (
    <Dashboard
      onNavigate={handleNavigation}
    />
  );
}

export default App;