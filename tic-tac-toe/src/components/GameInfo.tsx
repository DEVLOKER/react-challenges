// import React from "react";
import { TGameState } from "../types";
import "../styles/game-info.css";

type Props = {
    state: TGameState;
};
const GameInfo = ({ state }: Props) => {
    const { players, turn, gameOver, messageInfo } = state;

    return (
        <div className="game-info">
            <div>
                <p className="message-info">{messageInfo}</p>
            </div>

            <table border={0}>
                <thead>
                    <tr>
                        {players.map((player) => (
                            <th key={player.name}>{player.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {players.map((player) => (
                            <td key={player.name}>
                                <div
                                    className={`cell ${player.shape} ${
                                        player.name === turn.name && !gameOver
                                            ? player.name
                                            : ""
                                    }`}
                                >
                                    {player.shape}
                                </div>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default GameInfo;
