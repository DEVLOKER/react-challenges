import React from "react";
import {
    checkWinner,
    initialValue,
    isEmptyGameLayout,
    isFilledGameLayout,
} from "../utils";
import { TGameAction, TGameState } from "../types";
import { layoutSize } from "../constants";

const reducer = (state: TGameState, action: TGameAction): TGameState => {
    const { type } = action;
    switch (type) {
        case "NEW_GAME": {
            // action?.payload ??
            const size = action.payload?.layoutSize ?? layoutSize;
            return initialValue(size);
        }
        case "PLAY": {
            const { x, y } = action.payload;
            const newGameLayout = [...state.gameLayout];
            newGameLayout[x][y] = state.turn.shape;
            return { ...state, gameLayout: newGameLayout };
        }
        case "TOGGLE_TURN": {
            const newTurn = state.players.filter(
                (p) => p.name !== state.turn.name
            )[0];
            return { ...state, turn: newTurn };
        }
        case "MESSAGE":
            return { ...state, messageInfo: action.payload.messageInfo };
        case "GAME_OVER":
            return {
                ...state,
                gameOver: true,
                messageInfo: action.payload.messageInfo,
                winnerCase: action.payload.winnerCase ?? undefined,
            };
        default:
            return state || initialValue();
    }
};

const useGame = () => {
    const [state, dispatch] = React.useReducer(reducer, initialValue());

    React.useEffect(() => {
        const { isWin, winnerCase } = checkWinner(
            state.gameLayout,
            state.turn.shape
        );

        if (isWin) {
            dispatch({
                type: "GAME_OVER",
                payload: {
                    winnerCase,
                    messageInfo: `${state.turn.name} win!`,
                },
            });
        } else {
            if (isFilledGameLayout(state.gameLayout)) {
                dispatch({
                    type: "GAME_OVER",
                    payload: {
                        messageInfo: `game over and no player wins!, play again!`,
                    },
                });
            }

            if (!isEmptyGameLayout(state.gameLayout)) {
                dispatch({
                    type: "TOGGLE_TURN",
                });
            }
        }
    }, [state.gameLayout]);

    return [state, dispatch] as const;
};

export default useGame;
