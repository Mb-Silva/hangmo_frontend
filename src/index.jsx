import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Login from "./hangmo/login";
import Cadastro from "./hangmo/cadastro";
import Hangmo from "./hangmo/hangmo";
import reportWebVitals from "./reportWebVitals";
import Esqueci from "./hangmo/esqueci";
import Conta from "./hangmo/conta";
import Ranking from "./hangmo/ranking";

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hangmogame" element={<Hangmo />} />
        <Route path="/esqueci" element={<Esqueci />} />
        <Route path="/conta" element={<Conta />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function() {
//     navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
//       // Registration was successful
//       console.log('ServiceWorker registration successful with scope: ', registration.scope);
//     }, function(err) {
//       // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
//   });
// }

reportWebVitals();