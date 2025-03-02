import React from "react";

const Sidebar = ({ setShowTaskForm }) => {
  return (
    <div className="sidebar">
      <input type="text" placeholder="Search Project" />
      <div className="categories">
        <p>Expired Tasks: <span>5</span></p>
        <p>All Active Tasks: <span>7</span></p>
        <p>Completed Tasks: <span>2/7</span></p>
      </div>
      <button onClick={() => setShowTaskForm(true)}>+ Add Task</button>
    </div>
  );
};

export default Sidebar;
