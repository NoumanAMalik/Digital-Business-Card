import React from "react";
import "./Info.css"
import nm from "./nm.png"

const Info = () => {
    return (
        <div>
            <img src={nm} alt="NM"/>
            <p>Nouman Malik</p>
            <p>Computer Science Student</p>
            <a href="mailto: noumancodes@gmail.com"><button>Email</button></a>
            <a href="https://www.linkedin.com/in/nouman-a-malik" target="_blank" rel="noreferrer"><button>LinkedIn</button></a>
        </div>
    )
};

export { Info as default };