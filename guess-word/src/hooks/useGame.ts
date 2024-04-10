import React from "react";
import { TGameAction, TGameState } from "../types";
import { generateRandomWold } from "../utils";
import { allowedChars, maxAttempts, wordSize } from "../constants";

const initialState = (): TGameState => ({
    targetWord: generateRandomWold(),
    currentAttempt: "",
    attempts: [],
    messageInfo: "",
    gameOver: false,
});

const reducer = (state: TGameState, action: TGameAction) => {
    const { type } = action;
    const { attempts, currentAttempt } = state;
    switch (type) {
        case "NEW_GAME":
            return initialState();
        case "TYPING":
            return {
                ...state,
                currentAttempt: action.payload,
                messageInfo: "",
            };
        case "ATTEMPT":
            return {
                ...state,
                attempts: [...attempts, currentAttempt],
                currentAttempt: "",
            };
        case "MESSAGE":
            return { ...state, messageInfo: action.payload };
        case "GAME_OVER":
            return { ...state, gameOver: true, messageInfo: action.payload };
        default:
            return state || initialState();
    }
};

const useGame = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState());
    const { attempts, currentAttempt, gameOver, targetWord } = state;

    React.useEffect(() => {
        if (gameOver) return;
        if (checkIsWin()) return;
        if (checkIsReachMaxAttempts()) return;

        const typing = (event: KeyboardEvent) => handleTypingCases(event.key);
        window.addEventListener("keyup", typing, false);
        return () => window.removeEventListener("keyup", typing, false);
    }, [currentAttempt, gameOver]);

    const handleTypingCases = (key: string) => {
        if (key === "Enter") {
            if (!checkCellsFilling()) return;
            dispatch({ type: "ATTEMPT" });
        }

        if (key === "Backspace") {
            dispatch({ type: "TYPING", payload: currentAttempt.slice(0, -1) });
            return;
        }

        if (!checkTypingValidation(key)) return;

        dispatch({ type: "TYPING", payload: currentAttempt.concat(key) });
    };

    // ----------------------------------------------------------------
    // Helper functions
    // ----------------------------------------------------------------

    const checkIsWin = () => {
        if (currentAttempt === targetWord) {
            dispatch({ type: "ATTEMPT" });
            dispatch({ type: "GAME_OVER", payload: `you win!` });
            return true;
        }
        return false;
    };

    const checkIsReachMaxAttempts = (): boolean => {
        if (attempts.length === maxAttempts) {
            dispatch({
                type: "GAME_OVER",
                payload: `game is over, you reach the max attempts, click on button to play again!`,
            });
            return true;
        }
        return false;
    };

    const checkCellsFilling = (): boolean => {
        if (currentAttempt.length != wordSize) {
            dispatch({
                type: "MESSAGE",
                payload: `please fill all the cells!`,
            });
            return false;
        }
        return true;
    };

    const checkTypingValidation = (key: string): boolean => {
        if (currentAttempt.length === wordSize) return false;
        if (!allowedChars.includes(key)) {
            dispatch({
                type: "MESSAGE",
                payload: `[${key}] not allowed!, use : "${allowedChars.split(
                    ""
                )}" instead`,
            });
            return false;
        }
        return true;
    };

    return [state, dispatch] as const;
};

export default useGame;
