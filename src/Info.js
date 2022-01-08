import React from "react";
import "./Info.css"
import nm from "./nm.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Info = () => {
    return (
        <div className="info">
            <img src={nm} alt="NM" className="info--img"/>
            <p className="info--name">Nouman Malik</p>
            <p className="info--position">Computer Science Student</p>
            <a href="mailto: noumancodes@gmail.com" className="info--button"><button><FontAwesomeIcon icon={faEnvelope} className="icon"/>Email</button></a>
        </div>
    )
};

export { Info as default };