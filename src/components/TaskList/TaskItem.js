import React from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} onClick={() => onToggleComplete(task.id)}>
      <span>{task.text}</span>
      <button onClick={(e) => {
        e.stopPropagation(); 
        onDelete(task.id);
      }}>Delete</button>
    </div>
  );
};

export default TaskItem;
