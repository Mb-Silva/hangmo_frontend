import React, { useState } from "react";
import "./ThemeSubmit.css";
// Importe o componente de loading aqui, se já existir
// import LoadingSpinner from "./LoadingSpinner";

export function ThemeSubmit({
  theme,
  setTheme,
  themeSent,
  handleCreateGame,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await handleCreateGame(); // Chama a função de outro arquivo
      // Operação concluída com sucesso, pode adicionar feedback de sucesso se necessário
    } catch (error) {
      // Tratar erros, se necessário
      console.error("Erro ao criar jogo:", error);
    } finally {
      setIsLoading(false); // Reativa o botão após o término, seja sucesso ou erro
    }
  };

  return (
    <div className="theme-submit">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          id="hangman-theme-group"
          style={{
            paddingRight: "20px",
          }}
        >
          <input
            required
            type="text"
            id="hangman-theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onKeyDown={(event) => event.stopPropagation()}
          />
          <span id="hangman-theme-bar"></span>
          <label id="hangman-theme-label">
            <span className="label-char" style={{ "--index": "0" }}>
              {themeSent ? "Altere o tema do jogo:" : "Tema alimentado por IA"}
            </span>
          </label>
        </div>
        <button
          id="send"
          type="submit"
          onClick={handleClick}
          disabled={isLoading} // Desabilita o botão se estiver em processo de carga
          style={{ position: "relative" }}
        >
          {isLoading && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Substitua pelo seu componente de loading */}
              {/* <LoadingSpinner /> */}
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}