import React from "react";
import "./crew.css";
import Ghost from "../../assets/img/Ghost.png";
import GhostThick from "../../assets/img/Ghost-Thick-Outline.png";
import GhostContrast from "../../assets/img/Ghost-More-Contrast.png";
import CartoonOne from '../../assets/img/cartoon-one.png';
import CartoonTwo from '../../assets/img/cartoon-two.png';
import CartoonThree from '../../assets/img/cartoon-three.png';


const Crew = () => {
    return (
        <div className="crew" id="the-crew">
            <div className="crew-title">
                <h1>The Council</h1>
            </div>

            <div className="section one">

                <div className="one">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Game Dev/Design</h3>
                        <h4>SolMageArena</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image">
                        <img className="ghost-thick" src={GhostThick} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>IPutOnMyRobe&WizardHat</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost-outline" src={GhostContrast} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Lead Dev</h3>
                        <h4>DegenDangerDog</h4>
                    </div>
                </div>

                <div className="one">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Artist/Creative Director</h3>
                        <h4>PixelMancer</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>MageYouLook</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Marketing/Partnerships</h3>
                        <h4>DegenMageCollector</h4>
                    </div>
                </div>


                <div className="one">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Marketing/Partnerships/Media/Discord</h3>
                        <h4>Ryfi CryptoGuy</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Partnership/Advisement</h3>
                        <h4>AltcoinAndy</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img className="ghost" src={Ghost} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Partnership/Advisement</h3>
                        <h4>RacerXeth</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Crew
