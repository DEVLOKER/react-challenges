// import React from "react";
import useGame from "./hooks/useGame";
import "./styles/app.css";

import GameControl from "./components/GameControl";
import GameInfo from "./components/GameInfo";
import GameLayout from "./components/GameLayout";

function App() {
    const [state, dispatch] = useGame();

    return (
        <div>
            <h1>TIC-TAC-TOE</h1>
            <GameControl {...{ dispatch }} />
            <GameLayout {...{ state, dispatch }} />
            <GameInfo {...{ state }} />
        </div>
    );
}

export default App;
