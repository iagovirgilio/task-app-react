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

  // Carregar tarefas da API quando o componente for montado
  useEffect(() => {
    async function fetchTasks() {
      const tasksData = await getTasks(); // Buscar tarefas da API
      setTasks(tasksData); // Definir as tarefas no estado
      setLoading(false); // Parar o carregamento
    }
    fetchTasks();
  }, []);

  // Adicionar nova tarefa
  const addTask = async (newTask) => {
    const addedTask = await createTask(newTask); // Chama a API para criar nova tarefa
    setTasks([...tasks, addedTask]); // Atualiza o estado com a nova tarefa
  };

  // Editar tarefa existente
  const editTask = async (updatedTask) => {
    const task = await updateTask(updatedTask); // Atualiza tarefa via API
    setTasks(tasks.map((t) => (t.id === task.id ? task : t))); // Atualiza a lista de tarefas com a tarefa editada
  };

  // Remover tarefa
  const removeTask = async (id) => {
    await deleteTask(id); // Remove tarefa via API
    setTasks(tasks.filter((task) => task.id !== id)); // Remove do estado local
  };

  return (
    <div className="container">
      <Header>Gerenciador de Tarefas</Header>
      
      {/* Formulário para adicionar nova tarefa */}
      <TaskForm addTask={addTask} />

      {/* Se ainda estiver carregando, mostra o componente de loading */}
      {loading ? (
        <Loading />
      ) : (
        // Exibe a lista de tarefas com as funcionalidades de editar e remover
        <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />
      )}
    </div>
  );
}

export default App;
