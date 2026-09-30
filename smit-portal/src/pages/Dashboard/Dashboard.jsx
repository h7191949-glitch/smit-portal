import React from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import StatCard from "../../Components/StatCard/StatCard";
import ClassSchedule from "../../Components/ClassSchedule/ClassSchedule";
import CourseOverview from "../../Components/CourseOverview/CourseOverview";
import CourseTabs from "../../Components/CourseTabs/CourseTabs";
import FeeTable from "../../Components/FeeTable/FeeTable";

import "./Dashboard.css";

function Dashboard({ onNavigate }) {
  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar
        currentPage="dashboard"
        onNavigate={onNavigate}
      />

      {/* MAIN */}
      <main className="dashboard-main">

        <Topbar />

        <div className="dashboard-content">

          <div className="dashboard-grid">

            {/* LEFT SIDE */}
            <div className="dashboard-left">

              {/* STAT CARDS */}
              <div className="stats-grid">

                {/* ATTENDANCE */}
                <button
                  type="button"
                  className="dashboard-stat-button"
                  onClick={() => onNavigate("attendance")}
                >
                  <StatCard
                    icon="clock"
                    value="87"
                    total="111"
                    title="Attendance"
                    type="clock"
                  />
                </button>


                {/* ASSIGNMENT */}
                <button
                  type="button"
                  className="dashboard-stat-button"
                  onClick={() => onNavigate("assignment")}
                >
                  <StatCard
                    icon="graduation"
                    value="6"
                    total="13"
                    title="Assignment"
                    type="graduation"
                  />
                </button>

              </div>


              {/* COURSE */}
              <CourseOverview />


              {/* FEE */}
              <FeeTable />

            </div>


            {/* RIGHT SIDE */}
            <div className="dashboard-right">

              <ClassSchedule />

              <CourseTabs />

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;