import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  let headerTitle;
  switch (location.pathname) {
    case '/':
      headerTitle = 'Bem-vindo ao Task-App!';
      break;
    case '/tasks':
      headerTitle = 'Gerenciador de Tarefas';
      break;
    case '/about':
      headerTitle = 'Sobre o Projeto';
      break;
    default:
      headerTitle = 'Task-App';
  }

  return <h1>{headerTitle}</h1>;
}

export default Header;
