import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of Navigate
import "./App.css";
import "./hangmo";
import logo from "../img/Logo.png";
import googlelogo from "../img/google.png";
import facebooklogo from "../img/facebook.webp";
import axios from "axios";
import apiClient from "../api/apiClient";
import { login } from "../api/gameService";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  React.useEffect(() => {
    document.title = "HANGMO - Login";
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await login(email, password);
      if (response.status === 200) {

        navigate("/hangmogame"); // Use navigate instead of history
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("E-mail ou senha incorretos, tente novamente.");
    }
  };

  return (
    <div className="App">
      <a href="./login">
        <img className="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container">
        <form id="loginpage" onSubmit={handleLogin}>
          <h2>E-mail</h2>
          <div>
            <input
              className="login"
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <h2>Senha</h2>
          <div>
            <input
              className="login"
              type="password"
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id="entrarButton" type="submit">
            Entrar
          </button>
        </form>
        <div id="forgetPassAndCreate">
          <a href="./esqueci">Esqueci minha senha</a>
          <a href="./cadastro">Cadastrar</a>
        </div>
        <br />
        <div id="socialLogoImg">
          <a
            href="./hangmo/hangmo"
            onClick={(e) => {
              e.preventDefault();
              alert("Logar com o Google ainda está em desenvolvimento");
            }}
          >
            <img className="sociallogo" src={googlelogo} alt="Logo Google" />{" "}
          </a>
          <a
            href="./hangmo/login"
            onClick={(e) => {
              e.preventDefault();
              alert("Logar com o Facebook ainda está em desenvolvimento");
            }}
          >
            <img
              className="sociallogo"
              src={facebooklogo}
              alt="Logo Facebook"
            />
          </a>
        </div>
        <br />
      </div>
      <footer>
        <p>
          Trabalho de conclusão do primeiro semestre de 2024 para as disciplinas
          de Sistemas Distribuídos e Mobile, Usabilidade, desenvolvimento web,
          mobile e jogos - Universidade São Judas Tadeu (01/24)
        </p>
      </footer>
    </div>
  );
}
export default Login;
