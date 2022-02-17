import React from "react";
import "./footer.css"
import twitter from '../../assets/img/twitter.png';
import discord from '../../assets/img/discord.png';


const Footer = () => {
    return (
        <div id="footer">
            <div className="title">
                <h2>Join The Community</h2>
            </div>
            <div id="links">
                <a href="https://twitter.com/SOLMageSociety" target="_blank"><button className="border-gradient social"><img className='' src={twitter} alt="twitter"></img></button></a>
                <a href="https://discord.com/invite/solmage" target="_blank"><button className="border-gradient social"><img className='' src={discord} alt="discord"></img></button></a>
            </div>
        </div>
    )
}

export default Footer;
