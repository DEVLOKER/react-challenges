import React from "react";
import { TGameAction, TGameState } from "../types";
import Cell from "./Cell";
import { isCellInSolution } from "../utils";
import "../styles/game-layout.css";

type Props = {
    state: TGameState;
    dispatch: React.Dispatch<TGameAction>;
};

const GameLayout = ({ state, dispatch }: Props) => {
    const { gameOver, gameLayout, winnerCase, turn } = state;

    const handleCellClick = (x: number, y: number) => {
        if (gameLayout[x][y] !== "") {
            dispatch({
                type: "MESSAGE",
                payload: {
                    messageInfo: "already played!, please choose an idle cell!",
                },
            });
            return;
        }
        dispatch({ type: "PLAY", payload: { x, y } });
    };

    return (
        <div className={`game-layout ${gameOver ? "game-over" : ""}`}>
            {gameLayout.map((row, i) => (
                <div className="row" key={i}>
                    {row.map((cell, j) => (
                        <Cell
                            key={`${i}-${j}`}
                            value={cell}
                            cssClass={
                                winnerCase &&
                                isCellInSolution([i, j], winnerCase)
                                    ? turn.name
                                    : ""
                            }
                            clickHandler={() => handleCellClick(i, j)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default GameLayout;
