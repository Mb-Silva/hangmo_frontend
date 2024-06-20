import React, { /*useState,*/ useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/Logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
const { faker } = require("@faker-js/faker/locale/pt_BR");

function Conta() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "HANGMO - Conta";
  }, []);

  const handleLogout = () => {
    // Store a mock authentication token in localStorage
    localStorage.setItem("authToken", false);
    // Set authToken globally
    window.authToken = false;
    global.authToken = false;
    navigate("/hangmo");
    console.log("Logged out, auth token:", localStorage.getItem("authToken"));
  };

  const phoneNumber = faker.number.int({ min: 10000000000, max: 99999999999 })
    .toString();

  return (
    <div className="App">
      <a href="./hangmogame">
        <img className="logo" src={logo} alt="Logo hangmo" />
      </a>

      <div className="container">
        <div className="row">
          <div
            className="col-sm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2>Informações da Conta</h2>
            <label>Nome de usuário: </label>
            <input
              className="infom"
              type="text"
              placeholder={faker.internet.userName()}
            />
            <label>Email: </label>
            <input
              className="infom"
              type="email"
              placeholder={faker.internet.email()}
            />
            <label>Celular: </label>
            <input className="infom" type="tel" placeholder={phoneNumber} />
            <label>Aniversário: </label>
            <input className="infom" type="date" />
            <label>Cor favorita: </label>
            <input className="infom" type="color" />
            <a href="/mudar-senha">Mudar senha</a>
            <div>
              <button type="submit" style={{ marginRight: "20px" }}>
                Salvar
              </button>
              <button type="button" onClick={handleLogout}>
                Deslogar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conta;
