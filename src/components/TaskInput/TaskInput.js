import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <div className='task-input'>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
        className='input-field'
      />
      <button type="submit" className='button'>Add Task</button>
    </form>

    </div>
    
  );
};

export default TaskInput;






