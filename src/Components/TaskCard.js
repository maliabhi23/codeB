import React from "react";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <p className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</p>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Deadline: {task.deadline}</p>
    </div>
  );
};

export default TaskCard;
