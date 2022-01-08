import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/nouman-a-malik" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" color="gray"/></a>
            <a href="https://github.com/NoumanAMalik" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" color="gray"/></a>
        </div>
    )
};

export { Footer as default };