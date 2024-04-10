// import React from "react";
import { TGameState } from "../types";
import GameCell from "./GameCell";
import { maxAttempts, wordSize } from "../constants";
import "../styles/game-layout.css";

const GameLayout = (state: TGameState) => {
    const { gameOver } = state;
    return (
        <div className={`game-layout ${gameOver ? "game-over" : ""}`}>
            {[...Array(wordSize)].map((row, i) => (
                <div className="row" key={row}>
                    {[...Array(maxAttempts)].map((col, j) => (
                        <GameCell key={col} {...{ i, j, ...state }} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameLayout;
