// import React from "react";
import useScroll from "@/hooks/useScroll";
import "@/styles/center-content.css";

const CenterContent = () => {
    const element = document.getElementById("body-header") ?? undefined;
    const [isReached] = useScroll({ y: 30 });
    // const [isReached] = useScroll({ element });

    console.log(isReached);

    isReached
        ? element?.classList.add("sticky")
        : element?.classList.remove("sticky");

    return (
        <div className="center-content">
            <h2 id="body-header" style={{ textAlign: "left" }}>
                sticky header text
            </h2>
            {[...Array(20).keys()].map((el, i) => (
                <div key={el} className="card">
                    center content {i + 1}
                </div>
            ))}
        </div>
    );
};

export default CenterContent;
