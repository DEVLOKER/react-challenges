import React from "react";

type Props = {
    element?: HTMLElement;
    y?: number;
};

const useScroll = ({ element = undefined, y = 100 }: Props) => {
    const [isReached, setIsReached] = React.useState<boolean>(false);

    React.useEffect(() => {
        const scrollHandler = () => {
            const reached = window.scrollY > (element?.offsetTop ?? y);
            setIsReached(reached);
        };

        window.addEventListener("scroll", scrollHandler);

        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    return [isReached, setIsReached] as const;
};

export default useScroll;
