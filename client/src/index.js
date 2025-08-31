// index.js (or main.jsx for React 18+)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { Toaster } from 'react-hot-toast'; // Make sure react-hot-toast is installed and imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* UserProvider and other context providers go here */}
      <UserProvider>
        <App />
      </UserProvider>
      {/* The Toaster component should be at the root level */}
      <Toaster />
    </Router>
  </React.StrictMode>
);