// import React from "react";
import Landing from "@/pages/Landing";
import UI from "@/pages/UI";

const randomIntNumber = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min);

const App = () => {
    const percent = randomIntNumber(0, 100);
    return percent > 50 ? <Landing /> : <UI />;
};

export default App;
