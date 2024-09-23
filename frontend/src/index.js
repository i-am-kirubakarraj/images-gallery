import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import './css/index.css';
import App from './App';

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

