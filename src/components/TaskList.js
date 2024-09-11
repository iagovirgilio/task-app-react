import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, editTask, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} editTask={editTask} removeTask={removeTask} />
      ))}
    </ul>
  );
}

export default TaskList;
