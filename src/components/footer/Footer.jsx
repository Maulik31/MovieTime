import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                   I hope you liked my website.<br/>
                   Enjoy the Show. 😀🎥<br/>

                </div>
                <div className="socialIcons">
                    <span className="icon">
                    <a href="https://www.facebook.com/Maulikp3354" target="_blank" rel="noreferrer">
                    <FaFacebookF /></a>
                    </span>
                    <span className="icon">
                    <a href="https://www.instagram.com/maulik_patel31" target="_blank" rel="noreferrer">
                        <FaInstagram />
                        </a>
                    </span>
                    <span className="icon">
                    <a href="https://github.com/Maulik31" target="_blank" rel="noreferrer">
                    <FaGithub />
                    </a>  
                    </span>
                    <span className="icon" >
                    <a href="https://www.linkedin.com/in/maulikpatel3112/" target="_blank" rel="noreferrer">
                        <FaLinkedin/>
                        </a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;