import React from "react";
import { layoutSize } from "../constants";
import { TGameAction } from "../types";
import "../styles/game-control.css";

type Props = {
    dispatch: React.Dispatch<TGameAction>;
};

const GameControl = ({ dispatch }: Props) => {
    const inputLayoutSizeRef = React.useRef<HTMLInputElement>(null);

    const newGame = () => {
        dispatch({
            type: "NEW_GAME",
            payload: {
                layoutSize:
                    inputLayoutSizeRef.current?.valueAsNumber ?? layoutSize,
            },
        });
    };

    return (
        <div className="game-control">
            <input
                type="number"
                className="input-layout-size"
                defaultValue={layoutSize}
                ref={inputLayoutSizeRef}
            />
            <button onClick={newGame}>New game</button>
        </div>
    );
};

export default GameControl;
