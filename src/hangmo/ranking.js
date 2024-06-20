import React from 'react';
import "./App.css";
import logo from "../img/Logo.png";

function Ranking() {
  React.useEffect(() => {
    document.title = "HANGMO - Ranking";
  }, []);

  // Mock data for the ranking
  const users = Array.from({ length: 100 }, (_, i) => `User ${i + 1}`);

  return (
    <div className="App">
      <a href="./hangmogame">
        <img className="logo" src={logo} alt="Logo hangmo" />{" "}
      </a>

      <div className="container">
        <div id="rankingPage" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
          <h2>Ranking</h2>
          <ol>
            {users.map(user => (
              <li key={user}>{user}</li>
            ))}
          </ol>
        </div>
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

export default Ranking;