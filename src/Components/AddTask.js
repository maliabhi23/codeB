import React, { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState({ title: "", description: "", deadline: "" });

  const handleSubmit = async (e) => {
console.log("handlesubmit")

    e.preventDefault();
    try {

      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const data = await response.json();
      console.log("Task added:", data);
      alert("Task added successfully ttt!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add task!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-md">
      <input 
        type="text" 
        placeholder="Title" 
        className="w-full p-2 border" 
        onChange={(e) => setTask({ ...task, title: e.target.value })} 
      />
      <input 
        type="text" 
        placeholder="Description" 
        className="w-full p-2 border mt-2" 
        onChange={(e) => setTask({ ...task, description: e.target.value })} 
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-2">
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
