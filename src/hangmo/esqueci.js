import React, { useState } from "react";
import "./App.css";
import "./hangmo";
import logo from "../img/Logo.png";

function Esqueci() {
  React.useEffect(() => {
    document.title = "HANGMO - Recuperação de senha";
  }, []);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (email === "") {
      setMessage("Adicione seu e-mail no input para continuar");
    } else if (!email.includes("@")) {
      setMessage("E-mail incorreto.");
    } else {
      setMessage(
        "Você deverá receber um e-mail em breve com instruções para a redefinição de sua senha."
      );
    }
  };

  return (
    <div className="App">
      <a href="../hangmo">
        <img class="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container">
        <h2 style={{ color: "#ff6b00" }}>Recuperação de senha</h2>
        <div id="loginpage">
          <div>
            <input
              className="login"
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button id="entrarButton" onClick={handleSend}>
          Enviar
        </button>
        {message && (
          <p id="successMessage">
            <strong>{message}</strong>
          </p>
        )}
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

export default Esqueci;
