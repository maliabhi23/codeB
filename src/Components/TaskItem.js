import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="p-3 bg-white border rounded-md shadow-md my-2">
      <h3 className="font-bold">{task.title}</h3>
      <p>{task.description}</p>
      <small className="text-gray-500">Deadline: {new Date(task.deadline).toLocaleDateString()}</small>
    </div>
  );
};

export default TaskItem;
