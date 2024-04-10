// import React from "react";
import { TGameState } from "../types";
import "../styles/game-cell.css";

type Props = {
    i: number;
    j: number;
    // state: TGameState;
} & TGameState;

const GameCell = ({ i, j, attempts, currentAttempt, targetWord }: Props) => {
    const value =
        attempts.length > j
            ? attempts[j][i]
            : currentAttempt.length > i && attempts.length === j
            ? currentAttempt[i]
            : "";

    const cssClass =
        value === "" || attempts.length === j
            ? ""
            : value === targetWord[i]
            ? "correct"
            : "incorrect";
    return (
        <div className={`cell ${cssClass}`} key={j}>
            {value}
        </div>
    );
};

export default GameCell;
