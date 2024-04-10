// import * as React from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./data/accordion";

function App() {
    return (
        <div>
            <h1>Accordion</h1>
            <Accordion data={accordionData} />
        </div>
    );
}

export default App;
