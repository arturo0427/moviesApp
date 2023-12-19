import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { MoviesApp } from './MoviesApp.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesApp />
    </BrowserRouter>
  </React.StrictMode>,
)
