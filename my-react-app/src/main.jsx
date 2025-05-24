// src/main.jsx (or index.js) - NEW REACT 18 WAY
import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice '/client' here
import App from './App.jsx'; // Assuming your main component is App.jsx
import './index.css';

// Get the root DOM element
const rootElement = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render your app using the new root API
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);