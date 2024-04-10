import React from "react";
import { TTreeElement } from "./types";
import Tree from "./components/Tree";

const initialTree: TTreeElement[] = [
    {
        name: "Level One",
        isOpen: false,
        children: [
            { name: "1-1", isOpen: false },
            { name: "1-2", isOpen: false },
            {
                name: "1-3",
                isOpen: false,
                children: [
                    { name: "1-3-1", isOpen: false },
                    { name: "1-3-2", isOpen: false },
                ],
            },
        ],
    },
    {
        name: "Level Two",
        isOpen: false,
        children: [
            { name: "2-1", isOpen: false },
            { name: "2-2", isOpen: false },
        ],
    },
    {
        name: "Level Three",
        isOpen: false,
        children: [
            { name: "3-1", isOpen: false },
            { name: "3-2", isOpen: false },
        ],
    },
];

function App() {
    const [elements] = React.useState<TTreeElement[]>(initialTree);

    return (
        <div>
            <h1>Tree</h1>
            <Tree elements={elements} />
        </div>
    );
}

export default App;
