//to run = npm start
import React from "react";
import "./App.css";
import "./login";
import "./cadastro";
import './index.css';
import Login from './login';
import Cadastro from './cadastro';
import Hangmo from './hangmo';
import Conta from './conta';
import Ranking from './ranking';
import Esqueci from './esqueci';
import PrivateRoute from './privateRoute'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/esqueci" element={<Esqueci />} />
          <PrivateRoute path="/hangmogame" element={<Hangmo />} />
          <PrivateRoute path="/conta" element={<Conta />} />
          <PrivateRoute path="/ranking" element={<Ranking />} />
          <Route path="*" element={<Login />} />
      </Switch>
    </Router>
  );
}
export default App;
