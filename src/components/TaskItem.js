import React, { useState } from 'react';

function TaskItem({ task, editTask, removeTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = () => {
    editTask({ ...task, title: newTitle, description: newDescription });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Título"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Descrição"
          />
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <p>{task.description}</p>
        </>
      )}
      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSubmit}>Salvar</button>
        ) : (
          <button className="secondary" onClick={handleEdit}>Editar</button>
        )}
        <button className="danger" onClick={() => removeTask(task.id)}>Remover</button>
      </div>
    </li>
  );
}

export default TaskItem;
