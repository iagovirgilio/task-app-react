import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Loading from './components/Loading';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      const tasksData = await getTasks();
      setTasks(tasksData);
      setLoading(false);
    }
    fetchTasks();
  }, []);

  const addTask = async (newTask) => {
    const addedTask = await createTask(newTask);
    setTasks([...tasks, addedTask]);
  };

  const editTask = async (updatedTask) => {
    const task = await updateTask(updatedTask);
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header>Gerenciador de Tarefas</Header>
      <TaskForm addTask={addTask} />
      {loading ? <Loading /> : <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />}
    </div>
  );
}

export default App;
