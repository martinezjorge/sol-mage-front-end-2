import React from "react";
import  "./nav.css"
import Wallet from '../../assets/img/wallet.png';
import Lich from '../../assets/img/lich.gif';


const nav = () => {

    return (
        <div className="nav-container sticky">
            <a className="logo" href="#"><img src={Lich} alt="The Void logo" className="void-logo"></img></a>
            <nav className="navigation">
                <ul>
                    <li><a href="#void-pass">About</a></li>
                    <li><a href="#team">Council</a></li>
                    <li><a href="#the-artist">Art</a></li>
                    <li><a href="#faq">FAQ</a></li>
                    <li><a href="https://www.magiceden.io/marketplace/sol_mage_society">Buy</a></li>
                    <li><a href="https://medium.com/@solmagesociety">Dev Log</a></li>
                    <li><a href="#">Crawler</a></li>
                    <li><a href="https://solmagearena.netlify.app/">Arena</a></li>
                    <li><a href="#">Raid</a></li>
                    <li><a href="#the-roadmap">Roadmap</a></li>
                </ul>
            </nav>
            <div className="wallet">
            <button className="boom">
                <div className="wallet-button">
                    <img src={Wallet} alt="Wallet icon" className="void-logo"></img>
                </div>
                <div className="wallet-button">
                    Coming Soon
                </div>
            </button>
            </div>
        </div>
    );
}

export default nav
