import React, { useState } from "react";

import TeacherSidebar from "../../Components/TeacherSidebar/TeacherSidebar";
import TeacherHeader from "../../Components/TeacherHeader/TeacherHeader";
import TeacherTabs from "../../Components/TeacherTabs/TeacherTabs";
import TeacherStudentTable from "../../Components/TeacherStudentTable/TeacherStudentTable";

import "./TeacherDashboard.css";

function TeacherDashboard({ onNavigate }) {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

    return (
        <div
            className={`teacher-dashboard-layout ${sidebarCollapsed ? "sidebar-collapsed" : "sidebar-expanded"
                }`}
        >
            <TeacherSidebar
                currentPage="teacherDashboard"
                onNavigate={onNavigate}
                onCollapseChange={setSidebarCollapsed}
            />

            <main className="teacher-dashboard-main">
                <div className="teacher-dashboard-content">
                    <TeacherHeader />

                    <TeacherTabs
                        activeTab="Students"
                        onNavigate={onNavigate}
                    />

                    <TeacherStudentTable />
                </div>
            </main>
        </div>
    );
}

export default TeacherDashboard;