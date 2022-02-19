import React from "react";
import "./hero.css"
import title from "../../assets/img/transparent_title.png";
import PixelBackground from '../../assets/video/pixel_background.mp4';
import Nfts from '../../assets/img/SolMage500500.gif';
import banner from "../../assets/img/banner.jpg";


const Hero = () => {

    return (
        <div className="hero" id="void">
            <div className="hero-container">
                <video className="video-test" autoPlay muted loop="1" playsInline="">
                    <source src={PixelBackground} type="video/mp4"></source>
                    <source src={PixelBackground} type="video/ogg"></source>
                    Your browser does not support the video tag.
                </video>
                <div class="centerpiece">
                    <img src={title} className="title"></img>
                    <div className="text-box-container">
                        <div className="nft-gifs">
                            <img src={Nfts}></img>
                        </div>
                        <div className="text-box">
                            <p className="quote">&ldquo;Mages do not simply die, they transform...&rdquo;</p>
                            <p>Sol Mage Society is a collection of pixelated NFTs featuring a unique name, set of attributes, and even spellbook bringing specific attacks used to battle in the Sol Mage Arena. </p>
                            <a className="anchor link-button eden-button" href="https://www.magiceden.io/marketplace/sol_mage_society">Magic Eden</a>
                            <a className="anchor link-button discord-button" href="https://discord.com/invite/solmage">Discord</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

