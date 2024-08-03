import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// index.js veya App.js
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Bootstrap'in JS ve Popper'ı içeren sürümü


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
