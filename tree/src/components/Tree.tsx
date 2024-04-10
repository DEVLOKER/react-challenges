// import React from "react";
import TreeElement from "./TreeElement";
import { TTreeElement } from "../types";

type Props = {
    elements: TTreeElement[];
};

const Tree = ({ elements }: Props) => {
    return (
        <div>
            {elements.map((element, i) => (
                <TreeElement key={i} {...{ ...element }} />
            ))}
        </div>
    );
};

export default Tree;
