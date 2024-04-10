// import React from "react";
import "@/styles/ui.css";

const UI = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <div className="left-content">
                    <div className="circle circle2"></div>
                    <div className="circle circle1"></div>
                    <div className="backdrop">
                        <h1>This is a header!</h1>
                        <p>
                            this just a text, this just a text, this just a
                            text, this just a text, this just a text, this just
                            a text, this just a text, this just a text, this
                            just a text, this just a text, this just a text,
                            this just a text, this just a text, this just a
                            text, this just a text, this just a text, this just
                            a text
                        </p>
                        <button className="button">Next &#x2192;</button>
                    </div>
                </div>
                <div className="right-content">
                    <h1></h1>
                    <p>
                        Image by{" "}
                        <a href="https://pixabay.com/users/mohamed_hassan-5229782/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3213924">
                            Mohamed Hassan
                        </a>{" "}
                        from{" "}
                        <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3213924">
                            Pixabay
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UI;
