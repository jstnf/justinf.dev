import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './css/main.css'

ReactDOM.render(
  <BrowserRouter basename='/' className="index">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);