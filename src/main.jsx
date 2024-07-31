import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que esta ruta sea correcta
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container); // Usamos createRoot en lugar de ReactDOM.render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
