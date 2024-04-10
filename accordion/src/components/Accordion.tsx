// import React from "react";
import { TAccordion } from "../types/Accordion";
import AccordionItem from "./AccordionItem";

type Props = {
    data: TAccordion[];
};

const Accordion = ({ data }: Props) => {
    return (
        <div>
            {data.map(({ title, content, open }) => (
                <AccordionItem key={title} {...{ title, content, open }} />
            ))}
        </div>
    );
};

export default Accordion;
