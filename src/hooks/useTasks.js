// hooks/useTasks.js
import { useState, useEffect } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

export const useTasks = () => {
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

  return { tasks, loading, addTask, editTask, removeTask };
};
