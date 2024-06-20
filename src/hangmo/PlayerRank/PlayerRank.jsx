import React from "react";
export function GameRank({
    topPlayers
}) {
  return <div className="table-container">
    <h5>Top 10 players</h5>
    <table className="leaderboard">
        <thead>
            <tr>
                <th>Usuário</th>
                <th>Pontuação</th>
            </tr>
        </thead>
        <tbody>
        {topPlayers.map((player, index) => <tr key={index}>
            <td>{player.usuario}</td>
            <td>{player.pontuacao}</td>
            </tr>)}
        </tbody>
    </table>
</div>;
}
  