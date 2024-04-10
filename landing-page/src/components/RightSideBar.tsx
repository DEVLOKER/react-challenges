// import React from "react";
import "@/styles/right-side.css";

const RightSideBar = () => {
    return (
        <section className="right-side">
            <div className="fixed-container-wrapper">
                <h3 style={{ textAlign: "left" }}>RightSideBar</h3>
                <div className="cards-container">
                    {[...Array(20).keys()].map((el, i) => (
                        <div key={el} className="element">
                            element {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightSideBar;
