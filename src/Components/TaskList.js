import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-5">
      {["To Do", "In Progress", "Done"].map(status => (
        <div key={status} className="p-4 border rounded-md bg-gray-100">
          <h2 className="text-lg font-bold">{status}</h2>
          {tasks.filter(task => task.status === status).map(task => (
            <TaskItem key={task._id} task={task} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
