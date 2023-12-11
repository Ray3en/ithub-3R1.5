import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'

// Импорт файла App.css (импорт доступен всем компонентам)
import './App.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)