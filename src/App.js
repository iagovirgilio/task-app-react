import React from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Loading from './components/Loading';
import { useTasks } from './hooks/useTasks';

import './App.css';

function App() {
  const { tasks, loading, addTask, editTask, removeTask } = useTasks();

  return (
    <div className="container">
      <Header>Gerenciador de Tarefas</Header>
      <TaskForm addTask={addTask} />
      {loading ? <Loading /> : <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />}
    </div>
  );
}

export default App;
