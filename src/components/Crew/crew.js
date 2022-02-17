import React from "react";
import "./crew.css"
import CartoonOne from '../../assets/img/cartoon-one.png';
import CartoonTwo from '../../assets/img/cartoon-two.png';
import CartoonThree from '../../assets/img/cartoon-three.png';


const Crew = () => {
    return (
        <div className="crew" id="the-crew">

            <div className="title">
                <h1>The Council</h1>
            </div>

            <div className="section one">

                <div className="one">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Game Dev/Design</h3>
                        <h4>SolMageArena</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image small">
                        <img src={CartoonTwo} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>IPutOnMyRobe&WizardHat</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Lead Dev</h3>
                        <h4>DegenDangerDog</h4>
                    </div>
                </div>

                <div className="one">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Artist/Creative Director</h3>
                        <h4>PixelMancer</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image small">
                        <img src={CartoonTwo} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Community Mod/Project Direction</h3>
                        <h4>MageYouLook</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>CHIEF NAVIGATOR</h3>
                        <h4>Joseph</h4>
                    </div>
                </div>


                <div className="one">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Marketing/Partnerships/Media/Discord</h3>
                        <h4>Ryfi CryptoGuy</h4>
                    </div>
                </div>


                <div className="two">
                    <div className="image small">
                        <img src={CartoonTwo} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Partnership/Advisement</h3>
                        <h4>AltcoinAndy</h4>
                    </div>
                </div>

                <div className="three">
                    <div className="image">
                        <img src={CartoonThree} alt="The Void logo"></img>
                    </div>
                    <div className="crew-names">
                        <h3>Parternship/Advisement</h3>
                        <h4>RacerXeth</h4>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Crew
