import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './login';
import Cadastro from './cadastro';
import Hangmo from './hangmo';
import reportWebVitals from './reportWebVitals';
import Conta from './conta';
import Ranking from './ranking';
import Esqueci from './esqueci';
import PrivateRoute from './privateRoute'; 

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci" element={<Esqueci />} />
          <PrivateRoute path="/hangmogame" element={<Hangmo />} />
          <PrivateRoute path="/conta" element={<Conta />} />
          <PrivateRoute path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

reportWebVitals(console.log);