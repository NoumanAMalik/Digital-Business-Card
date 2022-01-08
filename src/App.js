import React from "react";
import "./App.css";
import Info from "./Info.js";
import About from "./About.js";
import Interests from "./Interests.js";
import Footer from "./Footer.js";

const App = () => {
    return (
        <div className="card">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
};

export { App as default };