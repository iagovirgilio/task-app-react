import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header'; // Usando o Header atualizado
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Loading from './components/Loading/Loading';
import Navigation from './components/Navigation/Navigation';
import { useTasks } from './hooks/useTasks';

import './App.scss';

function App() {
  const { tasks, loading, addTask, editTask, removeTask } = useTasks();

  return (
    <Router>
      <div className="container">
        {/* Adicionando a navegação */}
        <Navigation />
        
        {/* O componente Header agora cuida da lógica do título */}
        <Header />
        
        {/* Configurando as rotas */}
        <Routes>
          <Route path="/" element={<h2>Home Page: Você pode navegar entre as páginas</h2>} />
          <Route path="/tasks" element={
            <>
              <TaskForm addTask={addTask} />
              {loading ? <Loading /> : <TaskList tasks={tasks} editTask={editTask} removeTask={removeTask} />}
            </>
          } />
          <Route path="/about" element={<h2>Esta aplicação foi desenvolvida para gerenciar suas tarefas de forma eficiente.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
