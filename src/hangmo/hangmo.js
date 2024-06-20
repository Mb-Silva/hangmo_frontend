import { GameRank } from './PlayerRank/PlayerRank';
import { ThemeSubmit } from './ThemeSubmit/ThemeSubmit';
import { HangmanDisplay } from './HangmanDisplay/HangmanDisplay';
import { NavBar } from './NavBar/NavBar';
import React, { useState, useEffect } from "react";
import { makeGuess, createGame } from "../api/gameService";
import logo from "../img/Logo.png";


function HangmanGame() {
  const [displayWord, setDisplayWord] = useState("");
  const [game, setGame] = useState(null);
  const [gameId, setGameId] = useState('');
  const [wrongGuessCount, setWrongGuessCount] = useState('');
  const [gameResult, setGameResult] = useState("");
  const [wordLength, setWordLength] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [secretWord, setSecretWord] = useState("");
  const [themeSent, setThemeSent] = useState(false);
  const [guesses, setGuesses] = useState([]);
  const [errors, setErrors] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const [theme, setTheme] = useState("");

  
  
  const topPlayers = [
    { usuario: "Player", pontuacao: 100 },
    { usuario: "Usuário 2", pontuacao: 85 },
    { usuario: "Usuário 3", pontuacao: 80 },
    { usuario: "Usuário 4", pontuacao: 75 },
    { usuario: "Usuário 5", pontuacao: 70 },
    { usuario: "Usuário 6", pontuacao: 65 },
    { usuario: "Usuário 7", pontuacao: 60 },
    { usuario: "Usuário 8", pontuacao: 55 },
    { usuario: "Usuário 9", pontuacao: 50 },
    { usuario: "Usuário 10", pontuacao: 45 },
    ];
  

  const handleCreateGame = async () => {
    if (theme) {
      try {
        const gameData = await createGame(theme);
        setGame(gameData);
        setGameId(gameData.gameId);
        setWordLength(gameData.wordLength);
        setWrongGuessCount(gameData.wrongGuessCount);        
        localStorage.setItem("gameData", JSON.stringify(gameData))
        setThemeSent(true);
      } catch (error) {
        console.error("Erro ao enviar tema:", error);
      }
    }
  };
  
  useEffect(() => {
    if (game) {
      setDisplayWord("_".repeat(game.wordLength));
    }
  }, [game]);

  const handleMakeGuess = async (letter) => {
    try{
      const guessData = await makeGuess(gameId, letter);
      setWrongGuessCount(guessData.wrongGuessCount);
      setCoordinates(guessData.coordinates);
      setGameResult(guessData.gameResult);

      if(guessData.isPresent){
        let newDisplayWord = displayWord.split("");
        guessData.coordinates.forEach(coord => {
          newDisplayWord[coord.position] = coord.character;
        });
        setDisplayWord(newDisplayWord.join(""));    
      }

      if (guessData.gameResult === "Win") {
        setWin(true);
        setGameOver(true);
      } else if (guessData.gameResult === "Loss") {
        setGameOver(true);
      }
    }catch(error){
      
      console.log(error);
    }

  };
  
  const alphabetRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  const handleLetterClick = (letter) => {
    if (!gameOver && !displayWord.includes(letter) && !coordinates.some(coord => coord.character === letter)) {
      handleMakeGuess(letter);
    }
  };

//  const handleGuess = (letter) => {
//    if (gameOver || guesses.includes(letter)) return;

//    setGuesses((prevGuesses) => [...prevGuesses, letter]);

//    if (!secretWord.includes(letter)) {
//      setErrors((prevErrors) => {
//        const newErrors = prevErrors + 1;
//        if (newErrors === 6) {
 //         setGameOver(true);
//        }
//        return newErrors;
//      });
//    }
//  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (key.length === 1 && key >= "a" && key <= "z") {
        handleLetterClick(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guesses, gameOver]);

 // useEffect(() => {
 //   if (guesses.length > 0) {
 //     const wordGuessed = secretWord
 //       .split("")
 //       .every((letter) => guesses.includes(letter));
 //     if (wordGuessed) {
 //       setWin(true);
 //       setGameOver(true);
 //     }
 //   }
 // }, [guesses]);

 // useEffect(() => {
 //   const fetchWord = async () => {
 //     try {
 //       const response = await axios.get(
 //         "https://hangmo-game-ad894dbd8da1.herokuapp.com/WordGeneration"
 //       );
 //       setSecretWord(response.data.palavra);
 //     } catch (error) {
 //       console.error("Erro ao buscar palavra:", error);
 //     }
 //   };

 //   if (themeSent) {
 //     fetchWord();
 //   }
 // }, [themeSent]);


  return (
    <>
    <NavBar   logo={logo}  />
    <div className="hangman-game">      
      <div className="game-container">
        <GameRank   topPlayers={topPlayers}  />
         
          <section className="game" >
            {!themeSent ? (
              <div>
                <p id="Enviar">Envie um tema para a IA para jogar o Hangmo!</p>
              </div>
            ) : (
              <>
                <p id="tema">Tema: {theme}</p>
                
                <HangmanDisplay wrongGuessCount={wrongGuessCount} displayWord={displayWord}  />
                {gameOver && <p>{win ? "Você ganhou!" : "Você perdeu!"}</p>}
                <div id="alphabet-container">
                  <div id="alphabet">
                    {alphabetRows.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`alphabet-row ${rowIndex === 3 ? "last-row" : ""}`}
                      >
                        {row.split("").map((letter) => (
                          <button
                            key={letter}
                            className="letter"
                            onClick={() => handleLetterClick(letter)}
                            disabled={guesses.includes(letter) || gameOver}
                          >
                            {letter}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </>
          
            )}
            <ThemeSubmit 
              theme={theme} 
              setTheme={setTheme} 
              themeSent={themeSent} 
              handleCreateGame={handleCreateGame} 
            />  
          </section>
        
        <div className="sidebar">
          <div id="hangman-theme-group" style={{ paddingRight: "20px" }}>
            <input
              required=""
              type="text"
              id="hangman-theme"
              onKeyDown={(event) => event.stopPropagation()}
            />
            <span id="hangman-theme-bar"></span>
            <label id="hangman-theme-label">
              <span className="label-char" style={{ "--index": "0" }}>
                Código do multijogador
              </span>
            </label>
          </div>
          
          <div className="score-table-container">
          <h5>Sua pontuação</h5>
            <table className="score-table">
              <tbody>
                <tr>
                  <td>Jogador:</td>
                  <td>Player</td>
                </tr>
                <tr>
                  <td>Pontuação:</td>
                  <td>100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default HangmanGame;
