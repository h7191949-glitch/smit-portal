
import React from "react";
import TopicItem from "./TopicItem";
import "./ProgressTopics.css";

function ProgressTopics() {
  const topics = [
    {
      title: "Web Designing",
      completed: 20,
      total: 20,
      percentage: 100,
      status: "completed",
    },
    {
      title: "Front-End Development",
      completed: 27,
      total: 31,
      percentage: 87,
      status: "pending",
    },
    {
      title: "Modern Front-End Development",
      completed: 10,
      total: 14,
      percentage: 71,
      status: "pending",
    },
    {
      title: "Back-End Development",
      completed: 0,
      total: 16,
      percentage: 0,
      status: "pending",
    },
  ];

  return (
    <div className="progress-topics">

      {topics.map((topic) => (
        <TopicItem
          key={topic.title}
          topic={topic}
        />
      ))}

    </div>
  );
}

export default ProgressTopics;