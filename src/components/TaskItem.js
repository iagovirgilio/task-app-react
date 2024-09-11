import React, { useState } from 'react';

function TaskItem({ task, editTask, removeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = () => {
    editTask({ ...task, title: newTitle });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="buttons">
        {isEditing ? (
            <button onClick={handleSubmit}>Salvar</button>
        ) : (
            <button className='secondary' onClick={handleEdit}>Editar</button>
        )}
        <button className='danger' onClick={() => removeTask(task.id)}>Remover</button>
      </div>
    </li>
  );
}

export default TaskItem;
