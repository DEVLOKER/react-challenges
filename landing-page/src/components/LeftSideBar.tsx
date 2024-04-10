import React from "react";
import "@/styles/left-side.css";

const LeftSideBar = () => {
    const [open, setOpen] = React.useState(true);
    const handleClick = () => setOpen(!open);

    return (
        <aside className={`left-side ${open ? "" : "close"}`}>
            <div className="fixed-container-wrapper">
                <div className="open-close">
                    <button onClick={handleClick}>
                        {open ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                            >
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="toggle-container">
                    <h3 style={{ textAlign: "left" }}>LeftSideBar</h3>
                    <div className="menu-container">
                        {[...Array(20).keys()].map((el, i) => (
                            <div key={el} className="item">
                                item {i + 1}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default LeftSideBar;
