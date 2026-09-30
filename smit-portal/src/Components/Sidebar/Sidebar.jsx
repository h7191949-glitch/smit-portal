import React, { useState } from "react";
import Icon from "../Icon/Icon";
import "./Sidebar.css";

function Sidebar({
  currentPage = "dashboard",
  onNavigate,
  onLogout,
}) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      icon: "dashboard",
      page: "dashboard",
    },
    {
      name: "Progress",
      icon: "progress",
      page: "progress",
    },
    {
      name: "Attendance",
      icon: "calendar",
      page: "attendance",
    },
    {
      name: "Payment",
      icon: "payment",
      page: "payment",
    },
    {
      name: "Assignment",
      icon: "assignment",
      page: "assignment",
    },
    {
      name: "Quiz",
      icon: "quiz",
      page: "quiz",
    },
  ];

  const handleMenuClick = (page) => {
    onNavigate(page);
  };

  const handleProfileClick = () => {
    onNavigate("profile");
  };

  return (
    <aside
      className={`sidebar ${
        collapsed ? "collapsed" : ""
      }`}
    >
      <div className="sidebar-logo">
        <img
          src="/smit-logo.png"
          alt="SMIT"
        />

        <button
          className="collapse-btn"
          onClick={() =>
            setCollapsed(!collapsed)
          }
          type="button"
        >
          <Icon
            name={
              collapsed
                ? "chevronRight"
                : "arrowLeft"
            }
            size={17}
          />
        </button>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            type="button"
            onClick={() =>
              handleMenuClick(item.page)
            }
            className={`sidebar-item ${
              currentPage === item.page
                ? "active"
                : ""
            }`}
          >
            <Icon
              name={item.icon}
              size={18}
            />

            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={`sidebar-user ${
          currentPage === "profile"
            ? "profile-user-active"
            : ""
        }`}
        onClick={handleProfileClick}
      >
        <div className="user-avatar">
          <img
            src="./public/logo3.png"
            alt="Profile"
          />
        </div>

        <div className="user-info">
          <strong>Sheikh Hasnain</strong>
        </div>
      </button>
    </aside>
  );
}

export default Sidebar;