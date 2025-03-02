import logo from './logo.svg';
import './App.css';
import {CategorySlider} from "./Components/CategorySlider"
import TaskForm from "./Components/TaskForm"
import Sidebar from "./Components/Sidebar"
import {Calendar} from "./Components/Calendar"
import SuccessModal from "./Components/SuccessModal"
import TaskBoard from "./Components/TaskBoard"
import {TaskCard} from "./Components/TaskCard"
import {TaskList} from "./Components/TaskList"
import { useState } from 'react';
function App() {

  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1, status: "To Do" }]);
    setShowSuccess(true);
  };

  return (
    <div className="app">
    <Sidebar setShowTaskForm={setShowTaskForm} />
    <TaskBoard tasks={tasks} />
    <TaskForm isOpen={showTaskForm} onClose={() => setShowTaskForm(false)} addTask={addTask} />
    <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
  </div>
  );
}

export default App;
