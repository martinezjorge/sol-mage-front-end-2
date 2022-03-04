import React from "react";
import "./team.css";
import Ghost from "../../assets/img/Ghost.png";
import GhostHolding from "../../assets/img/Ghost-Thick-Outline.png";
import GhostReading from "../../assets/img/GhostReading.png";
import GhostReaching from "../../assets/img/Ghost-Reaching.png";
import MageGif from "../../assets/img/WhiteShrimp-Sparkles.gif";
import WhiteShrimpWebp from "../../assets/img/WhiteShrimp.webp";
import WhiteGhost2Webp from "../../assets/img/WhiteGhost2.webp";
import GhostHoldingPixel from "../../assets/img/WhiteGhostPixel.png";
import GhostHoldingPixel300 from "../../assets/img/WhiteGhostPixel300.png";
import TestShrimp from "../../assets/img/TestingShrimp.png";
import WhiteShrimp from "../../assets/img/WhiteShrimp.png";
import WhiteShrimpExperiment from "../../assets/img/WhiteShrimpExperiment.png";
import GhostContrast from "../../assets/img/Ghost-More-Contrast.png";
import CartoonOne from '../../assets/img/cartoon-one.png';
import CartoonTwo from '../../assets/img/cartoon-two.png';
import CartoonThree from '../../assets/img/cartoon-three.png';


const Team = () => {
    return (
        <div className="team" id="team">
            <div className="team-title">
                <h1>Council</h1>
            </div>

            <div className="section">

                <div className="one">
                    <div className="image">
                        <img className="ghost-reading" src={GhostReading} alt="Sol Mage Reading on Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Game Dev/Design</h3>
                        <h4>SolMageArena</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image">
                        <img className="ghost-holding" src={GhostHolding} alt="Sol Mage Holding an Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>IPutOnMyRobe&WizardHat</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost-holding" src={GhostReaching} alt="Sol Mage Reaching for Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Lead Dev</h3>
                        <h4>DegenDangerDog</h4>
                    </div>
                </div>

                <div className="one">
                    <div className="image">
                        <img className="ghost-reaching" src={GhostReaching} alt="Sol Mage Reaching for Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Creative Director</h3>
                        <h4>PixelMancer</h4>
                    </div>
                </div>

                <div className="two">
                    <div className="image">
                        <img className="ghost-reading" src={GhostReading} alt="Sol Mage Reading for Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>MageYouLook</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost-holding" src={GhostHolding} alt="Sol Mage Holding an Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Marketing/Partnerships</h3>
                        <h4>DegenMageCollector</h4>
                    </div>
                </div>

                <div className="one">
                    <div className="image">
                        <img className="ghost-holding" src={GhostHolding} alt="Sol Mage Holding an Orb"></img>
                    </div>
                    <div className="team-names">
                        <h3>Marketing/Partnerships/Media/Discord</h3>
                        <h4>Ryfi CryptoGuy</h4>
                    </div>
                </div>

                <div className="two">
                    <div className="image">
                        <img className="ghost-reaching" src={GhostReaching} alt="The Void logo"></img>
                    </div>
                    <div className="team-names">
                        <h3>Partnership/Advisement</h3>
                        <h4>AltcoinAndy</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost-reading" src={GhostReading} alt="The Void logo"></img>
                    </div>
                    <div className="team-names">
                        <h3>Partnership/Advisement</h3>
                        <h4>RacerXeth</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
