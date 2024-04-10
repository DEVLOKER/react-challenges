// import React from "react";
import { TCellValue } from "../types";
import "../styles/cell.css";

export type TCell = {
    value: TCellValue;
    clickHandler: () => void;
    cssClass: string;
};

const Cell = ({ value = "", clickHandler, cssClass = "" }: TCell) => {
    return (
        <div
            role="button"
            className={`cell ${value} ${cssClass}`}
            onClick={clickHandler}
        >
            {value}
        </div>
    );
};

export default Cell;
