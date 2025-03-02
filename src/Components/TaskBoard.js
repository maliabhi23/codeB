import React from "react";
import TaskCard from "./TaskCard";

const TaskBoard = ({ tasks }) => {
  return (
    <div className="task-board">
      {["To Do", "In Progress", "Done"].map((status) => (
        <div key={status} className="task-column">
          <h2>{status}</h2>
          {tasks
            .filter((task) => task.status === status)
            .map((task) => <TaskCard key={task.id} task={task} />)}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
