import React from "react";
import { TAccordion } from "../types/Accordion";
import "../styles/accordion.css";

type Props = TAccordion;

const AccordionItem = ({ title, content, open: opened }: Props) => {
    const [open, setOpen] = React.useState(opened);

    const handleClick = () => {
        setOpen(!open);
    };

    const cssClass = open ? "open" : "close";

    return (
        <div className={`accordion ${cssClass}`}>
            <div className="accordion-header" onClick={handleClick}>
                <h4>{title}</h4>
                <div role="button">{open ? "▲" : "▼"}</div>
            </div>
            <div className="accordion-body">{content}</div>
        </div>
    );
};

export default AccordionItem;
