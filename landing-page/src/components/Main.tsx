// import React from "react";
import CenterContent from "./CenterContent";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import "@/styles/page-main.css";

const Main = () => {
    return (
        <main className="page-main">
            <LeftSideBar />
            <CenterContent />
            <RightSideBar />
        </main>
    );
};

export default Main;
