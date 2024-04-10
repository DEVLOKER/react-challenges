import * as React from "react";

import useGame from "./hooks/useGame";
import "./App.css";
import GameLayout from "./components/GameLayout";

function App() {
    const [state, dispatch] = useGame();
    const { targetWord, messageInfo } = state;
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const newGame = () => {
        dispatch({ type: "NEW_GAME" });
        buttonRef.current?.blur();
    };

    return (
        <div>
            <h1>GUESS-WORD</h1>
            <div className="game-control">
                <div className="message-info">{messageInfo}</div>
                <button ref={buttonRef} onClick={newGame}>
                    New Game
                </button>
            </div>
            <GameLayout {...state} />
            <div className="target-word">{targetWord}</div>
        </div>
    );
}

export default App;
