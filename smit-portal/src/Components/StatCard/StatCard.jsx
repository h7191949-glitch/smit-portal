import React from "react";
import Icon from "../Icon/Icon";
import "./StatCard.css";

function StatCard({ icon, value, total, title, type }) {
  return (
    <div className="stat-card">
      <div>
        <div className="stat-value">
          {value}
          <span>/{total}</span>
        </div>

        <div className="stat-title">{title}</div>
      </div>

      <div className={`stat-icon ${type}`}>
        <Icon name={icon} size={21} />
      </div>
    </div>
  );
}

export default StatCard;