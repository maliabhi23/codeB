import React, { useState } from "react";
import Modal from "react-modal";

const TaskForm = ({ isOpen, onClose, addTask }) => {
  const [task, setTask] = useState({ title: "", priority: "Low", deadline: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <h2>ADD TASK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Task Name" required onChange={(e) => setTask({ ...task, title: e.target.value })} />
        <select onChange={(e) => setTask({ ...task, priority: e.target.value })}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <input type="date" onChange={(e) => setTask({ ...task, deadline: e.target.value })} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default TaskForm;
