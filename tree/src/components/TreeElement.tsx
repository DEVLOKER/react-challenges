import React from "react";
import { TTreeElement } from "../types";

type Props = TTreeElement & {
    // toggleOpen: () => void;
    // setTree: () => void;
};

const TreeElement = ({
    name,
    isOpen: isOpened,
    children,
}: // toggleOpen: _,
Props) => {
    const [isOpen, setIsOpen] = React.useState(isOpened);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="tree-element">
            <div className="parent">
                <div
                    className="open-close"
                    role="button"
                    onClick={children ? toggleOpen : () => {}}
                >
                    {!children ? "" : isOpen ? "-" : "+"}
                </div>

                <div className="name">{name}</div>
            </div>
            <div className="children">
                {isOpen &&
                    children?.map((element, i) => (
                        <TreeElement key={i} {...{ ...element }} />
                    ))}
            </div>
        </div>
    );
};

export default TreeElement;
