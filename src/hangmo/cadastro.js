// to run = npm start
// to get html requests axios

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import {register} from "../api/gameService"
import "./App.css";
import "./hangmo";
import logo from "../img/Logo.png";
import googlelogo from "../img/google.png";
import facebooklogo from "../img/facebook.webp";


function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      return "Email inválido";
    }
    return null;
  };

  const validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W).{6,}$/;
    if (!re.test(password)) {
      return "A senha deve ter pelo menos 6 caracteres, incluindo letras maiúsculas, minúsculas números e caracteres especiais";
    }
    return null;
  };

  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      return "As senhas não correspondem";
    }
    return null;
  };

  const handleEmailBlur = () => {
    const error = validateEmail(email);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: error,
    }));
  };

  const handlePasswordBlur = () => {
    const error = validatePassword(password);
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: error,
    }));
  };

  const handleConfirmPasswordBlur = () => {
    const error = validateConfirmPassword();
    setErrors((prevErrors) => ({
      ...prevErrors,
      confirmPassword: error,
    }));
  };

  const validateForm = () => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword();

    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError,
    });

    return !emailError && !passwordError && !confirmPasswordError;
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await register(email, password);
      if (response.status === 201) {

        navigate("/login"); // Use navigate instead of history
      }
    } catch (error) {
      
      if (error.response && error.response.status === 400) {
        const apiErrors = error.response.data.errors;
        const newErrors = {};
        if (apiErrors.DuplicateUserName) {
          newErrors.email = "E-mail já cadastrado";
        }
        setErrors(newErrors);
      } else {
        console.error("Erro ao cadastrar:", error);
        alert("Erro ao cadastrar:", error);
      }
    }
  };

  React.useEffect(() => {
    document.title = "HANGMO - Cadastro";
  }, []);
  return (
    <div className="App">
      <a href="../hangmo">
        <img class="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container" id="containerCadastro">
        <h1>Cadastro</h1>
        <form  onSubmit={handleRegister}>
          <div id="loginpage">
            <h2>E-mail</h2>
            <div>
              <input
                className="login"
                type="email"
                placeholder="Digite seu e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleEmailBlur}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <h2>Senha</h2>
            <div>
              <input
                className="login"
                type="text"
                placeholder="Digite sua senha..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handlePasswordBlur}


              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <h2>Confirmar senha</h2>
            <div>
              <input
                className="login"
                type="text"
                placeholder="Confirme sua senha..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={handleConfirmPasswordBlur}
              />
              {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </div>
          </div>
          
          <button id="entrarButton" type="submit">Confirmar</button>
        </form>
        <br />
        <div id="socialLogoImg">
          <a
            href="./hangmo/login"
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
export default Cadastro;
