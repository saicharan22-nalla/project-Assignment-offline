import React, { useState } from 'react';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [darkMode,setDarkMode] = useState(false);
  
  const addTask = (taskName) => {
    setTasks([...tasks, { id: Date.now(), name: taskName, text:taskName}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      <button className="dark-mode-toggle" onClick={toggleDarkMode}> 
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      < TaskInput addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggleComplete={toggleTaskCompletion} 
      />
    </div>
  );
};

export default App;



